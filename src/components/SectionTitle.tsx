import { motion } from "framer-motion";

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7 }}
    className={`max-w-3xl mb-12 ${center ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.25em] text-primary-glow mb-4">
        <span className="h-1 w-1 rounded-full bg-primary-glow" />
        {eyebrow}
      </div>
    )}
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      <span className="text-silver">{title.split(" ").slice(0, -1).join(" ")} </span>
      <span className="text-gradient">{title.split(" ").slice(-1)}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
  </motion.div>
);

export default SectionTitle;
