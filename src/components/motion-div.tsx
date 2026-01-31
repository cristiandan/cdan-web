"use client";
import { HTMLMotionProps, motion } from "motion/react";
import React from "react";

export const MotionDiv = (props: HTMLMotionProps<"div">) => {
  return <motion.div {...props} />;
};
