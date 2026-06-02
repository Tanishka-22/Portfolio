import logo from "../../../assets/images/logos/site-logo.png"
import { SOCIAL_MEDIA_LINKS } from "../../../data/social-links"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="mb-8 mt-20 pt-10 border-t border-neutral-800 w-full">
        <div className="flex items-center justify-center">
            <img src={logo} width={200} className="mb-12" alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <motion.a 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.2, delay: index * 0.1 }} 
                    key={index} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="hover:text-white hover:scale-110 transition-all duration-300"
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            &copy;compileTab. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer
