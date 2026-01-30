import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Send, MapPin, Brain, Code, Server, Cpu } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { scrollToElement } from "@/components/SmoothScroll";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProfile, useExperiences, useProjects, useSkills } from "@/hooks/use-portfolio";

const domains = [
  { icon: Brain, label: "AI/ML", color: "text-purple-400" },
  { icon: Code, label: "Full-Stack", color: "text-cyan-400" },
  { icon: Server, label: "Cloud", color: "text-green-400" },
  { icon: Cpu, label: "Hardware", color: "text-orange-400" },
];

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

  const safeProfile = profile || {
    name: "Hyunseok Cho",
    headline: "AI Engineer & Full-Stack Developer",
    bio: "Computer Engineering student at UIUC with experience building AI-powered systems, scalable web applications, and hardware projects.",
    location: "Champaign, IL",
    email: "hc55@illinois.edu",
    githubUrl: "https://github.com/hscho421",
    linkedinUrl: "https://www.linkedin.com/in/hyunseok-cho/",
    resumeUrl: `${import.meta.env.BASE_URL}assets/resume.pdf`
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navigation />

      <main className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* HERO SECTION */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20 relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 font-mono text-primary mb-6"
          >
            <span className="inline-block w-8 h-[2px] bg-primary" />
            <span>Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-foreground mb-4"
          >
            {safeProfile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-muted-foreground mb-8"
          >
            I build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              intelligent systems
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-muted-foreground text-lg mb-8 leading-relaxed"
          >
            <p className="mb-6">{safeProfile.bio}</p>

            {/* Domain badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {domains.map((domain) => (
                <div
                  key={domain.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-white/10 backdrop-blur-sm"
                >
                  <domain.icon className={`w-4 h-4 ${domain.color}`} />
                  <span className="text-sm font-mono">{domain.label}</span>
                </div>
              ))}
            </div>

            <div className="font-mono text-sm">
              <span className="text-muted-foreground">Currently exploring: </span>
              <TypeAnimation
                sequence={[
                  'Multimodal LLMs & AI Agents',
                  2500,
                  'Full-Stack Web Development',
                  2500,
                  'Cloud Infrastructure & DevOps',
                  2500,
                  'Hardware Design & FPGAs',
                  2500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-primary"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="font-mono bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-background h-12 px-8 shadow-lg shadow-cyan-500/25"
              asChild
            >
              <a href={safeProfile.resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-mono border-primary/50 text-primary hover:bg-primary/10 h-12 px-8"
              asChild
            >
              <span onClick={() => scrollToElement("projects", -80)} className="cursor-pointer">
                See My Work
              </span>
            </Button>
          </motion.div>

          {/* Social links - vertical on side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-muted-foreground/30"
          >
            <a href={safeProfile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
              <Github size={20} />
            </a>
            <a href={safeProfile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${safeProfile.email}`} className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.8 }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-muted-foreground">Scroll to explore</span>
            <ChevronDown className="text-primary w-5 h-5 animate-bounce" />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 md:py-32 max-w-4xl mx-auto">
          <SectionHeader title="About Me" number="01" />

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 text-muted-foreground leading-relaxed space-y-4">
              <p>
                I'm a <span className="text-foreground font-medium">Computer Engineering</span> student at the <span className="text-primary">University of Illinois at Urbana-Champaign</span>, passionate about building technology that makes a real impact. My journey has taken me across three continents—studying at <span className="text-foreground">Seoul National University</span> and <span className="text-foreground">Nanyang Technological University</span> in Singapore.
              </p>
              <p>
                Most recently, I interned at <span className="text-primary">Samsung</span> where I built AI-powered automation agents using multimodal LLMs, achieving 90%+ success rates in desktop task automation. I love the intersection of AI and practical engineering—whether that's optimizing inference latency on H100 GPUs or designing hardware on FPGAs.
              </p>
              <p>
                When I'm not coding, I enjoy exploring how emerging technologies can solve everyday problems—from helping students plan their course schedules to navigating large campuses more efficiently.
              </p>

              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">Technologies I work with:</p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {['Python & PyTorch', 'React & TypeScript', 'LLMs & AI Agents', 'AWS & GCP', 'Docker & Linux', 'SystemVerilog'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-1 relative group">
              <div className="relative z-10 w-full aspect-square rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                 <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                    <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500">
                       HC
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Champaign, IL</span>
                    </div>
                 </div>
              </div>
              <div className="absolute top-4 left-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 md:py-32 max-w-4xl mx-auto">
          <SectionHeader title="Experience" number="02" />

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
          <SectionHeader title="Featured Projects" number="03" />

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
             <Button
               variant="outline"
               className="font-mono gap-2 border-primary/50 hover:bg-primary/10 text-primary"
               asChild
             >
                <a href="https://github.com/hscho421" target="_blank" rel="noopener noreferrer">
                  View More on GitHub <ExternalLink className="w-4 h-4" />
                </a>
             </Button>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 md:py-32 max-w-5xl mx-auto">
          <SectionHeader title="Technical Skills" number="04" align="center" />

          <div className="grid md:grid-cols-2 gap-6">
            {skills?.map((skillGroup, idx) => (
              <div
                key={skillGroup.id}
                className="group bg-card/30 backdrop-blur border border-white/5 rounded-xl p-6 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold font-display text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-mono">
                    0{idx + 1}
                  </span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-background/50 text-muted-foreground text-sm font-mono border border-white/5 hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 md:py-32 max-w-2xl mx-auto text-center">
          <div>
            <p className="font-mono text-primary mb-4">05. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              I'm always interested in hearing about new opportunities, collaborations, or just chatting about technology. Whether you have a question or want to discuss a project, feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="text-left bg-card/50 backdrop-blur border border-white/5 p-8 rounded-xl shadow-2xl mb-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
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
                    placeholder="your@email.com"
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
                  placeholder="Hello! I'd like to discuss..."
                  className="bg-background/50 border-white/10 focus:border-primary font-mono min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto font-mono bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-background shadow-lg shadow-cyan-500/25"
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

            <p className="font-mono text-xs text-muted-foreground">
              Designed & Built by Hyunseok Cho
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
