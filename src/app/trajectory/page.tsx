import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Code2, 
  Languages, 
  Wrench,
  Star,
} from 'lucide-react';

const skills = {
  technical: [
    { name: "SQL", level: 60 },
    { name: "PowerBI", level: 80 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 20 },
    { name: "TypeScript", level: 85 }
  ],
  languages: [
    { name: "Portuguese 🇧🇷", level: "Native" },
    { name: "English 🇺🇸", level: "Fluent" },
    { name: "Spanish 🇪🇸", level: "Intermediate" }
  ],
  tools: [
    "Git", "Docker", "AWS", "VS Code", "Figma",
    "Jira", "PostgreSQL", "MongoDB"
  ]
};

const timeline = [
  {
    year: "2023",
    role: "Senior Software Engineer",
    company: "Tech Innovation Labs",
    achievements: [
      "Led team of 5 developers",
      "Reduced system latency by 40%",
      "Implemented CI/CD pipeline"
    ]
  },
  {
    year: "2021",
    role: "Full Stack Developer",
    company: "Digital Solutions Inc",
    achievements: [
      "Developed e-commerce platform",
      "Improved API performance",
      "Mentored junior developers"
    ]
  },
  {
    year: "2019",
    role: "Frontend Developer",
    company: "WebCraft Studios",
    achievements: [
      "Built responsive web applications",
      "Implemented design systems",
      "Optimized site performance"
    ]
  }
];

const SkillBar = ({ name, level }: { name: string, level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full">
      <div 
        className="h-2 bg-blue-500 rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default function ProfessionalTrajectory() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      
      {/* Timeline Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-blue-500" />
            <CardTitle>Professional Timeline</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-8">
            <div className="absolute left-9 top-0 bottom-0 w-px bg-gray-200" />
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex items-center justify-center w-20">
                  <Badge variant="outline" className="z-10">
                    {item.year}
                  </Badge>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                    <ul className="mt-2 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <Star className="h-3 w-3 text-yellow-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-green-500" />
              <CardTitle>Technical Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.technical.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-purple-500" />
              <CardTitle>Languages</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {skills.languages.map((language, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg text-center"
                >
                  <h3 className="font-medium">{language.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language.level}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tools Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-orange-500" />
            <CardTitle>Tools & Technologies</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-3 py-1"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}