import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, User, Briefcase, Cpu, Send, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/components/SmoothScroll";

const navItems = [
  { name: "Home", to: "hero", icon: Code },
  { name: "About", to: "about", icon: User },
  { name: "Experience", to: "experience", icon: Briefcase },
  { name: "Projects", to: "projects", icon: FolderGit2 },
  { name: "Skills", to: "skills", icon: Cpu },
  { name: "Contact", to: "contact", icon: Send },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.to);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId, -80);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <button
            onClick={() => handleNavClick("hero")}
            className="cursor-pointer font-mono font-bold text-xl md:text-2xl tracking-tighter hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">HC</span>
            <span className="text-primary">/&gt;</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.to)}
                className={`px-4 py-2 text-sm font-mono transition-colors ${
                  activeSection === item.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-primary/60 text-xs">0{index + 1}.</span>
                  {item.name}
                </span>
              </button>
            ))}
            <Button
              variant="outline"
              className="ml-4 font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary"
              onClick={() => window.open(`${import.meta.env.BASE_URL}assets/resume.pdf`, "_blank")}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => handleNavClick(item.to)}
                  className={`flex items-center gap-4 text-2xl font-semibold font-display transition-colors ${
                    activeSection === item.to
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${activeSection === item.to ? "text-primary" : "text-muted-foreground"}`} />
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-6 font-mono border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open(`${import.meta.env.BASE_URL}assets/resume.pdf`, "_blank")}
                >
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
