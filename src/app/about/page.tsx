import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Cristian Dan",
  description:
    "Fintech founder and tech lead. Forbes 30 Under 30. Building secure, scalable systems that ship.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <Subheading>
          Started bootstrapping in Romania, moved to London to scale startups, then co-founded Yayzy to solve hard data problems in fintech. Now focused on fintech infrastructure and AI product engineering—building systems that are secure, scalable, and actually ship.
        </Subheading>

        <Collage />

        <Timeline />
      </Container>
    </div>
  );
}
