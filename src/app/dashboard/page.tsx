// app/dashboard/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { BarChart2, Terminal, Github } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MainStats } from "@/app/dashboard/main-stats"
import { GitHubStats } from "@/app/dashboard/github-stats"
import type { GitHubStats as GitHubStatsType } from '@/app/types/github'

export default function DashboardPage() {
  const [stats, setStats] = useState<GitHubStatsType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true)
        const response = await fetch('/api/github-stats')
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to fetch GitHub stats')
        }
        
        const data = await response.json()
        setStats(data)
        setError(null)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch GitHub stats')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (error) {
    return (
      <div className="flex-1 p-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          <h3 className="text-lg font-medium">Error Loading GitHub Data</h3>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        {stats?.profile && (
          <div className="flex items-center space-x-2">
            <a 
              href={`https://github.com/${stats.profile.login}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                View Profile
              </Button>
            </a>
          </div>
        )}
      </div>

      <Tabs defaultValue="main" className="space-y-4">
        <TabsList>
          <TabsTrigger value="main" className="flex items-center">
            <BarChart2 className="mr-2 h-4 w-4" />
            Main Stats
          </TabsTrigger>
          <TabsTrigger value="github" className="flex items-center">
            <Terminal className="mr-2 h-4 w-4" />
            GitHub
          </TabsTrigger>
        </TabsList>

        <TabsContent value="main">
          <MainStats />
        </TabsContent>

        <TabsContent value="github">
          <GitHubStats stats={stats} loading={loading} />
        </TabsContent>
      </Tabs>
    </div>
  )
}