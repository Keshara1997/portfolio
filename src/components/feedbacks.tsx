import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { TESTIMONIALS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

// Feedback Card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 15,
        scale: 1.02,
        speed: 1000,
      }}
      className="group relative w-full sm:w-[380px]"
    >
      <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f3460]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none z-0" />

        {/* Quote Icon */}
        <div className="relative z-10 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <p className="text-white font-black text-[32px] leading-none">"</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 mb-6">
          <p className="text-gray-200 tracking-wide text-[16px] leading-relaxed group-hover:text-white transition-colors duration-300">
            {testimonial}
          </p>
        </div>

        {/* User Info */}
        <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
          {/* User Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <img
              src={image}
              alt={`feedback-by-${name}`}
              className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110"
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* Name */}
            <p className="text-white font-semibold text-[16px] leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 truncate">
              {name}
            </p>
            <p className="mt-1 text-gray-400 text-[13px] leading-tight group-hover:text-gray-300 transition-colors duration-300">
              {designation}
            </p>
            <p className="text-gray-500 text-[12px] leading-tight group-hover:text-gray-400 transition-colors duration-300">
              {company}
            </p>
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </Tilt>
  </motion.div>
);

// Feedbacks
export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()} className="mb-8">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>
            {/* <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> */}
              Testimonials.
            {/* </span> */}
          </h2>
        </motion.div>

        {/* Description */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, "tween", 0.1, 1)}
            className="mt-3 text-gray-400 text-lg max-w-3xl leading-relaxed"
          >
            Here's what people I've worked with have to say about my work and
            collaboration. Their feedback reflects my commitment to delivering
            quality solutions and building strong professional relationships.
          </motion.p>
        </div>

        {/* Feedback Cards Grid */}
        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <FeedbackCard key={testimonial.name} index={i} {...testimonial} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
