import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am a passionate Software Engineer ( Full Stack Game Backend Developer ) with expertise in building immersive, scalable, and high-performing games across platforms. With strong proficiency in C#, C++, JavaScript/TypeScript, Node.js, and modern frameworks, I specialize in designing both client-side gameplay systems and server-side architectures to deliver seamless multiplayer and single-player experiences.

          My skills span the entire game development pipeline — from gameplay mechanics, graphics rendering, and UI/UX design, to backend systems such as real-time networking, RESTful APIs, databases, and cloud deployment. I have hands-on experience with Unity, Unreal Engine, and custom game engines, along with knowledge of microservices, DevOps practices, and database solutions (SQL & NoSQL) to support live game services.

          I thrive in collaborative environments, working closely with artists, designers, and other developers to turn creative visions into polished interactive experiences. With a solid foundation in algorithms, data structures, and optimization, I ensure games are not only engaging but also technically efficient and scalable.
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
