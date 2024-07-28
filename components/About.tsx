import { CiMail } from "react-icons/ci";
import {
  FaAngular,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAnsible,
  SiExpress,
  SiGnubash,
  SiKubernetes,
  SiMongodb,
  SiPowershell,
  SiTypescript
} from "react-icons/si";
import Section from "./Section";

const skills = [
  {
    group: "Web Development",
    skills: [
      {
        name: "React",
        icon: <FaReact />
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill />
      },
      {
        name: "Angular",
        icon: <FaAngular />
      },
      {
        name: "Tailwindcss",
        icon: <RiTailwindCssFill />
      },
      {
        name: "Typescript",
        icon: <SiTypescript />
      }
    ]
  },
  {
    group: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />
      },
      {
        name: "Express.js",
        icon: <SiExpress />
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />
      },
      {
        name: "Go",
        icon: <FaGolang />
      }
    ]
  },
  {
    group: "DevOps",
    skills: [
      {
        name: "Docker",
        icon: <FaDocker />
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes />
      },
      {
        name: "Linux",
        icon: <FaLinux />
      },
      {
        name: "Ansible",
        icon: <SiAnsible />
      }
    ]
  },
  {
    group: "Scripting",
    skills: [
      {
        name: "Python",
        icon: <FaPython />
      },
      {
        name: "Bash",
        icon: <SiGnubash />
      },
      {
        name: "Powershell",
        icon: <SiPowershell />
      }
    ]
  }
];

const socials = [
  {
    name: "Github",
    icon: <FaGithub size={45} />,
    link: "https://github.com/Beatheru"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={45} />,
    link: "https://www.linkedin.com/in/andrewchen1408/"
  },
  {
    name: "Mail",
    icon: <CiMail size={45} />,
    link: "mailto:beathandrewc@gmail.com"
  }
];

const About = () => {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-5">
        <div>
          Hey, my name is Andrew and I love programming. I am a Fullstack
          engineer with a strong focus on frontend web applications (at least
          for now). I also have slight experiences in DevOps as I manage my own
          homelab server and deploy and host some of my applications with
          Docker.
        </div>
        <div>
          I am a passionate and open-minded learner who is always trying to
          learn new skills and technologies. I believe that this helps me become
          more open-minded in order to write quality software as well as broaden
          my knowledge to be able to choose different tools for different
          situations. This is why I enjoy Fullstack and DevOps: it allows me to
          understand the full software lifecycle from the beginning to the end.
        </div>
      </div>

      <div className="text-2xl font-semibold">Skills</div>
      <div className="flex w-full flex-wrap justify-evenly gap-10">
        {skills.map(({ group, skills }) => (
          <div key={group}>
            <div className="text-lg text-yellow-400">{group}</div>
            <div>
              {skills.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-3">
                  <div>{icon}</div>
                  <div>{name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 flex w-full justify-evenly lg:w-1/2">
        {socials.map(({ name, icon, link }) => (
          <a key={name} href={link} target="_blank" rel="noopener noreferrer">
            <div className="hover:text-yellow-400">{icon}</div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default About;
