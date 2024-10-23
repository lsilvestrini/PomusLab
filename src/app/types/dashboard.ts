// types/dashboard.ts
export interface GitHubStats {
    profile: {
      login: string
      name: string | null
      avatarUrl: string
      bio: string | null
      publicRepos: number
      followers: number
      following: number
    }
    stats: {
      publicRepos: number
      followers: number
      totalStars: number
      languages: string[]
    }
    topRepos: {
      id: number
      name: string
      description: string | null
      stargazers_count: number
      forks_count: number
      language: string | null
      html_url: string
    }[]
    recentActivity: {
      id: string
      type: string
      repo: {
        name: string
        url: string
      }
      created_at: string
    }[]
  }