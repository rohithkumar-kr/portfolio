import { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Briefcase } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration",
    image:
      "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjMxMjc0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "web",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description:
      "Mobile app for tracking workouts, nutrition, and fitness goals",
    image:
      "https://images.unsplash.com/photo-1730818875087-182c15e1e7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzYzMTY1OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Firebase", "Redux"],
    category: "mobile",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with custom charts and reports",
    image:
      "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjMyMDEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    category: "web",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Portfolio Builder",
    description:
      "Drag-and-drop portfolio website builder with customizable templates",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjb2Rpbmd8ZW58MXx8fHwxNzYzMTI5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Tailwind", "Supabase"],
    category: "web",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Design System",
    description:
      "Comprehensive component library and design system for enterprise apps",
    image:
      "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxNDU2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Storybook", "TypeScript"],
    category: "other",
    codeUrl: "https://github.com",
  },
  {
    id: 6,
    title: "AI Chat Interface",
    description:
      "Intelligent chatbot interface with natural language processing",
    image:
      "https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzIwNzkxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "TensorFlow", "WebSocket"],
    category: "other",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
];

type FilterType = "all" | "web" | "mobile" | "other";

export function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Other", value: "other" },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-16 md:py-24 px-4 md:px-8 bg-accent/30"
      aria-label="Featured projects section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 flex items-center gap-3">
            <Briefcase style={{ color: "var(--coral)" }} aria-hidden="true" />
            Featured Projects
          </h2>
          <p className="text-muted-foreground mb-8">
            A selection of my recent work across web, mobile, and design projects
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="tablist"
          aria-label="Project filters"
        >
          {filters.map((f) => (
            <Button
              key={f.value}
              variant={filter === f.value ? "default" : "outline"}
              onClick={() => setFilter(f.value)}
              className="min-h-[44px] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={
                filter === f.value
                  ? { backgroundColor: "var(--coral)" }
                  : undefined
              }
              role="tab"
              aria-selected={filter === f.value}
              aria-label={`Filter projects by ${f.label}`}
            >
              {f.label}
            </Button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
          {filteredProjects.map((project) => (
            <div key={project.id} role="listitem">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground" role="status">
            No projects found in this category
          </div>
        )}
      </div>
    </section>
  );
}