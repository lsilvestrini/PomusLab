import React from 'react';
import { StatCard } from "@/app/dashboard/stat-card";
import { 
  Code2, 
  Terminal, 
  Users, 
  GitBranch, 
  Clock, 
  Star,
  Activity,
  CheckCircle 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Sample data structure
const activityData = [
  {
    id: 1,
    project: "E-commerce Platform",
    action: "Code pushed",
    timestamp: "2 hours ago",
    status: "success"
  },
  {
    id: 2,
    project: "Mobile App",
    action: "Pull request merged",
    timestamp: "5 hours ago",
    status: "success"
  },
  {
    id: 3,
    project: "Dashboard UI",
    action: "Branch created",
    timestamp: "1 day ago",
    status: "pending"
  }
];

const projectStats = {
  totalProjects: 12,
  technologies: 8,
  teamMembers: 15,
  completedTasks: 45,
  activeIssues: 23,
  codeReviews: 8,
  uptime: "99.9%",
  deployments: 128
};

export function MainStats() {
  return (
    <div className="space-y-6">
      {/* Top Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={projectStats.totalProjects.toString()}
          description="Active projects"
          icon={<Code2 className="h-4 w-4 text-blue-500" />}
        />
        <StatCard
          title="Technologies"
          value={projectStats.technologies.toString()}
          description="Used in projects"
          icon={<Terminal className="h-4 w-4 text-green-500" />}
        />
        <StatCard
          title="Team Members"
          value={projectStats.teamMembers.toString()}
          description="Contributing developers"
          icon={<Users className="h-4 w-4 text-purple-500" />}
        />
        <StatCard
          title="Completed Tasks"
          value={projectStats.completedTasks.toString()}
          description="Last 30 days"
          icon={<CheckCircle className="h-4 w-4 text-emerald-500" />}
        />
      </div>

      {/* Secondary Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Issues"
          value={projectStats.activeIssues.toString()}
          description="Pending resolution"
          icon={<Activity className="h-4 w-4 text-red-500" />}
        />
        <StatCard
          title="Code Reviews"
          value={projectStats.codeReviews.toString()}
          description="Awaiting review"
          icon={<GitBranch className="h-4 w-4 text-orange-500" />}
        />
        <StatCard
          title="System Uptime"
          value={projectStats.uptime}
          description="Last 30 days"
          icon={<Clock className="h-4 w-4 text-cyan-500" />}
        />
        <StatCard
          title="Deployments"
          value={projectStats.deployments.toString()}
          description="Successful deploys"
          icon={<Star className="h-4 w-4 text-yellow-500" />}
        />
      </div>

      {/* Recent Activity Card */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest development activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityData.map((activity) => (
              <div 
                key={activity.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{activity.project}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activity.status === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {activity.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}