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
  { label: "Contact", href: "#contact" },
];

import projectImage1 from "../assets/projects/project-1.png";
import projectImage2 from "../assets/projects/project-2.png";
import projectImage3 from "../assets/projects/project-3.png";
import projectImage4 from "../assets/projects/project-4.png";
import projectImage5 from "../assets/projects/project-5.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";


export const HERO_CONTENT = `
I am a skilled front-end developer and graphic designer, dedicated to creating 
visually compelling and highly responsive web interfaces. I harness the power of 
modern front-end technologies to deliver dynamic, user-friendly, and aesthetically 
refined digital experiences. By blending design creativity with technical expertise,
 I craft solutions that are both functional and engaging, driving meaningful user 
 interaction and business success.`;


export const PROJECTS = [
  {
    id: 1,
    name: "Language Translator",
    description:
      "A intuitive language translator web app built with HTML, CSS, and JavaScript, harnessing a powerful translation API to seamlessly convert text between any languages.",
    image: projectImage1,
    githubLink: "https://github.com/Tanishka-22/LanguageTranslator",
  },
  {
    id: 2,
    name: "Notes Management Application",
    description:
      "A robust notes management app built with HTML, CSS, JavaScript, and React, leveraging Firebase for seamless real-time data storage and synchronization.",
    image: projectImage2,
    githubLink: "https://github.com/Tanishka-22/Notes-Application",
  },
  {
    id: 3,
    name: "Meme Generator",
    description:
      "A fun and interactive meme generator app built with HTML, CSS, JavaScript, and React, utilizing the Imgflip API for easy meme creation and customization.",
    image: projectImage3,
    githubLink: "https://github.com/Tanishka-22/Meme-Generator",
  },
  {
    id: 4,
    name: "Rock-Paper-Scissor Game",
    description:
      "An engaging Rock-Paper-Scissors game developed with Python's Tkinter and Python Imaging Library (PIL), featuring vibrant visuals and interactive gameplay.",
    image: projectImage4,
    githubLink: "https://github.com/Tanishka-22/Rock-Paper-Scissors-Game",
  },
  {
    id: 5,
    name: "Lead Tracker Chrome Extension",
    description:
      "A streamlined lead tracker built with HTML, CSS, and JavaScript, designed to save Chrome browser tabs and user inputs for efficient lead management.",
    image: projectImage5,
    githubLink: "https://github.com/Tanishka-22/Lead-Tracker",
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

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institute: "Jabalpur Engineering College",
    duration: "September 2022 - present",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Participated in various projects involving frontend development, algorithms, and data structures. Gained valuable insights into computer fundamentals such as OOPs etc.",
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
