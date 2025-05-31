import { DiJavascript1 } from "react-icons/di"
import { RiCss3Fill, RiGithubLine, RiHtml5Line, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri"
import cLogo from "../assets/c.png" 
import {motion} from "framer-motion";
import { FaPython } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiNodedotjs, SiMysql, SiTypescript, SiPostman } from "react-icons/si"

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
  
  const Technologies = () => {
    return (
      <div className="border-b border-neutral-800 align-content-center pb-24 lg:pb-30">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="my-20 text-center text-4xl">Skills</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Javascript */}
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <DiJavascript1 className="text-7xl text-yellow-500" />
            </div>
          </motion.div>
          {/* MongoDB */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <SiMongodb className="text-7xl text-green-600" />
            </div>
          </motion.div>
          {/* ExpressJS */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <SiExpress className="text-7xl text-gray-700" />
            </div>
          </motion.div>
          {/* ReactJS */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
          </motion.div>
          {/* NodeJS */}
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <SiNodedotjs className="text-7xl text-green-700" />
            </div>
          </motion.div>
          {/* Github */}
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <RiGithubLine className="text-7xl" />
            </div>
          </motion.div>
          {/* The rest */}
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <img src={cLogo} width={72} alt="C Logo" />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <RiHtml5Line className="text-7xl text-orange-700" />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <RiCss3Fill className="text-7xl text-blue-800" />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <RiTailwindCssLine className="text-7xl text-cyan-400" />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <FaPython className="text-7xl text-blue-800" />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <SiMysql className="text-7xl text-blue-500" />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <SiTypescript className="text-7xl text-blue-700" />
            </div>
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
          >
            <div className="skills rounded-2xl border-2 border-neutral-800 p-4">
              <SiPostman className="text-7xl text-orange-500" />
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Technologies;