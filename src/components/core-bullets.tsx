import React from "react";
import { MotionDiv } from "./motion-div";

const bullets = [
  {
    icon: "🚀",
    title: "Ship end-to-end",
    description: "Architecture, backend, frontend, infra (AWS/Terraform).",
  },
  {
    icon: "👥",
    title: "Lead with context",
    description: "Built & led distributed teams (up to 7 engineers) with founder constraints.",
  },
  {
    icon: "🔒",
    title: "Scale securely",
    description: "Open Banking integrations (2,500+ banks), ISO 27001 compliance.",
  },
];

export const CoreBullets = () => {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {bullets.map((bullet, idx) => (
        <MotionDiv
          key={bullet.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.1 }}
          className="rounded-xl p-4 shadow-[var(--shadow-aceternity)] transition duration-300 hover:shadow-md"
        >
          <div className="mb-2 text-2xl">{bullet.icon}</div>
          <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">
            {bullet.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {bullet.description}
          </p>
        </MotionDiv>
      ))}
    </div>
  );
};
