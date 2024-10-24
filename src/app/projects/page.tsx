import React from 'react';
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  githubLink?: string;
}

// Example data
const projects: Project[] = [
  {
    id: "1",
    title: "Pomus App",
    description: "An application to help users organize topics, subtopics, and create structured knowledge trees for better study management.",
    imageUrl: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "TypeScript", "Tailwind"],
    link: "https://pomus.app",
    githubLink: "https://github.com/username/pomus"
  },
  {
    id: "2",
    title: "Saúde Inteligente",
    description: "Health metrics visualization app with direct nutritionist monitoring for diet and training tracking.",
    imageUrl: "/api/placeholder/600/400",
    tags: ["React Native", "Firebase", "Express"],
    link: "https://saude.app"
  },
  {
    id: "3",
    title: "Braza Royale",
    description: "A strategic board game based on Battle Royale games like Fortnite, combining strategy and fun.",
    imageUrl: "/api/placeholder/600/400",
    tags: ["Game Design", "Strategy", "Board Game"],
    link: "https://braza.game"
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden relative h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
        <motion.div
          className="relative h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        <CardHeader className="flex flex-col items-center text-center">
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <CardDescription className="mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col items-center">
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-3 py-1 hover:bg-primary/10 transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 justify-center pb-6">
          <Button
            variant="default"
            className="gap-2"
            onClick={() => window.open(project.link, '_blank')}
          >
            <ExternalLink className="h-4 w-4" />
            Visit Project
          </Button>
          {project.githubLink && (
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <Github className="h-4 w-4" />
              View Code
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore my latest works and side projects
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}