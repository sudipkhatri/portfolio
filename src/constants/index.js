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
  tafe,
  allripe,
  hype,
  mernBlogApp,
  tictac,
  weatherapi,
  niyunetworks,
  github,
  nuovagen,
  webs,
  realestate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Application Support Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Support Engineer",
    company_name: "Tafe NSW",
    icon: tafe,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2023",
    points: [
      "Provided frontend development support",
      "Resolving technical issues to enhance web application performance.",
      "Customer service and support.",
      "Testing and debugging problems related to a network and applications.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Hype Studio Design",
    icon: hype,
    iconBg: "#383E56",
    date: "Jan 2021 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js, Bootstrap and php.",
      "Testing, debugging and analysing the root cause of problems.",
      "Brainstorming, coming up with new ideas to bring ideas into vision.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Allripe",
    icon: allripe,
    iconBg: "#383E56",
    date: "Jan 2019 - Dec 2020",
    points: [
      "Developing and maintaining web applications using React.js, Tailwind, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "REST APIs practices, Node Js & Express Js for backend development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sudip is a talented and knowledgeable web developer who consistently delivers high-quality work. He is responsive, reliable and a pleasure to work with. I highly recommend Sudip to anyone in need of web development services.",
    name: "Bill",
    designation: "Manager",
    company: "Hype Studio Design",
  },
  {
    testimonial:
      "Sudip provided great expertise, guidance, support, and solution to our web. His professionalism and expertise were invaluable, and I highly recommend Sudip to anyone in need of web application developer.",
    name: "Sai",
    designation: "Founder",
    company: "Niyunetworks",
  },
  {
    testimonial:
      "Sudip is a true professional, providing guidance, & solution when we needed it most. He is knowledgeable, efficient and a pleasure to work with. I highly recommend Sudip to anyone looking for reliable web services. Thanks Sudip.",
    name: "Anil",
    designation: "Founder",
    company: "Nuovagen",
  },
];

const projects = [
  {
    name: "NiyuNetworks",
    description:
      "As a freelance developer, I've build a website for NiyuNetworks which is an IT & Staffing company from USA.",
    tags: [
      {
        name: "React",
        color: "text-teal-500",
      },
      {
        name: "APIs",
        color: "text-indigo-600",
      },
      {
        name: "Tailwind",
        color: "text-pink-500",
      },
      {
        name: "CI/CD",
        color: "text-sky-500",
      },
    ],
    image:
      "https://res.cloudinary.com/ddtzqpngv/image/upload/v1704159662/portfolio/kr2klrfwvju9ifsrf7xu.png",
    source_code_link: "https://niyunetworks.com",
  },
  {
    name: "DigitalTechFlux",
    description:
      "A complete fullstack app for web development and digital marketing agency. Still in development phase.",
    tags: [
      {
        name: "react",
        color: "text-teal-500",
      },
      {
        name: "Node",
        color: "text-indigo-600",
      },
      {
        name: "MongoDB",
        color: "text-pink-500",
      },
      {
        name: "CI/CD",
        color: "text-sky-500",
      },
    ],
    image:
      "https://res.cloudinary.com/ddtzqpngv/image/upload/v1704161513/portfolio/fazvgratww9sgnouga4e.png",
    source_code_link: "https://dev.digitaltechflux.com",
  },
  {
    name: "Yetitech",
    description:
      "As a freelance developer, I've created this website using next, Node, mongoDB, and Tailwind. Still on development phase.",
    tags: [
      {
        name: "Next",
        color: "text-teal-500",
      },
      {
        name: "MongoDB",
        color: "text-indigo-600",
      },
      {
        name: "Node",
        color: "text-pink-500",
      },
      {
        name: "CI/CD",
        color: "text-sky-500",
      },
    ],
    image:
      "https://res.cloudinary.com/ddtzqpngv/image/upload/v1704159673/portfolio/i5knjvucgq35oc3exdf7.png",
    source_code_link: "https://dev.yetitech.com.au",
  },
  {
    name: "NuovaGen",
    description:
      "A simple, clean, & landing page built with React JS for a client who runs multiple services for their business.",
    tags: [
      {
        name: "React",
        color: "text-teal-500",
      },
      {
        name: "APIs",
        color: "text-indigo-600",
      },
      {
        name: "Tailwind",
        color: "text-pink-500",
      },
      {
        name: "CI/CD",
        color: "text-sky-500",
      },
    ],
    image:
      "https://res.cloudinary.com/ddtzqpngv/image/upload/v1704159673/portfolio/umtoijsd9geqx9srcxeu.png",
    source_code_link: "https://nuovagen.com.au",
  },
  {
    name: "Real Estate App",
    description:
      "A complete full stack real estate app where user can browse property and agent can upload property via logging in to the system.",
    tags: [
      {
        name: "React/Node",
        color: "text-teal-500",
      },
      {
        name: "RestAPIs",
        color: "text-indigo-600",
      },
      {
        name: "Tailwind",
        color: "text-pink-500",
      },
      {
        name: "CI/CD",
        color: "text-sky-500",
      },
    ],
    image:
      "https://res.cloudinary.com/ddtzqpngv/image/upload/v1704159670/portfolio/vwm2xexmyckv1dshnxoa.png",
    source_code_link: "https://app.khatrisudip.com",
  },

  {
    name: "Hotel Booking App",
    description:
      "A complete full stack hotel booking application made with TypeScript, React, Node JS, Express JS, Payment integration with stripe and much more.",
    tags: [
      {
        name: "react",
        color: "text-teal-500",
      },
      {
        name: "mongodb",
        color: "text-indigo-600",
      },
      {
        name: "TypeScript",
        color: "text-pink-500",
      },
      {
        name: "CI/CD",
        color: "text-sky-500",
      },
    ],
    image:
      "https://res.cloudinary.com/ddtzqpngv/image/upload/v1704766766/Hotelapp_de4imd.png",
    source_code_link: "https://hotel-app-4agc.onrender.com",
  },
];


export { services, technologies, experiences, testimonials, projects };
