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
      className="xs:w-[280px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[24px] shadow-card hover:shadow-[0px_35px_120px_-15px_rgba(0,206,168,0.3)] transition-all duration-300"
      >
        <div className="bg-tertiary rounded-[24px] py-8 px-8 min-h-[320px] flex justify-evenly items-center flex-col backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00cea8]/20 to-[#bf61ff]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
            <img
              src={icon}
              alt={title}
              className="w-20 h-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-white text-[22px] font-bold text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00cea8] group-hover:to-[#bf61ff] transition-all duration-300">
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
        <motion.div variants={textVariant()} className="mb-8">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} relative inline-block`}>
            <span className="relative z-10">Overview</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-[#00cea8] to-[#bf61ff] rounded-full"
            />
          </h2>
        </motion.div>

        {/* Body - Split into sections */}
        <div className="mt-10 space-y-8">
          {/* Main Introduction */}
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 1)}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00cea8] to-[#bf61ff] rounded-full opacity-50" />
            <p className="text-secondary text-[18px] max-w-4xl leading-[32px] pl-6">
              I am a <span className="text-white font-semibold">Software Engineer</span> and{" "}
              <span className="text-white font-semibold">Full Stack Game Backend Developer</span> specializing in <span className="text-[#00cea8]">real-money casino games</span> and <span className="text-[#00cea8]">secure game backend systems</span>. I have strong expertise in <span className="text-[#00cea8]">C#</span>, <span className="text-[#00cea8]">C++</span>, <span className="text-[#00cea8]">JavaScript/TypeScript</span>, and <span className="text-[#00cea8]">Node.js</span>, and I design both client-side gameplay logic and highly secure, scalable server-side architectures for casino and online gaming platforms.
            </p>
          </motion.div>

          {/* Focus Section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="relative"
          >
            <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#bf61ff] to-[#00cea8] rounded-full opacity-50" />
            <p className="text-secondary text-[18px] max-w-4xl leading-[32px] pr-6 text-right ml-auto">
              My work focuses on delivering <span className="text-white font-semibold">fair, compliant, and high-performance</span> real-money gaming experiences, covering everything from game logic and player interactions to backend services that handle <span className="text-[#bf61ff]">wallets</span>, <span className="text-[#bf61ff]">bets</span>, <span className="text-[#bf61ff]">payouts</span>, and real-time game state with reliability and accuracy.
            </p>
          </motion.div>

          {/* Core Expertise Section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 1)}
            className="relative bg-gradient-to-br from-tertiary/50 to-black-100/50 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00cea8] animate-pulse" />
              Core Expertise
            </h3>
            <div className="space-y-4 text-secondary text-[17px] leading-[30px]">
              <p>
                My expertise spans the full lifecycle of <span className="text-white">casino game development</span> — from <span className="text-[#00cea8]">RNG-based game logic</span>, <span className="text-[#00cea8]">probability modeling</span>, and <span className="text-[#00cea8]">payout calculations</span>, to secure backend systems that manage player sessions, transactions, and real-time events. I have hands-on experience building <span className="text-white font-semibold">provably fair</span> or <span className="text-white font-semibold">server-authoritative RNG systems</span>, ensuring game integrity, consistency, and resistance to tampering.
              </p>
              <p>
                On the backend, I design and implement <span className="text-white">secure APIs</span>, <span className="text-white">real-time networking</span>, and <span className="text-white">microservice architectures</span> that support live casino operations, including <span className="text-[#bf61ff]">wallet management</span>, <span className="text-[#bf61ff]">transaction tracking</span>, <span className="text-[#bf61ff]">fraud prevention</span>, and audit-ready data flows. I work with SQL and NoSQL databases, apply encryption, authentication, and authorization best practices, and follow DevOps and cloud deployment strategies to ensure scalability, uptime, and regulatory readiness.
              </p>
              <p>
                I have developed games using <span className="text-white">Unity</span>, <span className="text-white">Unreal Engine</span>, and custom engines, collaborating closely with designers and artists to align engaging gameplay with strict technical and security requirements. With a strong foundation in algorithms, data structures, performance optimization, and concurrency, I build casino games and backend services that are <span className="text-[#00cea8] font-semibold">fair</span>, <span className="text-[#00cea8] font-semibold">secure</span>, <span className="text-[#00cea8] font-semibold">scalable</span>, and <span className="text-[#00cea8] font-semibold">production-ready</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="mt-24">
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="mb-12"
          >
            <h3 className="text-white text-3xl font-bold text-center mb-2">
              What I Do
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00cea8] to-[#bf61ff] mx-auto rounded-full" />
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} index={i} {...service} />
            ))}
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};
