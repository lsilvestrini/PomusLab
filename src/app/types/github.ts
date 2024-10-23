// types/github.ts
export interface GitHubUser {
    login: string
    name: string | null
    avatar_url: string
    bio: string | null
    public_repos: number
    followers: number
    following: number
  }
  
  export interface GitHubRepo {
    id: number
    name: string
    description: string | null
    stargazers_count: number
    forks_count: number
    language: string | null
    html_url: string
  }
  
  export interface GitHubEvent {
    id: string
    type: string
    repo: {
      name: string
      url: string
    }
    created_at: string
  }
  
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