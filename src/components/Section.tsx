import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={"py-20 sm:py-28 " + className}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-red)]">
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}
