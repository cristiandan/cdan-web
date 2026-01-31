import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cristian Dan",
  description:
    "Fintech founder and tech lead. Forbes 30 Under 30. Building secure, scalable systems that ship.",
};

const narrative = [
  {
    title: "Origins",
    content: "Started bootstrapping early in Romania with City365—a hyper-local marketplace that scaled to tens of thousands of requests/sec on Azure. Built the full stack with a team of 3.",
  },
  {
    title: "London & Scale", 
    content: "Moved to London to lead mobile/frontend engineering at fast-paced startups like Zebra Fuel (logistics) and Stint (workforce), managing teams of 6+ and shipping products used by thousands.",
  },
  {
    title: "The Founder Path",
    content: "Co-founded Yayzy to solve a harder data problem—connecting Open Banking to carbon footprinting. Raised ~$1.5M, built a team of 7, shipped bank-grade secure infrastructure, and got featured as Apple App of the Day.",
  },
];

const currentStack = [
  { category: "Languages", items: "TypeScript, Python, Node.js" },
  { category: "Frontend", items: "React, React Native, Next.js" },
  { category: "Backend", items: "Node.js, Express, GraphQL, REST" },
  { category: "AI/ML", items: "LLM APIs, Python ML pipelines" },
  { category: "Infra", items: "AWS, Terraform, Docker, Serverless" },
  { category: "Data", items: "PostgreSQL, MongoDB, Redis" },
];

const principles = [
  {
    title: "Ship, then iterate",
    description: "Working software beats perfect plans. Get it live, measure, improve.",
  },
  {
    title: "Own the outcome",
    description: "I take founder-level responsibility—not just for my code, but for the product succeeding.",
  },
  {
    title: "Security by default",
    description: "In fintech, trust is everything. I build with compliance and security baked in from day one.",
  },
  {
    title: "Clear > clever",
    description: "I optimize for maintainability and team velocity over personal heroics.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <Subheading>
          From bootstrapping in Romania to leading engineering in London—I build fintech infrastructure and AI products that actually ship.
        </Subheading>

        {/* Narrative Arc */}
        <div className="my-10">
          <SectionHeading delay={0.2}>The Journey</SectionHeading>
          <div className="mt-6 space-y-6">
            {narrative.map((section, idx) => (
              <div key={section.title} className="border-l-2 border-neutral-200 pl-4 dark:border-neutral-700">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">
                  {section.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Doing Now */}
        <div className="my-10">
          <SectionHeading delay={0.3}>Now</SectionHeading>
          <div className="mt-4 rounded-xl bg-white p-6 shadow-[var(--shadow-aceternity)] dark:bg-neutral-800">
            <p className="text-neutral-700 dark:text-neutral-200">
              Focused on <strong>fintech infrastructure</strong> and <strong>AI product engineering</strong>. 
              Open to Tech Lead/EM roles and cofounder/partner conversations where I can build something meaningful at the intersection of financial services and AI.
            </p>
          </div>
        </div>

        {/* Current Stack */}
        <div className="my-10">
          <SectionHeading delay={0.4}>Stack</SectionHeading>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {currentStack.map((stack) => (
              <div key={stack.category} className="rounded-lg bg-white p-3 shadow-[var(--shadow-aceternity)] dark:bg-neutral-800">
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {stack.category}
                </p>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200">
                  {stack.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="my-10">
          <SectionHeading delay={0.5}>How I Work</SectionHeading>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-xl p-4 shadow-[var(--shadow-aceternity)] dark:bg-neutral-800/50">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">
                  {principle.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
