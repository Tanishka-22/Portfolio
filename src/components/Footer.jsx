import logo from "../assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from "../constants/index1"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="mb-8 mt-20 bg-black-700 border-t border-neutral-600 border-opacity-80 w-full">
        <div className="flex items-center justify-center">
            <img src={logo} width={200} className="mt-16 mb-12" />
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <motion.a 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.2, delay: index * 0.5 }} 
                    key={index} href={link.href} target="_blank" rel="noopener noreferred">
                    {link.icon}
                </motion.a>
            ))}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            &copy;compileTab. All rights reserved.
        </p>
    </div>
  )
}

export default Footer