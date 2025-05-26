import {FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export const myInfo = {
  name: "Emmanuel Garakis",
  alias: "Emmanuel",
  title: "Backend Software Engineer",
  image: "/personal.jpeg",
  skills: [
    {
      name: "Python",
      children: <FaPython className="size-10" />,
      className:"bg-blue-600",
    },
    {
      name: "Html",
      children: <FaHtml5 className="size-10" />,
      className: "bg-orange-600",
    },
    {
      name: "Css",
      children: <FaCss3Alt className="size-10" />,
      className: "bg-blue-600",
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
      "I believe in my abilities to create impactful software solutions that can make a difference in people's lives. My journey in tech started when I entered my school's robotic team at 11 years of age and became fascinated with how software could bring any idea to life.",
    music:
      "Avid musician and Multi Instrumentist.",
    book: 'From religion to comic books, my bookshelf is as diverse as my code libraries. One of my favorite books is "Lord of The Rings" by JRR Tolkien.',
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
        title: "Intern",
        company: "Tera Science",
        location: "São José dos Campos, Brazil",
        dateRange: "aug 2024, present",
        description:
          "Lorem ipsum dolor sit amet. Ea iusto dicta eos sunt officia rem dolores excepturi et voluptatem porro est cumque tempora.",
        skills: ["Java", "SQL", "N8N", "Clickup", "PHP"],
      },
      {
        title: "Lorem ipsum dolor sit amet",
        company: "Lorem ipsum dolor sit amet",
        location: "Lorem ipsum dolor sit amet",
        dateRange: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet. Ea iusto dicta eos sunt officia rem dolores excepturi et voluptatem porro est cumque tempora.",
        skills: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
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
        "Software Engineering",
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
      ],
    },
  ],
  projects: [
    {
      title: "Developer Portfolio",
      description: "My personal developer portfolio",
      technologies: ["React", "Tailwind CSS", "Typescript", "Framer Motion"],
      liveLink: "portfolio-ashy-three-87.vercel.app",
      githubLink: "github.com/Garakis/portfolio",
      image: "../projects/portfolio.png",
    },
  ],
  certifications: [
    {
      title: "teste",
      date: "teste",
      description:
        "teste.",
      credentialId: "E795636135DDD8FD",
      url: "url",
    },
    {
      title: "teste",
      date: "2024",
      description:
        "Certification demonstrating knowledge of Scrum fundamentals.",
    },
  ],
};
