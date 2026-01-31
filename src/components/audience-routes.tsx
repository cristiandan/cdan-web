import React from "react";
import Link from "next/link";
import { MotionDiv } from "./motion-div";

const routes = [
  {
    label: "Hiring?",
    description: "See my work and experience",
    href: "/projects",
    icon: "💼",
  },
  {
    label: "Partnering?",
    description: "Read press and credentials",
    href: "#press",
    icon: "🤝",
  },
];

export const AudienceRoutes = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="my-6 flex flex-wrap gap-3"
    >
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className="group flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 transition hover:border-neutral-300 hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"
        >
          <span className="text-lg">{route.icon}</span>
          <div>
            <span className="font-medium text-neutral-800 dark:text-neutral-100">
              {route.label}
            </span>
            <span className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">
              → {route.description}
            </span>
          </div>
        </Link>
      ))}
    </MotionDiv>
  );
};
