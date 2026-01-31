import React from "react";
import { SectionHeading } from "./section-heading";
import Link from "next/link";

const pressItems = [
  {
    title: "Apple App of the Day",
    description: "Featured on the App Store for UX and impact.",
    source: "Apple",
    href: "https://apps.apple.com/gb/story/id1539957783",
    icon: "🍎",
  },
  {
    title: "Forbes 30 Under 30",
    description: "Recognized for innovation in fintech and sustainability.",
    source: "Forbes Romania",
    href: "https://www.forbes.ro/articles/forbes-30-sub-30-2021-cristian-dan-si-aspiratorul-digital-de-co2-232128",
    icon: "📰",
  },
  {
    title: "TechCrunch Feature",
    description: "Coverage of Yayzy's launch and automated carbon tracking.",
    source: "TechCrunch",
    href: "https://techcrunch.com/2020/12/23/yayzy-app-automatically-calculates-the-environmental-impact-of-your-spending/",
    icon: "💚",
  },
  {
    title: "BBC Interview",
    description: "Discussing fintech innovation and sustainability.",
    source: "BBC",
    href: "https://www.youtube.com/watch?v=FlXCRRrPuAs",
    icon: "🎙️",
  },
  {
    title: "UK Net Zero Innovation",
    description: "Featured as a top UK climate-tech innovation case study.",
    source: "UK Government",
    href: "https://eu-admin.eventscloud.com/docs/200008108/200179015",
    icon: "🇬🇧",
  },
  {
    title: "Antler Investment",
    description: "Selected from 1,800+ applicants for inaugural London cohort.",
    source: "Antler",
    href: "https://www.antler.co/blog/meet-13-companies-antler-london",
    icon: "🦌",
  },
];

export const Press = () => {
  return (
    <div className="my-4 px-4 py-4">
      <SectionHeading className="mb-4" delay={0.7}>
        Featured In
      </SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pressItems.map((item, idx) => (
          <PressCard key={`press-${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
};

const PressCard = ({
  title,
  description,
  source,
  href,
  icon,
}: {
  title: string;
  description: string;
  source: string;
  href: string;
  icon: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-xl p-4 shadow-[var(--shadow-aceternity)] transition duration-300 hover:shadow-md hover:scale-[1.02]"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {source}
        </span>
      </div>
      <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
      <span className="mt-auto text-xs text-blue-600 dark:text-blue-400 group-hover:underline">
        Read more →
      </span>
    </Link>
  );
};
