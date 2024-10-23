import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  tags: string[]
  links: {
    github: string
    live: string
  }
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    tags: ['React', 'TypeScript', 'Tailwind'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    tags: ['Next.js', 'Firebase', 'shadcn/ui'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    tags: ['React Native', 'Redux', 'Node.js'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Project 4',
    description: 'Description for project 4',
    tags: ['Vue.js', 'GraphQL', 'MongoDB'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Project 5',
    description: 'Description for project 5',
    tags: ['Angular', 'TypeScript', 'AWS'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Project 6',
    description: 'Description for project 6',
    tags: ['Python', 'Django', 'PostgreSQL'],
    links: {
      github: '#',
      live: '#'
    }
  },
]

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-t-lg" />
        </CardHeader>
        <CardContent className="space-y-4">
          <CardTitle className="text-2xl font-bold transition-colors group-hover:text-purple-600">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              size="sm"
              className="group/button"
              asChild
            >
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 transition-transform group-hover/button:scale-110" />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              className="group/button"
              asChild
            >
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/button:scale-110" />
                Live Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest works and personal projects. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}