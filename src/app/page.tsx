import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { Experiences } from "@/components/experiences";
import { Flipper } from "@/components/flipper";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Press } from "@/components/press";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { experience } from "@/constants/experience";
import { projects } from "@/constants/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Heading>Cristian Dan</Heading>
          <Flipper />
        </div>
        <Subheading>
          I build fintech infrastructure and AI-enabled products—from zero to production—bringing founder-level ownership with tech-lead execution.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Experiences experiences={experience} />
        <Press />
        <CTA />
      </Container>
    </div>
  );
}
