import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Logo } from "./Logo";
import { track } from "@/lib/analytics";

const NAV = [
  { label: "Mission", href: "#mission" },
  { label: "What We Do", href: "#what" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    track("theme_toggle", { mode: next ? "dark" : "light" });
  };

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-brand"
      />
      <header
        className={
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
          (scrolled ? "glass border-b" : "bg-transparent")
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#top" className="flex items-center gap-2" onClick={() => track("nav_click", { to: "top" })}>
            <Logo className="h-8 sm:h-9" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => track("nav_click", { to: item.href })}
                className="text-sm font-medium text-foreground/70 transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-border p-2 text-foreground/70 transition hover:bg-muted hover:text-foreground"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              onClick={() => track("cta_click", { id: "partner_nav" })}
              className="hidden rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 sm:inline-flex"
            >
              Partner with us
            </a>
            <button
              className="lg:hidden rounded-full border border-border p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t glass">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    track("nav_click", { to: item.href, source: "mobile" });
                  }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
