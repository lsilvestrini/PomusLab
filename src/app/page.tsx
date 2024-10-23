import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to Pomus Lab
          </h1>
          <p className="text-xl text-muted-foreground">
            A creative workspace for innovative solutions
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="p-6 backdrop-blur-sm border-muted">
          <CardContent className="space-y-4 p-2">
            <h2 className="text-2xl font-semibold">Hi, I&apos;m Luke 👋</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate bussiness, marketing and tech developer focused on creating elegant solutions to complex problems. 
              With expertise in web development and a keen eye for design, I build modern applications 
              that make a difference.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="default">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Get in Touch
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>🚀 Full Stack Development</li>
              <li>💡 UI/UX Design with modern frameworks</li>
              <li>🛠 System Architecture using Typescript, Node.js and Python</li>
              <li>📱 Mobile Applications using React Native and Expo</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>⚡ Next.js & React</li>
              <li>🎨 Tailwind CSS</li>
              <li>🔧 TypeScript</li>
              <li>☁️ Cloud Services with Firebase</li>
            </ul>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-8">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
}