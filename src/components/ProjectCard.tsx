import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="overflow-hidden cursor-pointer group relative focus-within:ring-2 focus-within:ring-ring"
        onClick={() => setIsRevealed(!isRevealed)}
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        tabIndex={0}
        role="article"
        aria-label={`Project: ${title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsRevealed(!isRevealed);
          }
        }}
      >
        {/* Image container */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <ImageWithFallback
            src={image}
            alt={`Screenshot of ${title} project`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
            loading="lazy"
          />
          {/* Overlay on hover/tap */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/80 to-transparent flex flex-col justify-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isRevealed ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden={!isRevealed}
          >
            <div className="text-white space-y-3">
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Technologies used"
              >
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/20 text-white border-0 backdrop-blur-sm"
                    role="listitem"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {liveUrl && (
                  <Button
                    size="sm"
                    className="min-h-[44px] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    style={{ backgroundColor: "var(--sky)" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(liveUrl, "_blank");
                    }}
                    aria-label={`View live demo of ${title}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                    Live Demo
                  </Button>
                )}
                {codeUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white bg-white/10 hover:bg-white/20 min-h-[44px] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(codeUrl, "_blank");
                    }}
                    aria-label={`View source code of ${title}`}
                  >
                    <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                    Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
