import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../../data/projects";
import { Button } from "../../components/ui";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20 border-b border-neutral-800 pb-16 lg:mb-35" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-9 pt-8 mx-16 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            key={project.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900 shadow-xl"
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-white opacity-100 md:opacity-0 backdrop-blur-md transition-opacity duration-300 md:group-hover:opacity-100"
            >
              <h3 className="mb-4 text-xl font-bold text-center lg:text-2xl">{project.name}</h3>
              <p className="mb-6 text-center text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {project.siteLink && (
                  <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2">
                      View Site <MdArrowOutward />
                    </Button>
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2">
                    GitHub <MdArrowOutward />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
