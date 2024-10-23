// lib/github.ts
if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is not defined in environment variables')
  }
  
  export async function fetchGitHubStats(username: string) {
    const headers = {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  
    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 36000 } // Cache for 1 hour
      })
  
      if (!userResponse.ok) {
        throw new Error(`GitHub API error: ${userResponse.statusText}`)
      }
  
      // ... rest of your fetch logic ...
    } catch (error) {
      console.error('Error fetching GitHub data:', error)
      throw error
    }
  }