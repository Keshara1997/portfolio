// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  DB,
  Evoke,
  Freelancer,
  java,
  python,
  sql,
  kafka,
  neo4j,
  aws,
  kubernetes,
  scala,
  csharp,
  resume,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "resume",
    title: "Resume",
    link: null,
    download: true,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/Keshara1997",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Game Development",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Scala",
    icon: scala,
  },
  {
    name: "C#",
    icon: csharp,
  },

  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "Neo4j",
    icon: neo4j,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },

] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Engineer",
    company_name: "DB International",
    icon: DB, // replace with your icon import
    iconBg: "#1F2937",
    date: "May 2025 - Present",
    points: [
      "Working as a Full Stack Backend Engineer with strong focus on backend systems and DevOps practices.",
      "Developing scalable backend services using Node.js, JavaScript, and C#.",
      "Designing and managing CI/CD pipelines, containerized applications, and cloud deployments.",
      "Handling server management, performance optimization, and secure deployments for production systems."
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "EvokeLabs (PVT) LTD",
    icon: Evoke,
    iconBg: "#0F172A",
    date: "Oct 2023 - May 2025",
    points: [
      "Developed and maintained scalable web applications using React.js, Next.js, Express.js, and Node.js.",
      "Built backend services using Kafka, MongoDB, Redis, and Neo4j for high-performance systems.",
      "Worked with Java and Spring Boot services in a microservices-based architecture.",
      "Collaborated in Agile teams, actively participating in sprint planning, reviews, and retrospectives.",
      "Contributed to AWS deployments and cloud-based infrastructure."
    ],
  },
  {
    title: "Trainee Software Engineer (Intern)",
    company_name: "EvokeLabs (PVT) LTD",
    icon: Evoke,
    iconBg: "#0F172A",
    date: "Oct 2023 - Apr 2024",
    points: [
      "Gained hands-on experience in full-stack development using modern JavaScript frameworks.",
      "Assisted in developing backend APIs and integrating frontend components.",
      "Worked closely with senior engineers to improve code quality and system reliability.",
      "Learned industry best practices including Git workflows, Agile development, and cloud deployment."
    ],
  },
  {
    title: "Junior Developer",
    company_name: "S.A. Knowledge Services (PVT) LTD",
    icon: Evoke,
    iconBg: "#374151",
    date: "Jun 2021 - Sep 2021",
    points: [
      "Worked on a pawning module using TypeScript and JavaScript.",
      "Developed a CLI tool to export GitHub issues into Excel format.",
      "Improved understanding of modular coding, scripting, and data handling.",
      "Collaborated with team members to deliver functional internal tools."
    ],
  },
  {
    title: "Software Developer (Freelance)",
    company_name: "Freelance",
    icon: Freelancer,
    iconBg: "#064E3B",
    date: "Jan 2022 - Present",
    points: [
      "Developed custom software solutions for clients across multiple domains.",
      "Worked with JavaScript, Java, MERN stack, SQL, and MongoDB.",
      "Designed REST APIs and full-stack applications tailored to client requirements.",
      "Delivered maintainable, scalable, and performance-oriented solutions."
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Kavinda consistently delivered high-quality backend solutions and showed strong ownership of complex features. His ability to work with distributed systems and cloud deployments made a real impact on our platform.",
    name: "Lahiru Chathuranga",
    designation: "Software Engineer",
    company: "Zeebra Technologies",
    image: github,
  },
  {
    testimonial:
      "Kavinda is a highly motivated engineer with solid full-stack knowledge. He quickly adapted to our tech stack and contributed effectively to both frontend and backend development within an Agile environment.",
    name: "Chathurika Madushani",
    designation: "Senior QA Engineer",
    company: "EvokeLabs (PVT) LTD",
    image: github,
  },
  {
    testimonial:
      "Working with Kavinda on freelance projects was a great experience. He clearly understood requirements, delivered on time, and built scalable solutions that exceeded expectations.",
    name: "Client Feedback",
    designation: "Product Owner",
    company: "Freelance Project",
    image: github,
  },
  {
    testimonial:
      "Kavinda’s open-source contributions demonstrate his strong engineering mindset. His CleanSend project shows deep understanding of backend architecture, security, and modern TypeScript practices.",
    name: "Open Source Contributor",
    designation: "Maintainer",
    company: "GitHub Community",
    image: github,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Fused – Microfinance Platform",
    description:
      "A scalable microfinance platform built for Future Life Investments (FLI) with full web and mobile support. The system handles real-time financial data processing, microservices communication, and secure cloud deployment.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "cyan-text-gradient" },
      { name: "nextjs", color: "white-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "kafka", color: "pink-text-gradient" },
      { name: "neo4j", color: "blue-text-gradient" },
      { name: "aws", color: "orange-text-gradient" },
    ],
    image: project2,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "CleanSend – OpenMsg Protocol Server",
    description:
      "A TypeScript implementation of the OpenMsg Protocol, a secure and decentralized messaging server supporting cross-domain communication with end-to-end encryption and spam-free messaging.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "cryptography", color: "pink-text-gradient" },
      { name: "decentralized", color: "purple-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Keshara1997/CleanSend",
    live_site_link: "",
  },
  {
    name: "Smart Farmer – Leaf Disease Detection",
    description:
      "An AI-powered agriculture system for detecting leafhopper damage on brinjal leaves using Mask R-CNN. The solution calculates damage severity percentages and improves farming decision-making through automation.",
    tags: [
      { name: "machine-learning", color: "blue-text-gradient" },
      { name: "tensorflow", color: "orange-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "react-native", color: "pink-text-gradient" },
      { name: "firebase", color: "yellow-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/Keshara1997/leaf-disease-area-calcification",
    live_site_link: "",
  },
  {
    name: "Analog Clock – Open Source",
    description:
      "A customizable React-based analog clock component with multiple configuration options. Contributed to improving reusability, customization, and overall UI behavior.",
    tags: [
      { name: "react", color: "cyan-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "open-source", color: "green-text-gradient" },
    ],
    image: project4,
    source_code_link: "https://github.com/Keshara1997/Analog-Clock",
    live_site_link: "",
  },
  {
    name: "GitHub Issues Export CLI",
    description:
      "A command-line tool that exports GitHub issues into Excel format, simplifying project reporting and issue tracking for development teams.",
    tags: [
      { name: "nodejs", color: "green-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "cli-tool", color: "pink-text-gradient" },
    ],
    image: project6,
    source_code_link: "",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/keshara1997",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/keshar1997",
  },
] as const;
