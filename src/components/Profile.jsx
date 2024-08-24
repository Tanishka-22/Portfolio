import { HERO_CONTENT } from "../constants/index1";
import profilePic from "../assets/tanishka.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { SOCIAL_MEDIA_LINKS_PROFILE } from "../constants/index1";
import { motion } from "framer-motion"; // Assuming you're using framer-motion

const Profile = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I'm Tanishka Shivhare",
        "A Web Developer",
        "A Graphic Designer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      startDelay: 1200,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const typedText = (delay) => ({
    hidden: { x:0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35 ">
      <div className="flex justify-center flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center align-content-center lg:items-start">
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl tracking-tight mt-6 lg:mt-16 lg:pt-16"
            >
              Hola!
            </motion.span>
            <motion.span
              variants={typedText(1.2)}
              initial="hidden"
              animate="visible"
              ref={typedRef}
              className="lg:text-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text py-6 text-6xl lg:text-7xl text-transparent font-thin tracking-tight"
            ></motion.span>
            <motion.p
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="max-w-xl lg:text-small pb-6 font-light tracking-lighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-5"
            >
              {SOCIAL_MEDIA_LINKS_PROFILE.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              width={580}
              src={profilePic}
              alt="TS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
