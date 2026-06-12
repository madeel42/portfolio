import adminPiaic from "./Assets/Projects/adminPiaic.PNG";
import PIAIC from "./Assets/Projects/piaic.PNG";
import quiz from "./Assets/Projects/quiz.PNG";
import Fullin from "./Assets/Projects/fullin.PNG";
import Syscoin from "./Assets/Projects/syscoin.PNG";
import Chartapp from "./Assets/Projects/chartapp.PNG";
import Expense from "./Assets/Projects/expense.PNG";
import Arqui from "./Assets/Projects/arqui.PNG";
import Covid from "./Assets/Projects/Covid.PNG";
import StORE from "./Assets/Projects/store.PNG";

// Using placeholder strings for new projects without provided images
const placeholderImage = "https://via.placeholder.com/600x400?text=Project+Preview";

export const PROJECTS = [
  {
    image: Arqui,
    name: "arquibusco",
    technologyUsed: "ReactJs ,Nextjs , Redux, Nodejs, MongoDB",
    description: "Custom business platform with advanced frontend architecture, performance optimization, and responsive user experiences.",
    url: "https://www.arquibusco.com/",
  },
  {
    image: StORE,
    name: "ecom store",
    technologyUsed: " React, Redux-thunk, Nodejs, Mongodb",
    description: "Full-featured e-commerce store with product listings, cart management, and order tracking built with the MERN stack.",
    url: "https://abdulwahabtraders.com/",
  },
  {
    image: Fullin,
    name: "Fullinpartners",
    technologyUsed: "Nextjs,mui, Firebase",
    description: "Investment management platform with real-time portfolio tracking, financial dashboards, and Firebase-powered backend.",
    url: "https://full-in-partners-prod.web.app/",
  },
  {
    image: PIAIC,
    name: "Piaic Plateform",
    technologyUsed: "React, Redux-thunk, Nodejs, Mongodb",
    description: "",
    url: "http://piaic42.herokuapp.com/",
  },
  {
    image: adminPiaic,
    name: "PIAIC ADMIN",
    technologyUsed: "Nodejs, Express, MongoDB",
    description: "",
    url: "http://piaic42.herokuapp.com/payment/adminpanel/course",
  },
  {
    image: Syscoin,
    name: "Syscoin",
    technologyUsed: "Reactjs, material-ui",
    description: "",
    url: "https://syscoins.surge.sh/",
  },
  {
    image: Chartapp,
    name: "Token Chartapp",
    technologyUsed: "Reactjs, material-ui, ethersjs, solidity, hardhat",
    description: "",
    url: "https://chart12.netlify.app/",
  },
  {
    image: Covid,
    name: "Covid Tracker",
    technologyUsed: "ReactJs, mui",
    description: "",
    url: "http://covidtracker-madeel.surge.sh/",
  },
  {
    image: Expense,
    name: "Expense Tracker",
    technologyUsed: "ReactJs, ContextApi",
    description: "",
    url: "http://expensetracker-adeel.surge.sh/",
  },
  {
    image: quiz,
    name: "Quiz App",
    technologyUsed: "React, typescript, mui",
    description: "",
    url: "https://quizapp-madeel42.surge.sh/",
  },
  {
    image: placeholderImage,
    name: "DocuNavigator",
    technologyUsed: "React, Node.js, OpenAI, Pinecone, LangChain, TypeScript",
    description: "AI-powered document intelligence platform utilizing RAG architecture for document search, retrieval, and intelligent question-answering.",
    url: "https://docunavigator.vercel.app/",
  },
  {
    image: placeholderImage,
    name: "SquidGrow",
    technologyUsed: "React, TypeScript, Node.js",
    description: "Growth-focused platform helping businesses streamline outreach, engagement, and lead-generation workflows.",
    url: "https://www.squidgrow.wtf/",
  },
  {
    image: placeholderImage,
    name: "CyberMart",
    technologyUsed: "React, Node.js, MongoDB",
    description: "Scalable e-commerce marketplace featuring modern UI, secure transactions, and enterprise-level architecture.",
    url: "https://www.cybermart.com/",
  },
  {
    image: placeholderImage,
    name: "Polinate",
    technologyUsed: "React, Next.js, TypeScript",
    description: "Modern web platform focused on digital engagement, user interaction, and scalable product experiences.",
    url: "https://www.polinate.io/",
  },
];

export const SKILLS = [
  { name: "React.js", percentage: 95, category: "frontend" },
  { name: "Next.js", percentage: 90, category: "frontend" },
  { name: "TypeScript", percentage: 90, category: "frontend" },
  { name: "JavaScript", percentage: 95, category: "frontend" },
  { name: "Redux / Redux Toolkit", percentage: 92, category: "frontend" },
  { name: "HTML5 / CSS3", percentage: 95, category: "frontend" },
  { name: "Material UI / Tailwind", percentage: 90, category: "frontend" },

  { name: "Node.js", percentage: 85, category: "backend" },
  { name: "Express.js", percentage: 85, category: "backend" },
  { name: ".NET Core", percentage: 80, category: "backend" },
  { name: ".NET Entity Framework", percentage: 80, category: "backend" },
  { name: "MongoDB", percentage: 85, category: "backend" },
  { name: "PostgreSQL", percentage: 80, category: "backend" },
  { name: "SQL Server", percentage: 80, category: "backend" },
  { name: "GraphQL", percentage: 82, category: "backend" },
  { name: "Firebase", percentage: 85, category: "backend" },

  { name: "OpenAI / GPT Models", percentage: 90, category: "ai" },
  { name: "LangChain", percentage: 85, category: "ai" },
  { name: "RAG Systems", percentage: 85, category: "ai" },
  { name: "Pinecone / Vector DBs", percentage: 80, category: "ai" },
  { name: "AI Agents", percentage: 80, category: "ai" },
];

export const TOOLS = [
  { name: "VS Code", icon: "vscode" },
  { name: "Git & GitHub", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "Jira", icon: "jira" },
  { name: "Postman", icon: "postman" },
  { name: "Chrome DevTools", icon: "chrome" },
  { name: "npm / yarn", icon: "npm" },
  { name: "Firebase", icon: "firebase" },
  { name: "AWS", icon: "aws" },
  { name: "Figma", icon: "figma" },
  { name: "Jest", icon: "jest" },
  { name: "Vercel", icon: "vercel" },
];

export const EXPERIENCE = [
  {
    title: "Software Engineer",
    company: "Calrom",
    location: "Lahore, Pakistan",
    duration: "Apr 2023 - Present",
    description: "Building scalable web applications, SaaS platforms, and leading frontend architecture decisions with a focus on modern frameworks.",
  },
  {
    title: "Software Engineer",
    company: "CyberMart",
    location: "Lahore, Pakistan",
    duration: "Oct 2022 - Mar 2023",
    description: "Developed scalable e-commerce solutions, enterprise dashboards, and retail applications.",
  },
  {
    title: "Software Engineer",
    company: "SL2 Studio",
    location: "Lahore, Pakistan",
    duration: "May 2022 - Sep 2022",
    description: "Worked on full-stack web applications, custom business solutions, and API integrations.",
  },
  {
    title: "Software Developer",
    company: "GamicaCloud",
    location: "Faisalabad, Pakistan",
    duration: "Nov 2019 - Apr 2022",
    description: "Built scalable web applications using the React ecosystem, Node.js, and MongoDB.",
  },
];
