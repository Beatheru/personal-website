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
          Hey, my name is Andrew and I love programming. I am a fullstack
          engineer with a strong focus on frontend web applications currently
          but I still have backend experience. I also have slight experiences in
          DevOps through Docker and cloud/personal servers as I deploy and host
          some of my fullstack applications.
        </div>
        <div>
          What I may lack in skills or experience, I make up for it with my
          adaptability and eagerness to learn. I am passionate about learning
          and always try to be the best developer I can by following best
          practices. I try keep up with new technologies and frameworks because
          I find them cool but also to diversity my knowledge so I can have more
          well-rounded opinions and pick the best tool for the job.
        </div>
        <div>
          If someone told me that all jobs got paid equally and that I could
          work anything I want for the same amount of money, I would still pick
          software engineering :)
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
