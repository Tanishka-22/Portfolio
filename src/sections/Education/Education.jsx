import { EDUCATION } from "../../data/education"
import { motion } from "framer-motion"

const Education = () => {
  return (
    <section id="education" className="w-full py-8 pt-20 border-b border-neutral-800 pb-16 lg:mb-35">
        <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">Education</h2> 
        {EDUCATION.map((edu, index) => (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }} 
                key={index} 
                className="mb-8 p-8 rounded-lg shadow-lg bg-neutral-900 border border-neutral-700 hover:shadow-xl transition-shadow w-full max-w-4xl mx-auto"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-neutral-100">{edu.degree}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-stone-300 mt-2 md:mt-0">{edu.duration}</span>
                </div>
                <div className="flex items-center mb-4">
                    <h4 className="text-lg font-medium text-neutral-300">{edu.institute}</h4>
                </div>
                <p className="text-base text-stone-200 leading-relaxed">{edu.description}</p>
            </motion.div>
        ))}
    </section>
  )
}

export default Education
