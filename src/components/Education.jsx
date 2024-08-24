import { EDUCATION } from "../constants/index1"
import { motion } from "framer-motion"

const Education = () => {
  return (
    <section className="py-8 pt-20 border-b border-neutral-800 pb-16 lg:mb-35">
        <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">Education</h2> 
        {EDUCATION.map((edu, index) => (
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }} 
            key={index} className="mb-6 p-10">
                <h3 className="text-2xl m-4 font-semibold">{edu.degree}</h3>
                <p className="text-lg mx-4">{edu.institute}</p>
                <p className="text-sm mx-4 text-stone-300">{edu.duration}</p>
                <p className="mt-2 mx-4">{edu.description}</p>
            </motion.div>
        ))}
    </section>
  )
}

export default Education