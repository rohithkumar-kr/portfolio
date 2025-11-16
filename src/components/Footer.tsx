import { Heart } from "lucide-react";
import { Button } from "./ui/button";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-accent/20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>© 2025 Rohith Kumar. Made with</span>
            <Heart className="w-4 h-4 fill-[var(--coral)] text-[var(--coral)]" aria-label="love" />
          </div>

          {/* Footer navigation */}
          <nav className="flex flex-wrap justify-center gap-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground min-h-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Back to top indicator */}
        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("#home")}
            className="text-xs text-muted-foreground hover:text-[var(--coral)] transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Back to top"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
}