import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  // { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

import projectImage1 from "../assets/projects/project-1.png";
import projectImage2 from "../assets/projects/project-2.png";
import projectImage3 from "../assets/projects/project-3.png";
import projectImage4 from "../assets/projects/project-4.png";
import projectImage5 from "../assets/projects/project-5.png";
import projectImage6 from "../assets/projects/project-6.png";
import projectImage7 from "../assets/projects/project-7.png";
import projectImage8 from "../assets/projects/project-8.png";
import projectImage9 from "../assets/projects/project-9.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";



export const HERO_CONTENT = `
I’m a passionate Full-Stack Developer and aspiring Software Engineer dedicated to building scalable, user-focused applications. On the front end, I specialize in React and Next.js, while my back-end expertise includes Node.js, Express.js, MongoDB, and MySQL. With a strong foundation in DSA, OOP, DBMS, and SQL, I engineer solutions that are not only efficient but also intuitive and visually engaging. Currently, I’m expanding my skill set by exploring Generative AI, aiming to merge creativity with cutting-edge technology to drive innovation in modern software development.`;

export const PROJECTS = [
   {
    id: 1,
    name: "Employee Management System",
    description:
      "A employee management system for handling employee records and related operations built with React.js and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/Tanishka-22/EmployeeMS",
    siteLink: "https://employee-ms-nxdf.vercel.app/",
  },
   {
    id: 1,
    name: "Events Aggregator",
    description:
      "An event aggregator built with the MERN stack and Cheerio for web scrapping",
    image: projectImage7,
    githubLink: "https://github.com/Tanishka-22/Event-Ticket",
    siteLink: "https://sydney-events-ticket.vercel.app/",
  },
   {
    id: 1,
    name: "SHEild Women Safety App",
    description:
      "A safety PWA built with Next.js, Firebase and Capacitor plugins.",
    image: projectImage8,
    githubLink: "https://github.com/Tanishka-22/SHEild",
    siteLink: "https://sheild.vercel.app/",
  },
  {
    id: 1,
    name: "Form Builder",
    description:
      "A dynamic multi-step form builder built with React Remix, Zustand, Typescript and Tailwind CSS, featuring drag-and-drop field creation, real-time preview, field configuration, and shareable form links",
    image: projectImage9,
    githubLink: "https://github.com/Tanishka-22/form-builder",
    siteLink: "https://form-builder-seven-fawn.vercel.app/",
  },
  {
    id: 4,
    name: "Rock-Paper-Scissor Game",
    description:
      "An engaging Rock-Paper-Scissors game developed with Python's Tkinter and Python Imaging Library (PIL), featuring vibrant visuals and interactive gameplay.",
    image: projectImage4,
    githubLink: "https://github.com/Tanishka-22/Rock-Paper-Scissors-Game",
    siteLink: "https://sheild.vercel.app/",
  },
  {
    id: 1,
    name: "Language Translator",
    description:
      "A intuitive language translator web app built with HTML, CSS, and JavaScript, harnessing a powerful translation API to seamlessly convert text between any languages.",
    image: projectImage1,
    githubLink: "https://github.com/Tanishka-22/LanguageTranslator",
    siteLink: "https://lang-converter-translator.netlify.app/",
  },
  {
    id: 2,
    name: "Notes Management Application",
    description:
      "A robust notes management app built with HTML, CSS, JavaScript, and React, leveraging Firebase for seamless real-time data storage and synchronization.",
    image: projectImage2,
    githubLink: "https://github.com/Tanishka-22/Notes-Application",
    siteLink: "https://notes-application-theta.vercel.app/",
  },
  {
    id: 3,
    name: "Meme Generator",
    description:
      "A fun and interactive meme generator app built with HTML, CSS, JavaScript, and React, utilizing the Imgflip API for easy meme creation and customization.",
    image: projectImage3,
    githubLink: "https://github.com/Tanishka-22/Meme-Generator",
    siteLink: "https://meme-generator-self-iota.vercel.app/",
  },
  {
    id: 5,
    name: "Lead Tracker Chrome Extension",
    description:
      "A streamlined lead tracker built with HTML, CSS, and JavaScript, designed to save Chrome browser tabs and user inputs for efficient lead management.",
    image: projectImage5,
    githubLink: "https://github.com/Tanishka-22/Lead-Tracker",
    siteLink: "https://lead-tracker-chromeextension.netlify.app/",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institute: "Jabalpur Engineering College",
    duration: "September 2022 - present",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Participated in various projects involving frontend development, algorithms, and data structures. Gained valuable insights into computer fundamentals such as Object Oriented Programming, DBMS, Computer Networks etc.",
  },
];


export const EXPERIENCE = [
  {
    title: "Digital Transformation Intern",
    company: "HTL Aircon Pvt. Ltd.",
    duration: "June 2025 - July 2025",
    location: "Mumbai, Maharashtra",
    description:
      "Assisted in automating workflows across 5+ departments, reducing manual tasks by 35% and boosting operational efficiency. Gathered CRM unit requirements, mapped 10,000+ records, and contributed to enhancing system architecture based on user feedback, improving usability by 25%. Conducted integration testing, assisted in UAT, created training materials, and onboarded 50+ employees, resulting in a 40% increase in user adoption.",
  },
  {
    title: "Web Developer Intern",
    company: "Tigmo Development Pvt. Ltd.",
    duration: "March 2025",
    location: "Remote",
    description:
      "Developed and optimized React.js components, improving app performance by 20%. Integrated RESTful APIs, streamlining data workflows, reducing load times by 15%. Debugged, tested and contributed to delivering client-facing solutions on schedule.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/tanishkas.22/?hl=en",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/tanishka-shivhare-55876124b/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

export const SOCIAL_MEDIA_LINKS_PROFILE = [
  {
    href: "#",
    icon: <FaDiscord fontSize={23} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/tanishkas.22/?hl=en",
    icon: <FaInstagram fontSize={23} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={23} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/tanishka-shivhare-55876124b/",
    icon: <FaLinkedin fontSize={23} className="hover:opacity-80" />,
  },
];
