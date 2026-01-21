import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  company: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  technologies?: string[] | null;
  location?: string | null;
  index: number;
}

export function ExperienceItem({ company, role, startDate, endDate, description, technologies, location, index }: ExperienceProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 left-[50%] -translate-x-[50%]" />
      
      <div className={`md:flex items-start justify-between gap-10 group ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        {/* Timeline Dot */}
        <div className="absolute left-0 md:left-[50%] md:-translate-x-[50%] mt-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,255,0.5)] z-10 ring-4 ring-background" />
        
        {/* Date (Desktop) */}
        <div className={`hidden md:block w-[45%] text-right font-mono text-sm text-primary/80 pt-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
          {startDate} — {endDate || "Present"}
        </div>
        
        {/* Content */}
        <div className="w-full md:w-[45%] mb-12">
          <div className="p-6 rounded-lg bg-card/30 border border-white/5 hover:border-primary/30 transition-colors backdrop-blur-sm group-hover:bg-card/50">
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="text-xl font-bold font-display text-foreground">{role}</h3>
              <div className="flex flex-wrap items-center gap-x-2 text-primary font-mono text-sm">
                <span>@ {company}</span>
                {location && <span className="text-muted-foreground">• {location}</span>}
              </div>
              <div className="md:hidden font-mono text-xs text-muted-foreground mt-1">
                {startDate} — {endDate || "Present"}
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>
            
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-transparent font-mono text-[10px] font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
