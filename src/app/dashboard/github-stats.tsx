import React from 'react'
import { GitHubRepo,  GitHubStats as GitHubStatsType } from "@/app/types/github"

import { 
    Code2, 
    Github, 
    Star,
    GitFork,
    Users,
    Activity,
    Languages,
  } from 'lucide-react'
  import { formatDistanceToNow } from 'date-fns'
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Skeleton } from "@/components/ui/skeleton"
  import { StatCard } from "./stat-card"
  
  interface GitHubStatsProps {
    stats: GitHubStatsType | null
    loading: boolean
  }

  interface GitHubStats {
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
  
  interface GitHubStatsProps {
    stats: GitHubStats | null
    loading: boolean
  }
  
  export function GitHubStats({ stats, loading }: GitHubStatsProps) {
    function formatDate(date: string) {
      return formatDistanceToNow(new Date(date), { addSuffix: true })
    }
  
    return (
      <div className="space-y-4">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Public Repos"
            value={stats?.stats.publicRepos || 0}
            description="Public repositories"
            icon={<Code2 className="h-4 w-4 text-muted-foreground" />}
            loading={loading}
          />
          
          <StatCard
            title="Total Stars"
            value={stats?.stats.totalStars || 0}
            description="Across all repositories"
            icon={<Star className="h-4 w-4 text-muted-foreground" />}
            loading={loading}
          />
          
          <StatCard
            title="Followers"
            value={stats?.stats.followers || 0}
            description="GitHub followers"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
            loading={loading}
          />
          
          <StatCard
            title="Languages"
            value={stats?.stats.languages.length || 0}
            description="Different languages used"
            icon={<Languages className="h-4 w-4 text-muted-foreground" />}
            loading={loading}
          />
        </div>
  
        {/* Repositories and Activity */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Top Repositories */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Top Repositories</CardTitle>
              <CardDescription>Most starred repositories</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {stats?.topRepos.map((repo: GitHubRepo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted">
                        <div className="space-y-1">
                          <h3 className="font-medium">{repo.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {repo.description || "No description available"}
                          </p>
                          {repo.language && (
                            <p className="text-sm">
                              <span className="text-muted-foreground">Built with:</span>{" "}
                              {repo.language}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-muted-foreground">
                            <Star className="mr-1 h-4 w-4" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <GitFork className="mr-1 h-4 w-4" />
                            <span>{repo.forks_count}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
  
          {/* Recent Activity */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest GitHub events</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {stats?.recentActivity.map((event) => (
                    <div key={event.id} className="flex items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href={event.repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm font-medium hover:underline"
                        >
                          {event.type.replace('Event', '')} on {event.repo.name}
                        </a>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(event.created_at)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }