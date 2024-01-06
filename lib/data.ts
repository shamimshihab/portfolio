import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    employer: "Shinobi Systems",
    location: "Vancouver, BC",
    description:
      "• Design and develop a cutting-edge network video recorder web application by leveraging Shinobi’s Rest API, establishing a centralized hub for seamless video surveillance and management.\n\n" +
      "• Develop a reusable, component-based user interface, ensuring exceptional performance across various platforms and have cross-browser compatibility while optimizing speed and scalability.\n\n" +
      "• Implement a real-time alert system and customizable event scheduling, collaborating closely with the backend team to ensure secure integrations that met usability and performance benchmarks.\n\n" +
      "• Enhance user engagement by implementing advanced video management features encompassing selection, search, and sorting functionalities and transform the web application into a desktop version for alpha testing for clients.\n\n" +
      "• Operate within an agile environment, plan sprints, and adhere to Scrum guidelines for the development process.\n\n" +
      "• Assist clients in resolving technical issues, evaluating their feedback, and iteratively refining the development processes to meet clients' evolving demands.\n\n" +
      "• Technologies Used: React, Redux, JavaScript, TypeScript, HTML, CSS, Material-UI, Rest API, Video.Js, Git, Electron, Socket.Io",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Mobile App Developer",
    employer: "Inspire: STEM for Social Impact(Co-Op)",
    location: "Victoria, BC",
    description:
      "Developed and designed a cross-platform mobile app with an accessibility-focused UI for Victoria Brain Injury Society to ensure that adults with brain injury find support without barriers. Produced high-quality mock-ups and prototypes for user feedback, integrating user feedback into a user-centric design and documenting appropriate processes for using the application. Conducted testing, ensured optimal app performance and responsiveness, and participated in code reviews to maintain high-quality products. Presented project achievements and details at the Inspire conference, resulting in securing additional funding for the project’s extension. Led and coordinated multidisciplinary team members and organized discussions within the team to design, strategize, and implement the product.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Research Assistant & Teaching Assistant",
    employer: "University of Victoria",
    location: "Victoria, BC",
    description:
      "Researched on securing IoT authentication protocol and found security vulnerabilities in existing schemes.Proposed a secure and efficient authentication protocol for practical implementation",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Full-Stack Blog App",
    description: "",
    tags: ["React", "Node.js", "MongoDB", "Material Ui", "Context-Api"],
    // imageUrl: corpcommentImg,
    githubLink: "https://github.com/shamimshihab/Full-Stack-Blog-",
    liveProjectLink: "https://test-seven-gamma-80.vercel.app/",
  },
  {
    title: "E-commerce Website",
    description: "",
    tags: ["React", "Tailwind", "Redux"],
    // imageUrl: rmtdevImg,
    githubLink: "https://github.com/shamimshihab/E-commerce-Website",
    liveProjectLink: "",
  },
  {
    title: "Micro Front End Team managment App",
    description: "",
    tags: ["React", "Micro-Front-End", "Node.js", "MongoDB", "Material Ui"],
    // imageUrl: wordanalyticsImg,
    githubLink: "https://github.com/shamimshihab/Team-Member-Management-App",
    liveProjectLink: "",
  },

  {
    title: "Backend Note Taking App",
    description: "",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    // imageUrl: rmtdevImg,
    githubLink: "",
    liveProjectLink: "",
  },

  {
    title: "Youtube Clone App",
    description: "",
    tags: ["React", "Redux", "Material Ui", "Context-Api"],
    // imageUrl: rmtdevImg,
    githubLink: "",
    liveProjectLink: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
] as const;
