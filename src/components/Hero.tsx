import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { track } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-25 dark:opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur">
            <Sparkles size={14} className="text-[var(--brand-orange)]" />
            Africa's next-generation innovation ecosystem
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building Systems for{" "}
            <span className="text-gradient-brand">Africa's Next Generation</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            AFRINOVERSE is a future-focused African innovation ecosystem building platforms,
            products and programmes that support education, technology, enterprise and
            innovation across the continent.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={() => track("cta_click", { id: "partner_hero" })}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
            >
              Partner With AFRINOVERSE
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#ecosystem"
              onClick={() => track("cta_click", { id: "explore_hero" })}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              Explore Ecosystem
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span>Educate</span>
            <span className="h-1 w-1 rounded-full bg-[var(--brand-orange)]" />
            <span>Innovate</span>
            <span className="h-1 w-1 rounded-full bg-[var(--brand-red)]" />
            <span>Empower</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
