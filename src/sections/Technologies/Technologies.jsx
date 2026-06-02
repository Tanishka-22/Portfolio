import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES } from "../../data/technologies";



const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


//   {
//     id: "languages",
//     label: "Languages",
//     skills: [
//       { name: "C++", icon: <SiCplusplus className="text-7xl text-blue-600" />, duration: 3 },
//       { name: "Python", icon: <FaPython className="text-7xl text-blue-500" />, duration: 5 },
//       { name: "JavaScript", icon: <DiJavascript1 className="text-7xl text-yellow-500" />, duration: 6 },
//       { name: "SQL", icon: <TbSql className="text-7xl text-blue-400" />, duration: 4 },
//     ],
//   },
//   {
//     id: "web",
//     label: "Web Development",
//     skills: [
//       { name: "HTML5", icon: <RiHtml5Line className="text-7xl text-orange-600" />, duration: 3 },
//       { name: "CSS3", icon: <RiCss3Fill className="text-7xl text-blue-600" />, duration: 5 },
//       { name: "React.js", icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 4 },
//       { name: "Next.js", icon: <SiNextdotjs className="text-7xl text-white" />, duration: 3.5 },
//       { name: "Tailwind CSS", icon: <RiTailwindCssLine className="text-7xl text-cyan-400" />, duration: 2.5 },
//       { name: "Node.js", icon: <SiNodedotjs className="text-7xl text-green-600" />, duration: 5 },
//       { name: "Express.js", icon: <SiExpress className="text-7xl text-gray-400" />, duration: 3 },
//       { name: "REST APIs", icon: <SiPostman className="text-7xl text-orange-500" />, duration: 4 },
//       { name: "PWA", icon: <SiPwa className="text-7xl text-purple-500" />, duration: 3 },
//     ],
//   },
//   {
//     id: "database",
//     label: "Databases",
//     skills: [
//       { name: "MongoDB", icon: <SiMongodb className="text-7xl text-green-500" />, duration: 4 },
//       { name: "MySQL", icon: <SiMysql className="text-7xl text-blue-500" />, duration: 2.5 },
//       { name: "Firebase Firestore", icon: <SiFirebase className="text-7xl text-yellow-500" />, duration: 3.5 },
//     ],
//   },
//   {
//     id: "ai",
//     label: "AI & Emerging Tech",
//     skills: [
//       { name: "LLM APIs", icon: <SiOpenai className="text-7xl text-green-500" />, duration: 4 },
//       { name: "Prompt Engineering", icon: <SiAnthropic className="text-7xl text-white" />, duration: 3 },
//       { name: "AI Agent Workflows", icon: <MdOutlineSmartToy className="text-7xl text-cyan-500" />, duration: 5 },
//     ],
//   },
//   {
//     id: "core",
//     label: "Core Computer Science",
//     skills: [
//       { name: "DSA", icon: <FaCode className="text-7xl text-orange-500" />, duration: 3 },
//       { name: "OOP", icon: <TbHierarchy className="text-7xl text-purple-500" />, duration: 4 },
//       { name: "Operating Systems", icon: <VscTerminal className="text-7xl text-green-500" />, duration: 5 },
//       { name: "DBMS", icon: <FaDatabase className="text-7xl text-blue-400" />, duration: 3.5 },
//       { name: "Computer Networks", icon: <FaNetworkWired className="text-7xl text-blue-500" />, duration: 4 },
//       { name: "System Design", icon: <MdOutlineArchitecture className="text-7xl text-pink-500" />, duration: 5 },
//       { name: "Distributed Systems", icon: <VscServerProcess className="text-7xl text-yellow-600" />, duration: 4.5 },
//     ],
//   },
//   {
//     id: "tools",
//     label: "Tools & Practices",
//     skills: [
//       { name: "Git", icon: <FaGitAlt className="text-7xl text-orange-600" />, duration: 3 },
//       { name: "GitHub", icon: <RiGithubLine className="text-7xl text-white" />, duration: 4 },
//       { name: "Postman", icon: <SiPostman className="text-7xl text-orange-500" />, duration: 3 },
//       { name: "CI/CD", icon: <SiGithubactions className="text-7xl text-blue-500" />, duration: 5 },
//       { name: "Agile/Scrum", icon: <SiJira className="text-7xl text-blue-600" />, duration: 4 },
//       { name: "SDLC", icon: <MdOutlineWaterfallChart className="text-7xl text-green-400" />, duration: 3.5 },
//       { name: "VS Code", icon: <SiVisualstudiocode className="text-7xl text-blue-500" />, duration: 4 },
//       { name: "Figma", icon: <FaFigma className="text-7xl text-pink-500" />, duration: 5 },
//     ],
//   },
// ];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <section id="skills" className="border-b border-neutral-800 pb-24 lg:pb-32">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        Technical Bench
      </motion.h1>

      <div className="mb-12 flex flex-wrap justify-center gap-2 px-4">
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === category.id
                ? "text-white"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === category.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-neutral-800"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {SKILL_CATEGORIES.find((c) => c.id === activeTab).skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={iconVariants(skill.duration)}
                initial="initial"
                animate="animate"
                className="group relative"
              >
                <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-neutral-800 p-6 transition-all duration-300 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800/80 shadow-lg">
                  {skill.icon}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technologies;


// import { DiJavascript1 } from "react-icons/di";
// import { 
//   RiCss3Fill, 
//   RiGithubLine, 
//   RiHtml5Line, 
//   RiReactjsLine, 
//   RiTailwindCssLine 
// } from "react-icons/ri";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaPython, 
//   FaCode, 
//   FaNetworkWired, 
//   FaGitAlt, 
//   FaFigma, 
//   FaDatabase 
// } from "react-icons/fa6";
// import { 
//   SiMongodb, 
//   SiExpress, 
//   SiNodedotjs, 
//   SiMysql, 
//   SiTypescript, 
//   SiPostman, 
//   SiVisualstudiocode, 
//   SiNextdotjs, 
//   SiFirebase, 
//   SiPwa, 
//   SiCplusplus, 
//   SiOpenai, 
//   SiAnthropic,
//   SiGithubactions,
//   SiDiagramsdotnet,
//   SiJira
// } from "react-icons/si";
// import { VscTerminal, VscSymbolClass, VscServerProcess } from "react-icons/vsc";
// import { TbHierarchy, TbSql, TbArrowsDiff } from "react-icons/tb";
// import { MdOutlineSmartToy, MdOutlineArchitecture, MdOutlineWaterfallChart } from "react-icons/md";
// import { useState } from "react";

// const SKILL_CATEGORIES = [