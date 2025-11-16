import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8"
      aria-label="Hero section"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[var(--coral)] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--sky)] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Animated avatar/accent */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          role="status"
          aria-label="Currently open to opportunities"
        >
          <Sparkles className="w-4 h-4" style={{ color: "var(--amber)" }} aria-hidden="true" />
          <span className="text-sm">Open to opportunities</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I'm <span style={{ color: "var(--coral)" }}>Rohith Kumar</span>
          <br />
          Full-Stack Developer & Designer
        </motion.h1>

        {/* Elevator pitch */}
        <motion.p
          className="mb-8 text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I craft delightful digital experiences that blend beautiful design with
          robust engineering — from concept to deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group relative overflow-hidden min-w-[160px] min-h-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            style={{ backgroundColor: "var(--coral)" }}
            aria-label="View my projects"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-[var(--sky)]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="group min-w-[160px] min-h-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Contact me"
          >
            Contact Me
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--coral)" }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}