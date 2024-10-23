
import { GitHubUser, GitHubRepo, GitHubEvent } from "@/app/types/github"

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
      const userData = await userResponse.json() as GitHubUser
  
      if (!userResponse.ok) {
        const errorData = await userResponse.json() as ErrorResponse; // Cast to ErrorResponse
        throw new Error(errorData.message || 'Failed to fetch user data')
      }
  
      // Fetch repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        { headers }
      )
      const reposData = await reposResponse.json() as GitHubRepo[]
  
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repository data')
      }
  
      // Fetch recent activity
      const eventsResponse = await fetch(
        `https://api.github.com/users/${username}/events/public?per_page=10`,
        { headers }
      )
      const eventsData = await eventsResponse.json() as GitHubEvent[]
  
      if (!eventsResponse.ok) {
        throw new Error('Failed to fetch events data')
      }
  
      // Process the data
      const totalStars = reposData.reduce(
        (acc, repo) => acc + (repo.stargazers_count || 0),
        0
      )
  
      const languages = new Set<string>()
      reposData.forEach((repo) => {
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
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language,
            html_url: repo.html_url,
          })),
        recentActivity: eventsData.slice(0, 5).map((event) => ({
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
      throw error instanceof Error ? error : new Error('An unknown error occurred')
    }
  }
  
  interface ErrorResponse {
    message: string
    [key: string]: unknown
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
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch GitHub stats'
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      )
    }
  }