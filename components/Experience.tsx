import Section from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const jobs = [
  {
    company: "Netsmart",
    title: "Software Engineer",
    date: "June 2023 - Present",
    description:
      "Working as a software engineer for Netsmart to create electronic health record software.",
    actions: [
      "Develop and maintian multiple frontend applications that are a part of the electronic health record software suite.",
      "Produce quality and well documented code in Angular and Typescript.",
      "Push for code quality and developer experience improvements by bringing awareness to upper management and team members.",
      "Address over 40% of technical debt by upgrading frameworks and refactoring old code.",
      "Collaborate with other team members and QA to fix defects and push quality code."
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="w-full">
        {jobs.map((job, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="w-full"
            defaultValue={jobs[0].company}
          >
            <AccordionItem value={job.company}>
              <AccordionTrigger>
                <h1 className="flex w-full justify-between text-yellow-400 lg:px-5">
                  <div>
                    {job.title} @ {job.company}
                  </div>
                  <div>{job.date}</div>
                </h1>
              </AccordionTrigger>
              <AccordionContent className="px-5">
                <div className="mb-3">{job.description}</div>
                <ul className="list-disc pl-5">
                  {job.actions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
