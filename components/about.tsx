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
        Passionate Frontend and Web Developer with a strong foundation in
        JavaScript and a knack for creating user-friendly, responsive web
        applications. Experienced in designing and developing cutting-edge
        interfaces, optimizing performance, and ensuring seamless cross-platform
        compatibility. AWS Cloud Practitioner Certified with expertise in cloud
        services to enhance web applications. Committed to delivering
        exceptional user experiences and staying up-to-date with the latest web
        development trends and technologies.
      </p>
    </motion.section>
  );
}
