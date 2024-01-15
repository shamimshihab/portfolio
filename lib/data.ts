import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

import blog from "@/app/assets/blog.jpg";
import ecommerce from "@/app/assets/e-commerce.png";
import teamMember from "@/app/assets/teamMember.png";
import note from "@/app/assets/note.png";
import youtubeClone from "@/app/assets/youtube.png";
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
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
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
      "• Implemented a real-time information dashboard and alert system, enabling users to create and customize alert schedules. This involved choosing preferred notification methods and defining tailored actions, significantly enhancing the overall system's efficiency and responsiveness to individual preferences. \n\n" +
      "• Revitalized user engagement by transforming the recorded video searching feature. Enabled seamless listing, watching, archiving, deleting, and downloading of single or multiple videos based on specified time frames. Additionally, transformed the web application into a desktop version for alpha testing with clients.\n\n" +
      "• Empowered users to navigate individual monitors effortlessly at specified times using an intuitive mouse slider. Delivered results in a visually captivating format, featuring recorded videos, alert notifications, and associated snapshots for a seamless monitoring experience.\n\n" +
      "• Developed a reusable, component-based user interface, ensuring exceptional performance across various platforms and achieving cross-browser compatibility. Assisted clients in resolving technical issues, evaluated their feedback, and iteratively refined development processes to meet evolving client demands.\n\n" +
      "• Collaborated closely with the backend team to ensure secure integrations, meeting usability and performance benchmarks. Operated within an agile environment, planned sprints, and adhered to Scrum guidelines throughout the development process.\n\n" +
      "• Technologies Used: React, Redux, JavaScript, TypeScript, HTML, CSS, Material-UI, Rest API, Video.Js, Git, Electron, Socket.Io",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Mobile App Developer",
    employer: "Inspire: STEM for Social Impact(Co-Op)",
    location: "Victoria, BC",
    description:
      "• Developed and designed a cross-platform mobile app with an accessibility-focused UI for Victoria Brain Injury Society to ensure that adults with brain injury find support without barriers.\n\n" +
      "• Produced high-quality mock-ups and prototypes for user feedback, integrating user feedback into a user-centric design and documenting appropriate processes for using the application.\n\n" +
      "• Conducted testing, ensured optimal app performance and responsiveness, and participated in code reviews to maintain high-quality products.\n\n" +
      "• Presented project achievements and details at the Inspire conference, resulting in securing additional funding for the project’s extension.\n\n" +
      "• Led and coordinated multidisciplinary team members and organized discussions within the team to design, strategize, and implement the product.\n\n" +
      "• Technologies Used: JavaScript, React Native, Redux, Firebase, Git, Jira",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },

  {
    title: "Research Assistant & Teaching Assistant",
    employer: "University of Victoria",
    location: "Victoria, BC",
    description:
      "• Researched on securing IoT authentication protocol and found security vulnerabilities in existing schemes. Proposed a secure and efficient authentication protocol for practical implementation.,\n\n" +
      "• Assisted students with course material, marked exam script, helping the instructor ",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Full-Stack Blog App",
    description:
      "The Full Stack Blog Application is a comprehensive blogging platform that incorporates modern technologies to offer an intuitive user experience. It provides a feature-rich interface for users to register, log in, and perform CRUD operations on blog posts. The system ensures secure user authentication and facilitates seamless content creation, viewing, editing, and deletion. It prioritizes a user-centric design and robust functionality, enabling individuals to engage with and manage blog content efficiently.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material Ui",
      "Context-Api",
    ],
    imageUrl: blog,

    // imageUrl: rmtdevImg,
    githubLink: "https://github.com/shamimshihab/Full-Stack-Blog-",
    liveProjectLink: "https://test-seven-gamma-80.vercel.app/",
  },
  {
    title: "E-commerce Website",
    description:
      "Developeda a e-commerce platform, focused on delivering a responsive and versatile shopping experience. It presents a rich array of features including product browsing, comprehensive search and and filtering options, detailed product insights, cart management, and streamlined payment processing. With its emphasis on front-end development, Shoppers ensures seamless usability across diverse devices, providing users with an immersive and convenient online shopping environment.",
    tags: ["React", "Bootstrap", "Context-Api"],
    imageUrl: ecommerce,
    githubLink: "https://github.com/shamimshihab/E-commerce-Website",
    liveProjectLink:
      "https://e-commerce-website-nine-amber.vercel.app/",
  },
  {
    title: "Youtube Clone App",
    description:
      "This project aims to develop a responsive video platform resembling YouTube, ensuring smooth adaptability across diverse devices. Leveraging the Rapid API, it fetches YouTube data to showcase videos and channels. Users can search, playback videos, explore related channels, and receive suggested content, all designed with responsive design principles and integrated video playback functionalities.",
    tags: ["React", "Material Ui", "Context-Api", "Rapid-Api"],
    imageUrl: youtubeClone,
    githubLink: "https://github.com/shamimshihab/Youtube-Clone-",
    liveProjectLink:
      "https://video-tube-youtube-clone.netlify.app/video/6ZKDdzqN6B4",
  },
  {
    title: "Micro Front End Team managment App",
    description:
      "The Team Member Management App employs a cutting-edge micro frontend architecture, dividing the frontend into distinct micro apps. This setup enables seamless management of team member information with intuitive CRUD operations. Features like pagination, mandatory fields, and validation ensure organized data handling and a user-friendly experience.",
    tags: ["React", "Micro-Front-End", "Node.js", "MongoDB", "Material Ui"],
    imageUrl: teamMember,
    githubLink: "https://github.com/shamimshihab/Team-Member-Management-App",
    liveProjectLink: "",
  },

  {
    title: "Backend Note Taking App",
    description:
      "The Note Taking App Backend provides a RESTful API allowing users to manage notes. It enables user registration, authentication, and various note operations like creation, retrieval, update, and deletion. Additionally, the app facilitates secure user authentication and supports note sharing among users.",
    tags: ["Node.js", "Express.js", "MongoDb"],
    imageUrl: note,
    githubLink:
      "https://github.com/shamimshihab/Note-Taking-App-Backend/tree/main",
    liveProjectLink: "",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "React Native",
  "Python",
  "Micro-Frontend",
  "AWS",
  "MongoDB",
  "MySQL",
  "Redux",
  "Git",
  "Github",
  "Socket.io",
  "Web-Socket",
  "Context-Api",
  "Material-UI",
  "Tailwind",
  "Bootstrap",
  "Jest",
  "Jira",
  "HTML",
  "CSS",
] as const;
