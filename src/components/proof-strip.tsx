import React from "react";
import Link from "next/link";
import { MotionDiv } from "./motion-div";

const proofItems = [
  {
    name: "Apple",
    label: "App of the Day",
    href: "https://apps.apple.com/gb/story/id1539957783",
  },
  {
    name: "Forbes",
    label: "30 Under 30",
    href: "https://www.forbes.ro/articles/forbes-30-sub-30-2021-cristian-dan-si-aspiratorul-digital-de-co2-232128",
  },
  {
    name: "TechCrunch",
    label: "Featured",
    href: "https://techcrunch.com/2020/12/23/yayzy-app-automatically-calculates-the-environmental-impact-of-your-spending/",
  },
  {
    name: "Antler",
    label: "Backed",
    href: "https://www.antler.co/blog/meet-13-companies-antler-london",
  },
  {
    name: "UK Gov",
    label: "Net Zero",
    href: "https://eu-admin.eventscloud.com/docs/200008108/200179015",
  },
];

export const ProofStrip = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="my-6"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        Featured In
      </p>
      <div className="flex flex-wrap items-center gap-4">
        {proofItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm transition hover:border-neutral-300 hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"
          >
            <span className="font-medium text-neutral-700 dark:text-neutral-200">
              {item.name}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </MotionDiv>
  );
};
