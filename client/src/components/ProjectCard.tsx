import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="group h-full flex flex-col bg-card/40 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(0,255,255,0.15)] overflow-hidden">
        <div className="relative h-48 overflow-hidden bg-muted/20">
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-card/50">
              <Folder className="w-16 h-16 text-primary/20 group-hover:text-primary/50 transition-colors" />
            </div>
          )}
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
              )}
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
            {project.description}
          </p>
        </CardContent>
        
        <CardFooter className="pt-0 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-mono text-primary/80"
            >
              {tech}
            </span>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
