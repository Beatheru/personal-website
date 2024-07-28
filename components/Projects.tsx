"use client";

import Section from "@/components/Section";
import Image from "next/image";
import personalWebsiteImage from "../images/personal-website.png";
import placeholderImage from "../images/placeholder.png";
import zambixImage from "../images/zambix.png";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Zambix",
    image: zambixImage,
    description:
      "What started off as an inside joke between me and an IT friend became a full application itself. Zambix is a tradition Kanban-styled ticketing app similar to Jira or Trello. The whole application rests on the dashboard where you are greeted with a Kanban-styled board with multiple columns to group tickets by status. You can create or edit tickets through a modal and you can also move tickets between columns. Authentication is handled by NextAuth to provide route protection and JWT sessions but I stil handle account creation and storage using MongoDB.",
    link: "https://zambix.vercel.app/",
    github: "https://github.com/Beatheru/zambix/"
  },
  {
    name: "Discord Music Bot (In Progress)",
    image: placeholderImage,
    description:
      "This is another project that I started for myself and friends. Many of the most popular music bots on Discord were being shutdown due to Discord policy changes so I thought it would be a fun project to create a litle bot to use personally. I've rewritten the bot multiple times based on different streaming libraries and I'm still in the process of rewriting it. It's mostly functional with what you would typically expect from a Discord music bot. I am planning on building a web ui dashboard for it as well to control the bot outside of discord.",
    link: "",
    github: "https://github.com/Beatheru/discord-music-bot"
  },
  {
    name: "Personal Website",
    image: personalWebsiteImage,
    description: "I made this site :)",
    link: "",
    github: "https://github.com/Beatheru/personal-website"
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              boxShadow: "0 0 0 2px rgb(250, 204, 21, 0)"
            }}
            animate={{
              boxShadow: "0 0 0 2px rgb(250, 204, 21, 1)"
            }}
            transition={{
              duration: 1,

              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="rounded-sm"
          >
            <div className="flex flex-col items-center justify-center gap-5 rounded-sm bg-gray-950 p-5 text-center">
              <div className="relative h-[350px] w-[80%]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill={true}
                  className="object-contain"
                />
              </div>
              <div className="text-2xl font-semibold text-yellow-400">
                {project.name}
              </div>
              <div className="w-full">{project.description}</div>
              <div className="flex justify-evenly gap-5 font-semibold underline">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
