import { AudienceRoutes } from "@/components/audience-routes";
import { Container } from "@/components/container";
import { CoreBullets } from "@/components/core-bullets";
import { CTA } from "@/components/cta";
import { Experiences } from "@/components/experiences";
import { Flipper } from "@/components/flipper";
import { Heading } from "@/components/heading";
import { Press } from "@/components/press";
import { Projects } from "@/components/projects";
import { ProofStrip } from "@/components/proof-strip";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { experience } from "@/constants/experience";
import { projects } from "@/constants/projects";

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
        
        {/* Core value props */}
        <CoreBullets />
        
        {/* Social proof strip */}
        <ProofStrip />
        
        {/* Audience routing */}
        <AudienceRoutes />
        
        {/* Projects showcase */}
        <Projects projects={projects.slice(0, 3)} />
        
        {/* Experience timeline */}
        <Experiences experiences={experience} />
        
        {/* Press/Authority section */}
        <div id="press">
          <Press />
        </div>
        
        {/* Call to action */}
        <CTA />
      </Container>
    </div>
  );
}
