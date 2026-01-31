import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cristian Dan",
  description:
    "Get in touch for fintech, AI, or startup opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Get in Touch</Heading>
        <Subheading>
          Open to conversations about fintech, AI products, or startup opportunities. Let's build something together.
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
