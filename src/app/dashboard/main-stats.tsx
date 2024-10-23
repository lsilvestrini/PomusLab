import { StatCard } from "@/app/dashboard/stat-card"
import { Code2, Terminal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

  // components/dashboard/main-stats.tsx
  export function MainStats() {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Projects"
            value="12"
            description="Active projects"
            icon={<Code2 className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Technologies"
            value="8"
            description="Used in projects"
            icon={<Terminal className="h-4 w-4 text-muted-foreground" />}
          />
          {/* Add more stat cards */}
        </div>
        
        {/* Add more sections specific to main stats */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest development activities</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add your activity content */}
          </CardContent>
        </Card>
      </div>
    )
  }
  