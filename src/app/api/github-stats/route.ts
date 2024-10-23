// app/api/github-stats/route.ts
import { fetchGitHubStats } from '@/lib/github'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const stats = await fetchGitHubStats('lsilvestrini')
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub stats' },
      { status: 500 }
    )
  }
}