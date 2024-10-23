// app/api/github-stats/route.ts
import { NextResponse } from 'next/server'

async function fetchGitHubData(username: string) {
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
  }

  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 }
    })
    const userData = await userResponse.json()

    if (!userResponse.ok) {
      throw new Error(userData.message || 'Failed to fetch user data')
    }

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers }
    )
    const reposData = await reposResponse.json()

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repository data')
    }

    // Fetch recent activity
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=10`,
      { headers }
    )
    const eventsData = await eventsResponse.json()

    if (!eventsResponse.ok) {
      throw new Error('Failed to fetch events data')
    }
    type Repo = {
        stargazers_count: number;
        // Add other relevant fields if necessary
      }
      // Process the data
      const totalStars = reposData.reduce(
        (acc: number, repo: Repo) => acc + (repo.stargazers_count || 0),
        0
      )

    const languages = new Set<string>()
    reposData.forEach((repo: any) => {
      if (repo.language) languages.add(repo.language)
    })

    // Create a sanitized response object
    const sanitizedResponse = {
      profile: {
        login: userData.login,
        name: userData.name,
        avatarUrl: userData.avatar_url,
        bio: userData.bio,
        publicRepos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
      },
      stats: {
        publicRepos: userData.public_repos,
        followers: userData.followers,
        totalStars,
        languages: Array.from(languages),
      },
      topRepos: reposData
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5)
        .map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          html_url: repo.html_url,
        })),
      recentActivity: eventsData.slice(0, 5).map((event: any) => ({
        id: event.id,
        type: event.type,
        repo: {
          name: event.repo.name,
          url: `https://github.com/${event.repo.name}`,
        },
        created_at: event.created_at,
      })),
    }

    return sanitizedResponse
  } catch (error) {
    console.error('GitHub API Error:', error)
    throw error
  }
}

export async function GET() {
  try {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME
    
    if (!username) {
      return NextResponse.json(
        { error: 'GitHub username not configured' },
        { status: 400 }
      )
    }

    const data = await fetchGitHubData(username)
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch GitHub stats' },
      { status: 500 }
    )
  }
}