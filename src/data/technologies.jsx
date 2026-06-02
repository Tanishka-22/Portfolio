import { DiJavascript1 } from "react-icons/di";
import { 
  RiCss3Fill, 
  RiGithubLine, 
  RiHtml5Line, 
  RiReactjsLine, 
  RiTailwindCssLine 
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPython, 
  FaCode, 
  FaNetworkWired, 
  FaGitAlt, 
  FaFigma, 
  FaDatabase 
} from "react-icons/fa6";
import { 
  SiMongodb, 
  SiExpress, 
  SiNodedotjs, 
  SiMysql, 
  SiTypescript, 
  SiPostman, 
  SiVisualstudiocode, 
  SiNextdotjs, 
  SiFirebase, 
  SiPwa, 
  SiCplusplus, 
  SiOpenai, 
  SiAnthropic,
  SiGithubactions,
  SiDiagramsdotnet,
  SiJira
} from "react-icons/si";
import { VscTerminal, VscSymbolClass, VscServerProcess } from "react-icons/vsc";
import { TbHierarchy, TbSql, TbArrowsDiff } from "react-icons/tb";
import { MdOutlineSmartToy, MdOutlineArchitecture, MdOutlineWaterfallChart } from "react-icons/md";

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-7xl text-blue-600" />, duration: 3 },
      { name: "Python", icon: <FaPython className="text-7xl text-blue-500" />, duration: 5 },
      { name: "JavaScript", icon: <DiJavascript1 className="text-7xl text-yellow-500" />, duration: 6 },
      { name: "SQL", icon: <TbSql className="text-7xl text-blue-400" />, duration: 4 },
    ],
  },
  {
    id: "web",
    label: "Web Development",
    skills: [
      { name: "HTML5", icon: <RiHtml5Line className="text-7xl text-orange-600" />, duration: 3 },
      { name: "CSS3", icon: <RiCss3Fill className="text-7xl text-blue-600" />, duration: 5 },
      { name: "React.js", icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 4 },
      { name: "Next.js", icon: <SiNextdotjs className="text-7xl text-white" />, duration: 3.5 },
      { name: "Tailwind CSS", icon: <RiTailwindCssLine className="text-7xl text-cyan-400" />, duration: 2.5 },
      { name: "Node.js", icon: <SiNodedotjs className="text-7xl text-green-600" />, duration: 5 },
      { name: "Express.js", icon: <SiExpress className="text-7xl text-gray-400" />, duration: 3 },
      { name: "REST APIs", icon: <SiPostman className="text-7xl text-orange-500" />, duration: 4 },
      { name: "PWA", icon: <SiPwa className="text-7xl text-purple-500" />, duration: 3 },
    ],
  },
  {
    id: "database",
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-7xl text-green-500" />, duration: 4 },
      { name: "MySQL", icon: <SiMysql className="text-7xl text-blue-500" />, duration: 2.5 },
      { name: "Firebase Firestore", icon: <SiFirebase className="text-7xl text-yellow-500" />, duration: 3.5 },
    ],
  },
  {
    id: "ai",
    label: "AI & Emerging Tech",
    skills: [
      { name: "LLM APIs", icon: <SiOpenai className="text-7xl text-green-500" />, duration: 4 },
      { name: "Prompt Engineering", icon: <SiAnthropic className="text-7xl text-white" />, duration: 3 },
      { name: "AI Agent Workflows", icon: <MdOutlineSmartToy className="text-7xl text-cyan-500" />, duration: 5 },
    ],
  },
  {
    id: "core",
    label: "Core Computer Science",
    skills: [
      { name: "DSA", icon: <FaCode className="text-7xl text-orange-500" />, duration: 3 },
      { name: "OOP", icon: <TbHierarchy className="text-7xl text-purple-500" />, duration: 4 },
      { name: "Operating Systems", icon: <VscTerminal className="text-7xl text-green-500" />, duration: 5 },
      { name: "DBMS", icon: <FaDatabase className="text-7xl text-blue-400" />, duration: 3.5 },
      { name: "Computer Networks", icon: <FaNetworkWired className="text-7xl text-blue-500" />, duration: 4 },
      { name: "System Design", icon: <MdOutlineArchitecture className="text-7xl text-pink-500" />, duration: 5 },
      { name: "Distributed Systems", icon: <VscServerProcess className="text-7xl text-yellow-600" />, duration: 4.5 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Practices",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-7xl text-orange-600" />, duration: 3 },
      { name: "GitHub", icon: <RiGithubLine className="text-7xl text-white" />, duration: 4 },
      { name: "Postman", icon: <SiPostman className="text-7xl text-orange-500" />, duration: 3 },
      { name: "CI/CD", icon: <SiGithubactions className="text-7xl text-blue-500" />, duration: 5 },
      { name: "Agile/Scrum", icon: <SiJira className="text-7xl text-blue-600" />, duration: 4 },
      { name: "SDLC", icon: <MdOutlineWaterfallChart className="text-7xl text-green-400" />, duration: 3.5 },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-7xl text-blue-500" />, duration: 4 },
      { name: "Figma", icon: <FaFigma className="text-7xl text-pink-500" />, duration: 5 },
    ],
  },
];