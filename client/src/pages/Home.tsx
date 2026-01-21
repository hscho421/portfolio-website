import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, FileText, ChevronDown, ArrowRight, ExternalLink, Send } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProfile, useExperiences, useProjects, useSkills } from "@/hooks/use-portfolio";

export default function Home() {
  const { data: profile } = useProfile();
  const { data: experiences } = useExperiences();
  const { data: projects } = useProjects();
  const { data: skills } = useSkills();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profile?.email || "hc55@illinois.edu"}?subject=${subject}&body=${body}`;
  };

  // Safe defaults if data is loading
  const safeProfile = profile || {
    name: "Hyunseok Cho",
    headline: "Full Stack Developer",
    bio: "I build accessible, pixel-perfect, performant web experiences.",
    location: "San Francisco, CA",
    email: "hello@example.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    resumeUrl: "/resume.pdf"
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navigation />

      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-primary mb-5 ml-1"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground mb-4"
          >
            {safeProfile.name}.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-muted-foreground mb-8"
          >
            I build things for the web.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-muted-foreground text-lg mb-12 leading-relaxed"
          >
            <p className="mb-4">{safeProfile.bio}</p>
            <div className="font-mono text-sm text-primary/80">
              <span className="text-foreground">Current Stack: </span>
              <TypeAnimation
                sequence={[
                  'React & TypeScript',
                  2000,
                  'Node.js & Express',
                  2000,
                  'PostgreSQL & Drizzle',
                  2000,
                  'Tailwind CSS',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="font-mono text-primary-foreground bg-primary hover:bg-primary/90 h-12 px-8"
              asChild
            >
              <a href="mailto:hello@example.com">Check out my resume!</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-mono border-primary/50 text-primary hover:bg-primary/10 h-12 px-8"
              asChild
            >
              <ScrollLink to="projects" smooth={true} offset={-100} className="cursor-pointer">
                View Work
              </ScrollLink>
            </Button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce"
          >
            <span className="font-mono text-xs text-muted-foreground">Scroll</span>
            <ChevronDown className="text-primary w-4 h-4" />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 md:py-32 max-w-4xl mx-auto">
          <SectionHeader title="About Me" number="01" />
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 text-muted-foreground leading-relaxed space-y-4"
            >
              <p>
                Hello! My name is {safeProfile.name} and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about how the web works!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              
              <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-primary">▹</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-1 relative group"
            >
              <div className="relative z-10 w-full aspect-square rounded bg-muted/20 overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                 {/* Placeholder for Profile Image */}
                 <div className="w-full h-full bg-gradient-to-br from-card to-muted flex items-center justify-center text-6xl font-display font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                    HC
                 </div>
                 {/* Mix-blend overlay for cool effect */}
                 <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 md:py-32 max-w-4xl mx-auto">
          <SectionHeader title="Where I've Worked" number="02" />
          
          <div className="relative mt-12 space-y-12 md:space-y-0">
            {experiences?.map((exp, index) => (
              <ExperienceItem 
                key={exp.id} 
                {...exp} 
                index={index} 
              />
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 md:py-32">
          <SectionHeader title="Some Things I've Built" number="03" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button variant="outline" className="font-mono gap-2 border-primary/50 hover:bg-primary/10 text-primary">
                View Full Project Archive <ExternalLink className="w-4 h-4" />
             </Button>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 md:py-32 max-w-4xl mx-auto">
          <SectionHeader title="Technical Skills" number="04" align="center" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills?.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/30 backdrop-blur border border-white/5 rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-bold font-display text-primary mb-4 flex items-center gap-2">
                  <span className="text-sm font-mono text-muted-foreground">0{idx + 1}.</span> {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 rounded bg-secondary/10 text-secondary-foreground text-sm font-mono border border-secondary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 md:py-32 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary mb-4">05. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <form onSubmit={handleSubmit} className="text-left bg-card/50 backdrop-blur border border-white/5 p-8 rounded-xl shadow-2xl mb-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground">Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-background/50 border-white/10 focus:border-primary font-mono"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background/50 border-white/10 focus:border-primary font-mono"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Hello! I'd like to discuss a project..." 
                  className="bg-background/50 border-white/10 focus:border-primary font-mono min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto font-mono bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>

            <div className="flex justify-center gap-8 mb-8">
              {safeProfile.githubUrl && (
                <a href={safeProfile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                  <Github size={24} />
                </a>
              )}
              {safeProfile.linkedinUrl && (
                <a href={safeProfile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                  <Linkedin size={24} />
                </a>
              )}
              <a href={`mailto:${safeProfile.email}`} className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                <Mail size={24} />
              </a>
            </div>
            
            <a 
              href="https://github.com/replit/stack" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Designed & Built by Hyunseok Cho
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
