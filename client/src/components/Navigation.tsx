import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Code, User, Briefcase, Cpu, Send, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <ScrollLink 
            to="hero" 
            smooth={true} 
            className="cursor-pointer font-mono font-bold text-xl md:text-2xl tracking-tighter hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">HC</span>
            <span className="text-primary">/&gt;</span>
          </ScrollLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="text-primary font-bold after:w-full"
                className="relative cursor-pointer text-sm font-mono text-muted-foreground hover:text-foreground transition-colors py-1 group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs">0{navItems.indexOf(item) + 1}.</span>
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </ScrollLink>
            ))}
            <Button 
              variant="outline" 
              className="ml-4 font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item, i) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-2 text-2xl font-bold font-mono text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                  {item.name}
                </motion.div>
              </ScrollLink>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="mt-8 font-mono border-primary text-primary hover:bg-primary/10 w-40"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Resume
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
