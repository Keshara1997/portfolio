import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 15,
        scale: 1.02,
        speed: 1000,
      }}
      className="group relative w-full sm:w-[380px]"
    >
      <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f3460]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none z-10" />

        {/* Image Container */}
        <div className="relative w-full h-[280px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Action Buttons */}
          <div className="absolute inset-0 flex justify-end items-start p-4 gap-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {live_site_link && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 flex justify-center items-center cursor-pointer hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                title="Live Site"
              >
                <img
                  src={preview}
                  alt="Live Site"
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </motion.button>
            )}

            {source_code_link && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(source_code_link, "_blank", "noreferrer")
                }
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 flex justify-center items-center cursor-pointer hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                title="Source Code"
              >
                <img
                  src={github}
                  alt="Github"
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </motion.button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-white font-bold text-2xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
            {name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-[15px] leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, tagIdx) => (
              <span
                key={`Tag-${tagIdx}`}
                className={cn(
                  tag.color,
                  "text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                )}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()} className="mb-8">
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>
            <span className="bg-gradient-to-r">
              Projects.
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, "tween", 0.1, 1)}
            className="mt-3 text-gray-400 text-lg max-w-3xl leading-relaxed"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
