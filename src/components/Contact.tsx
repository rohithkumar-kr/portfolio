import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Download, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

const socials = [
  { icon: Github, label: "GitHub", url: "https://github.com/rohithkumar-kr" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rohithkumar-k-r/",
  },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
  { icon: Mail, label: "Email", url: "mailto:krrohithkumar@gmail.com" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-16 md:py-24 px-4 md:px-8"
      aria-label="Contact section"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground">
            Have a project in mind or just want to chat? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* ARIA live region for form errors */}
              <div
                className="sr-only"
                role="alert"
                aria-live="polite"
                aria-atomic="true"
              >
                {Object.values(errors).length > 0 && (
                  <span>
                    Form has {Object.values(errors).length} error(s). Please
                    correct them.
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="min-h-[44px]"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-destructive text-sm"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="min-h-[44px]"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-destructive text-sm"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[120px] resize-none"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-destructive text-sm"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full min-h-[44px] group focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ backgroundColor: "var(--coral)" }}
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="mb-4">Connect With Me</h3>
              <nav
                className="grid grid-cols-2 gap-4"
                aria-label="Social media links"
              >
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-[var(--sky)] hover:bg-accent/50 transition-all duration-300 group min-h-[56px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Visit my ${social.label} profile`}
                  >
                    <social.icon
                      className="w-5 h-5 group-hover:text-[var(--sky)] transition-colors"
                      aria-hidden="true"
                    />
                    <span className="text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-[var(--coral)]/10 to-[var(--sky)]/10 border border-border">
              <h3 className="mb-2">Download My Resume</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get a detailed overview of my experience and skills
              </p>

              <Button
                variant="outline"
                className="w-full min-h-[44px] group focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={() => {
                  toast.success("Resume download started!");

                  const link = document.createElement("a");
                  link.href = "/Rohith_Resume.pdf"; // <-- local file
                  link.download = "Rohith_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download
                  className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform"
                  aria-hidden="true"
                />
                Download Resume (PDF)
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Available for:</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--coral)" }}
                    aria-hidden="true"
                  />
                  Full-time opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--sky)" }}
                    aria-hidden="true"
                  />
                  Freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--amber)" }}
                    aria-hidden="true"
                  />
                  Consulting & mentorship
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
