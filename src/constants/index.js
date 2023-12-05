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
    title: "Service desk and field support",
    company_name: "Tafe NSW",
    icon: tafe,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2023",
    points: [
      "Imaging PCs and laptops.",
      "Level 1 and level 2 support",
      "Customer service and support",
      "Testing and debugging problems related to a computer network and hardware",
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
    image: niyunetworks,
    source_code_link: "https://niyunetworks.com",
    icon: webs,
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
    image: nuovagen,
    source_code_link: "https://nuovagen.com.au",
    icon: webs,
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
    image: realestate,
    source_code_link: "https://github.com/sudipkhatri/mernProject",
    icon: github,
  },
  {
    name: "Tictac Game",
    description:
      "A simple tictac game build using react, bootstrap and implementing logic to declare winner.",
    tags: [
      {
        name: "react",
        color: "text-teal-500",
      },
      {
        name: "Javascript",
        color: "text-indigo-600",
      },
      {
        name: "Bootstrap",
        color: "text-pink-500",
      },
    ],
    image: tictac,
    source_code_link: "https://sudipkhatri.github.io/tictac/",
    icon: webs,
  },
  {
    name: "Weather API",
    description:
      "A simple, clean, & Weather prediction using api integration from third party API (weathermapsAPI), react and custom css.",
    tags: [
      {
        name: "React JS",
        color: "text-teal-500",
      },
      {
        name: "API integration",
        color: "text-indigo-600",
      },
      {
        name: "css",
        color: "text-pink-500",
      },
    ],
    image: weatherapi,
    source_code_link: "https://sudipkhatri.github.io/weatherApp_v1/",
    icon: webs,
  },
  {
    name: "Blog App",
    description:
      "A complete full stack web application that is based on CRUD principle where users can create, read, update and delete their posts.",
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
        name: "Material UI",
        color: "text-pink-500",
      },
    ],
    image: mernBlogApp,
    source_code_link: "https://github.com/sudipkhatri/MernBlogAppv1.0.0",
    icon: github,
  },
];

export { services, technologies, experiences, testimonials, projects };
