"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Passionate full-stack developer with over 2 years of dedicated
        experience in the dynamic field of web development applications.
        Specialized focus on industry standards, incorporating best practices,
        and delivering fully responsive web designs to ensure optimal user
        experiences. Committed to achieving consumer satisfaction through
        innovative and solution-focused results. Proven ability to adapt to
        evolving business needs and maintain ongoing commitments. Adept at
        leveraging in-demand skills to drive project success and contribute to
        organizational growth. Eager to bring technical expertise, creativity,
        and a commitment to excellence to a dynamic team or project.
      </p>
    </motion.section>
  );
}
