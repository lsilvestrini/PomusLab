"use client"

import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { BookOpen,  Bot,  Command,  Frame,  LifeBuoy,  Map,  PieChart,  Send,  Settings2,  SquareTerminal} from "lucide-react"
import { Sidebar,  SidebarContent,  SidebarFooter,  SidebarHeader,  SidebarMenu,  SidebarMenuButton,  SidebarMenuItem,} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Lucas Silvestrini",
    email: "lucas.silvestrini@live.com",
    avatar:"LS"
  },
  navMain: [
    {
      title: "About Me",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "🚀 Trajectory",
          url: "/trajectory",
        },
        {
          title: "My Dashboard",
          url: "/dashboard",
        },
        {
          title: "Connections",
          url: "/connections",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Bot,
      items: [
        {
          title: "EduTech",
          url: "/projects/edutech",
        },
        {
          title: "Kind of Games",
          url: "#",
        },
        {
          title: "Fleet Management",
          url: "#",
        },
      ],
    },
    {
      title: "Dashboard",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "AI Applications",
      url: "/ai-applications",
      icon: Settings2,
      items: [
        {
          title: "Text Generation",
          url: "#",
        },
        {
          title: "Image Generation",
          url: "#",
        },
        {
          title: "Bussiness Generation",
          url: "#",
        },
        {
          title: "Game Generation",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar 
      variant="inset" 
      {...props}
      role="navigation"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex items-center gap-3">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Pomus Lab</span>
                  <span className="truncate text-xs">Developer</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}