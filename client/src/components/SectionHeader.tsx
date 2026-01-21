import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, number, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-4xl font-bold font-display tracking-tight text-foreground">
          {number && (
            <span className="font-mono text-primary text-xl md:text-2xl font-normal">
              {number}.
            </span>
          )}
          {title}
          <span className="hidden md:block h-[1px] bg-muted w-32 md:w-64 ml-6 opacity-50"></span>
        </h2>
        {subtitle && (
          <p className="mt-4 text-muted-foreground font-mono text-sm md:text-base max-w-2xl mx-auto md:mx-0">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
