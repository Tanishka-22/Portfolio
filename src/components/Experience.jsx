import React from 'react'
import { EXPERIENCE } from '../constants/index1'
import { motion } from 'framer-motion'

export const Experience = () => {
  return (
    <section id="experience" className="py-8 pt-20 border-b border-neutral-800 pb-16 lg:mb-35">
        <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">Experience</h2> 
        {EXPERIENCE.map((exp, index) => (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.5 }}
                key={index}
                className="mb-8 p-8 rounded-lg shadow-lg bg-neutral-900 border border-neutral-700 hover:shadow-xl transition-shadow"
                >
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-neutral-100">{exp.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-stone-300">{exp.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                    <h4 className="text-lg font-medium text-neutral-300">{exp.company}</h4>
                    <span className="ml-4 text-sm text-stone-400">{exp.location}</span>
                </div>
                <p className="text-base text-stone-200 leading-relaxed">{exp.description}</p>
            </motion.div>
        ))}
    </section>
  )
}
