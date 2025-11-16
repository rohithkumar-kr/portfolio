import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Code2, Palette } from "lucide-react";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Postman API",
  "Tailwind CSS",
  "BootStrap",
  "Python",
  "MySQL",
  "AWS",
  "Figma",
  "UI/UX Design",
];

const timeline = [
  {
    year: "July - September 2025",
    title: "IoT Cloud Enginer",
    company: "AICTE-EduSkills AWS Intern",
  },
  {
    year: "April - June 2025",
    title: "Full Stack Developer",
    company: "EduSkills AICTE Intern",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-16 md:py-24 px-4 md:px-8"
      aria-label="About me section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 flex items-center gap-3">
            <Code2 style={{ color: "var(--sky)" }} aria-hidden="true" />
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
               I’m a passionate full-stack developer who loves building clean, scalable, and user-friendly applications.
               I work across modern web and mobile stacks like Node.js, Express, Django, Spring Boot, React, Flutter, 
               and both SQL & NoSQL databases.
              </p>
              <p className="text-muted-foreground">
                I’ve completed two virtual internships with EduSkills, including an AWS Cloud internship, 
                where I gained real, hands-on experience with cloud services, deployments, and practical project workflows.
              </p>
              <p className="text-muted-foreground">
                I genuinely love coding — I’ve solved 300+ LeetCode problems and always push myself to learn smarter ways 
                to solve problems. When I’m not coding, I explore new design trends, contribute to open-source, 
                and help others understand complex concepts with ease.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5" style={{ color: "var(--coral)" }} aria-hidden="true" />
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Technical skills">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    role="listitem"
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: "var(--amber)" }} aria-hidden="true" />
              Experience Timeline
            </h3>
            <div className="space-y-6" role="list" aria-label="Work experience">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  role="listitem"
                >
                  <div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 border-background"
                    style={{ backgroundColor: "var(--coral)" }}
                    aria-hidden="true"
                  />
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.year}
                  </div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.company}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}