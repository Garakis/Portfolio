import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiAzuredevops } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export const myInfo = {
  name: "Emmanuel Garakis",
  alias: "Emmanuel",
  title: "Backend Software Engineer",
  image: "/personal.jpeg",
  skills: [
    {
      name: ".Net",
      children: <AiOutlineDotNet className="size-10" />,
      className: "bg-violet-500",
    },
    {
      name: "React",
      children: <FaReact className="size-10" />,
      className: "bg-sky-500",
    },
    {
      name: "Docker",
      children: <FaDocker className="size-10" />,
      className: "bg-blue-700",
    },
    {
      name: "NodeJS",
      children: <FaNodeJs className="size-10" />,
      className: "bg-green-500",
    },
    {
      name: "Azure",
      children: <SiAzuredevops className="size-10" />,
      className: "bg-blue-500",
    },
    {
      name: "Sql",
      children: <TbSql className="size-10" />,
      className: "bg-yellow-500 text-zinc-900",
    },
  ],
  about_me: {
    image: "/personal.jpeg",
    about:
      "Born and raised in São José dos Campos, Brazil, I'm a tech enthusiast with a deep love for software and continuous learning.",
    whatMakesMeTick:
      "I believe in my abilities to create impactful software solutions that can make a difference in people's lives. My journey in tech started when I built my first game at 12 and became fascinated with how software could bring any idea to life.",
    music:
      "Avid musician and Multi Instrumentist.",
    book: 'From sci-fi to philosophy, my bookshelf is as diverse as my code libraries. One of my favorite books is "Pet Sematary" by Stephen King.',
    game: {
      text: "Enjoy immersing myself in virtual worlds and sometimes some friendly competition. Current favorite:",
      favorite: "Minecraft",
    },
    travel:
      "Exploring new cultures and places whenever I can. Next destination: Israel, once the war is over.",
    countriesLivedIn: 1,
    languagesSpoken: 4,
    linesOfCodeWritten: "+1 (maybe +2)",
    fact: "Living in Brazil, a country celebrated for its vast natural beauty and the Amazon Rainforest, I had the unforgettable chance to swim in the crystal-clear rivers of Bonito 🐟, spot jaguars in the Pantanal 🐆, and surf the legendary waves of Fernando de Noronha 🏄‍♂️. It remains one of my most cherished adventures..",
  },
  contact: {
    email: "emmanogarakis@gmail.com",
    phone: "+55 12 991686751",
    whatsapp: "https://wa.me/5512991686751",
    linkedin: "https://www.linkedin.com/in/emmanuel-basile-garakis-filho-024572266/",
    github: "https://www.github.com/Garakis",
    location: "São José dos Campos, Brazil",
  },
  experience: {
    work: [
      {
        title: "Lorem ipsum dolor sit amet",
        company: "Lorem ipsum dolor sit amet",
        location: "Lorem ipsum dolor sit amet",
        dateRange: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet. Ea iusto dicta eos sunt officia rem dolores excepturi et voluptatem porro est cumque tempora.",
        skills: ["C#", ".NET", "SQL", "Docker", "Azure Devops"],
      },
      {
        title: "Lorem ipsum dolor sit amet",
        company: "Lorem ipsum dolor sit amet",
        location: "Lorem ipsum dolor sit amet",
        dateRange: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet. Ea iusto dicta eos sunt officia rem dolores excepturi et voluptatem porro est cumque tempora.",
        skills: ["C#", ".NET", "SQL", "Docker", "Azure Devops"],
      },
    ],
    freelance: [
      {
        project: "Lorem ipsum",
        client: null,
        description:
          "Lorem ipsum dolor sit amet",
        duration: "Lorem ipsum",
        skills: ["Python", "MongoDB"],
      },
      {
              project: "Lorem ipsum",
        client: null,
        description:
          "Lorem ipsum dolor sit amet",
        duration: "Lorem ipsum",
        skills: ["Python", "MongoDB"],
      },
    ],
  },
  studies: [
    {
      degree: "Analysis and Development of Systems",
      institution: "FATEC",
      location: "São José dos Campos, Brazil",
      dateRange: "2025 - 2027",
      description:
        "Focused on software development, algorithms, data structures, and software engineering.",
      achievements: [
        "Participated in a hackathon",
      ],
      courses: [
        // "Data Structures",
        // "Algorithms",
        // "Object-Oriented Programming",
        // "Database Systems",
        // "Software Development",
        // "Software Engineering Principles",
        // "Artificial Intelligence",
        // "Software Testing",
        // "Sistems Integration",
        // "QA",
      ],
    },
  ],
  projects: [
    {
      title: "Developer Portfolio",
      description: "My personal developer portfolio",
      technologies: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      liveLink: "https://emmanuel-garakis-portfolio.vercel.app",
      githubLink: "https://github.com/CodeINN95612/emmanuel-garakis-portfolio",
      image: "/projects/portfolio.png",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      date: "2024",
      description:
        "Demonstrates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
      credentialId: "E795636135DDD8FD",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/Emmanuel-garakis-9572/E795636135DDD8FD?sharingId=5BCEED54F209B1C6",
    },
    {
      title: "ScrumStudy Scrum Fundamentals Certified",
      date: "2024",
      description:
        "Certification demonstrating knowledge of Scrum fundamentals.",
    },
  ],
};
