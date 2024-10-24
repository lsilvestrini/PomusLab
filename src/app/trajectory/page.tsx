import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Briefcase, 
  Code2, 
  Languages, 
  Wrench,
  Building2,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface Language {
  name: string;
  level: string;
}

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  achievements: string[];
}

const skills = {
  technical: [
    { name: "PowerBI", level: 90 },
    { name: "SQL", level: 70 },
    { name: "Python", level: 30 },
    { name: "Salesforce", level: 30 },
    { name: "React/Node.js", level: 10 }
  ],
  languages: [
    { name: "Portuguese 🇧🇷", level: "Native" },
    { name: "English 🇺🇸", level: "Fluent" },
    { name: "Spanish 🇪🇸", level: "Intermediate" }
  ],
  tools: [
    "Git", "Firebase", "PowerBI", "Salesforce", "Adobe Campaign",
    "Jira", "Miro", "Hadoop", "Excel", "Tableau",
    "Google Analytics", "Meta Ads", "Python", "SAS",
    "SQL", "Adobe Campaign", "DaVinci Resolve", "Photoshop",
    "Canva", "Midjourney", "Leonardo.ai"
  ]
};
const timeline = [
  {
    period: "01/2023 - Present",
    role: "Product Owner - Sales Ops & Growth Marketing",
    company: "Stellantis Financial Services",
    achievements: [
      "Data-driven decision making using analytics tools for campaign and sales operations performance",
      "Development of strategic reports using PowerBI, Power Query and Excel",
      "Cross-functional collaboration with sales, marketing, tech, legal, compliance, finance teams",
      "Clear stakeholder communication presenting findings and strategic recommendations",
      "Participation in agile ceremonies including sprint planning and retrospectives"
    ]
  },
  {
    period: "05/2022 - 01/2023",
    role: "Product Owner - Credit Cards",
    company: "Stellantis Financial Services",
    achievements: [
      "Managed Jeep Card, Ram Card and Stellantis Corporate Card products",
      "Developed complex launch strategies and lifecycle with personalized customer communications",
      "Implemented data-driven marketing strategies using PowerBI and Salesforce Marketing Cloud",
      "Established strategic partnerships to enhance product offerings",
      "Collaborated on UX/UI development for applications and websites",
      "Prepared performance reports for board committees",
      "Designed credit cards and welcome kits aligned with brand guidelines",
      "Conducted sales team training on card features and benefits",
      "Implemented processes compliant with Central Bank standards"
    ]
  },
  {
    period: "07/2021 - 02/2022",
    role: "Business Analyst - Credit Cards & CRM",
    company: "Itaú Unibanco",
    achievements: [
      "Created marketing strategies for co-branded cards (Players Bank, Click, Azul, Latam, Samsung, etc.)",
      "Structured and managed new card product launches",
      "Developed strategic partnerships to enhance market reach",
      "Executed large-scale omnichannel campaigns across social media, chatbot, email, and voice",
      "Created service channels including call center training materials",
      "Conducted data analysis and prepared executive reports",
      "Managed projects using agile methodologies",
      "Monitored legal aspects of data usage and industry compliance",
      "Planned and executed lifecycle campaigns using SAS, SQL, Hadoop, and other tools"
    ]
  },
  {
    period: "01/2020 - 07/2021",
    role: "Business Analyst - Co-Branded Cards",
    company: "Itaú Unibanco",
    achievements: [
      "Developed customer communication strategies focusing on optimal timing and channels",
      "Created and executed omnichannel marketing campaigns across social media, chatbot, and traditional channels",
      "Prepared and presented weekly reports in Superintendence meetings",
      "Developed projects collaborating with internal teams and external companies",
      "Applied statistical models for channel segmentation and campaign performance monitoring",
      "Created and monitored business indicators and marketing KPIs",
      "Prepared and presented executive committees",
      "Conducted product pricing analysis and campaign optimization",
      "Participated in Climate team promoting workplace diversity and team harmony",
      "Led product meetings with Mastercard, Visa and partners",
      "Utilized tools: SAS, SQL, Hadoop, Google Analytics, PowerBI, Miro, Jira"
    ]
  },
  {
    period: "04/2018 - 01/2020",
    role: "CRM Analyst - Credit Cards",
    company: "Itaú Unibanco",
    achievements: [
      "Conducted feasibility studies for relationship, engagement and acquisition campaigns",
      "Created and analyzed large-scale databases with millions of records",
      "Planned and executed structured lifecycle campaigns across multiple channels",
      "Managed social media, emails, direct mail, SMS and push notification campaigns",
      "Monitored campaign performance indicators and KPIs",
      "Performed Web Analytics",
      "Mastered tools: SAS, SQL, Hadoop, SAS CI, Adobe Campaign, Google Ads and Facebook Ads"
    ]
  }
];

function SkillBar({ name, level }: Skill) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground dark:text-gray-300">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div 
          className="h-2 bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
function TimelineItem({ item, index }: { item: typeof timeline[0], index: string }) {
  return (
    <AccordionItem value={index} className="border-none">
      <AccordionTrigger className="hover:no-underline">
        <div className="flex flex-col gap-2 text-left">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-muted-foreground">{item.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-blue-500" />
            <h3 className="font-semibold text-lg">{item.company}</h3>
          </div>
          <p className="text-base font-medium text-blue-600 dark:text-blue-400">{item.role}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-4">
        <Card className="border-none shadow-none">
          <CardContent className="p-0">
            <ul className="space-y-3">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 group">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0 group-hover:text-green-600 transition-colors duration-200" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
}


export default function ProfessionalTrajectory() {
  return (
    <div className="container mx-auto max-w-4xl p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lucas Silvestrini
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Product Owner & Business Growth
        </h2>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Professional Experience
          </h2>
          <p className="text-muted-foreground">
            Click on each role to see detailed responsibilities and achievements
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-500" />
              <CardTitle>Career Timeline</CardTitle>
              <CardDescription>Over 5 years of experience in Product & Business</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {timeline.map((item, index) => (
                <TimelineItem key={index} item={item} index={index.toString()} />
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

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
                  className="p-4 bg-gray-50 rounded-lg text-center dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="font-medium">{language.name}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-300">
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
                className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-default"
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