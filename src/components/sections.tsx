import { motion } from "framer-motion";
import {
  GraduationCap, Cpu, Lightbulb, Building2, Rocket, Workflow,
  BookOpenText, FlaskConical, Users, Network,
  Sparkles, Shield, HeartHandshake, Trophy, Target, Zap,
  Mail, Github, Twitter, Linkedin,
} from "lucide-react";
import { Section } from "./Section";
import { Logo } from "./Logo";
import { track } from "@/lib/analytics";

/* ---------- Mission ---------- */
export function Mission() {
  const points = [
    "future-ready education",
    "digital capabilities",
    "innovation infrastructure",
    "enterprise solutions",
    "scalable opportunities",
  ];
  return (
    <Section
      id="mission"
      eyebrow="Africa Needs Builders"
      title={<>Africa's future will be <span className="text-gradient-brand">built</span>, not borrowed.</>}
      subtitle="Africa cannot depend solely on imported systems, outdated learning models and external innovation ecosystems to shape its future. The continent must actively build the capabilities for its next era of growth."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {points.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border bg-card p-5 text-sm font-medium capitalize text-foreground/90 shadow-card"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-white">
              {i + 1}
            </div>
            {p}
          </motion.div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-muted-foreground">
        AFRINOVERSE was created to contribute to that mission — empowering innovators,
        entrepreneurs, creators and problem-solvers to define the continent's next chapter.
      </p>
    </Section>
  );
}

/* ---------- What We Do ---------- */
const PILLARS = [
  { icon: GraduationCap, title: "Education", desc: "Future-ready learning that prepares people for the digital economy." },
  { icon: Cpu, title: "Technology", desc: "Building practical digital tools and emerging-tech capabilities." },
  { icon: Lightbulb, title: "Product Innovation", desc: "Designing software products that solve real African problems." },
  { icon: Building2, title: "Enterprise Development", desc: "Helping SMEs and institutions modernise and scale." },
  { icon: Rocket, title: "Startup Growth", desc: "Mentoring founders from idea to scalable venture." },
  { icon: Workflow, title: "Digital Transformation", desc: "End-to-end systems for operational efficiency." },
];
export function WhatWeDo() {
  return (
    <Section
      id="what"
      eyebrow="What We Do"
      title="Six pillars. One ecosystem."
      subtitle="We operate at the intersection of education, technology and enterprise — preparing individuals, institutions and businesses for the future economy."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-30" />
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Ecosystem ---------- */
const ECOSYSTEM = [
  {
    icon: GraduationCap,
    name: "Ibadan Digital Academy",
    desc: "A future-ready digital skills and innovation academy.",
    items: ["Digital literacy", "Technology education", "AI & emerging tech", "Workforce development", "Vocational innovation", "Entrepreneurship education"],
  },
  {
    icon: BookOpenText,
    name: "DigitalBridge Publishing Studio",
    desc: "A modern educational publishing studio for the digital era.",
    items: ["Future-ready textbooks", "Digital literacy resources", "Vocational learning", "Entrepreneurship content", "NERDC-compliant titles", "EdTech-enabled resources"],
  },
  {
    icon: Cpu,
    name: "Products & Technology Solutions",
    desc: "Practical digital products supporting industries and enterprises.",
    items: ["Software platforms", "Industry solutions", "Operational tools", "Digital transformation", "Productivity systems", "Custom innovation"],
  },
];
export function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      eyebrow="Our Ecosystem"
      title={<>One ecosystem, <span className="text-gradient-brand">many engines.</span></>}
      subtitle="A connected family of academies, studios and platforms that work together to drive education, innovation and enterprise."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {ECOSYSTEM.map(({ icon: Icon, name, desc, items }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-3xl border bg-card p-7 shadow-card"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <ul className="mt-5 space-y-2">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                  <span className="text-foreground/80">{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Products ---------- */
const PRODUCTS = [
  {
    name: "FairwayPro",
    tag: "Golf Club Management",
    desc: "Modern operations software for golf clubs — memberships, tee-time bookings, billing, events and reporting.",
    features: ["Memberships", "Tee-time booking", "Billing & payments", "Events", "Reporting"],
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "StitchPro",
    tag: "Vocational & Fashion",
    desc: "A platform powering vocational skills, creative entrepreneurship and fashion innovation.",
    features: ["Skills development", "Creative tools", "Vocational growth", "Order workflow"],
    accent: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "Digital ToolPro",
    tag: "Productivity Suite",
    desc: "A digital productivity and business solutions platform built for operational efficiency and transformation.",
    features: ["Operational efficiency", "Workflow automation", "Business tools", "Digital transformation"],
    accent: "from-red-500/20 to-rose-500/20",
  },
];
export function Products() {
  return (
    <Section
      id="products"
      eyebrow="Products"
      title="Practical software for African industries."
      subtitle="Software products built by AFRINOVERSE to support real industries, enterprises and emerging opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className={"relative h-44 bg-gradient-to-br " + p.accent + " p-5"}>
              <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium backdrop-blur">
                  {p.tag}
                </span>
                <div className="flex items-end justify-between">
                  <div className="rounded-xl bg-background/80 px-3 py-2 text-xs font-mono backdrop-blur">
                    <div className="h-1.5 w-16 rounded bg-gradient-brand" />
                    <div className="mt-1.5 h-1.5 w-10 rounded bg-foreground/20" />
                    <div className="mt-1.5 h-1.5 w-20 rounded bg-foreground/15" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-brand">{p.name.slice(0, 1)}</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="rounded-full bg-muted px-2.5 py-1 text-xs text-foreground/70">{f}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Innovation & Enterprise ---------- */
const INNOVATION = [
  { icon: FlaskConical, title: "AFRINOVERSE Innovation Lab", desc: "Building software, products and emerging-tech initiatives that solve real African challenges." },
  { icon: Rocket, title: "Startup Incubation Programme", desc: "Helping founders transform ideas into scalable ventures through mentorship and incubation." },
  { icon: Network, title: "Co-Working & Innovation Hub", desc: "A collaborative environment where entrepreneurs, creators and innovators connect and grow." },
];
export function Innovation() {
  return (
    <Section
      id="innovation"
      eyebrow="Innovation & Enterprise"
      title="Where ideas become ventures."
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
        <div className="grid gap-6 lg:grid-cols-3">
          {INNOVATION.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl border bg-card p-7 shadow-card"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Why Us ---------- */
const WHY = ["Education", "Innovation", "Publishing", "Technology", "Enterprise Development", "Product Creation"];
export function Why() {
  return (
    <Section
      id="why"
      eyebrow="Why AFRINOVERSE"
      title={<>Six disciplines. <span className="text-gradient-brand">One connected ecosystem.</span></>}
      subtitle="Most organisations focus on one slice. We combine the disciplines that, together, create durable opportunity for Africa."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w, i) => (
          <motion.div
            key={w}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="rounded-2xl border bg-card p-6 shadow-card"
          >
            <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
            <div className="mt-2 text-xl font-semibold">{w}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Values ---------- */
const VALUES = [
  { icon: Lightbulb, title: "Innovation", desc: "Practical solutions for real challenges." },
  { icon: Trophy, title: "Excellence", desc: "Quality, professionalism and continuous improvement." },
  { icon: Zap, title: "Empowerment", desc: "Opportunities for growth and transformation." },
  { icon: HeartHandshake, title: "Collaboration", desc: "Ecosystems and partnerships create greater impact." },
  { icon: Shield, title: "Integrity", desc: "We build with accountability and trust." },
  { icon: Target, title: "Impact", desc: "Meaningful and sustainable transformation." },
];
export function Values() {
  return (
    <Section eyebrow="Our Values" title="What we stand for.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Icon className="text-[var(--brand-red)]" size={22} />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Audience ---------- */
const AUDIENCE = [
  "Learners and students",
  "Entrepreneurs and startups",
  "Educational institutions",
  "SMEs and enterprises",
  "Innovation communities",
  "Industry partners",
  "Government & development orgs",
  "Professionals and creators",
];
export function Audience() {
  return (
    <Section id="audience" eyebrow="Who We Serve" title="Built for the people building Africa.">
      <div className="flex flex-wrap justify-center gap-3">
        {AUDIENCE.map((a, i) => (
          <motion.span
            key={a}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-card"
          >
            <Users size={14} className="mr-2 inline -translate-y-px text-[var(--brand-orange)]" />
            {a}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Vision ---------- */
export function Vision() {
  return (
    <section id="vision" className="relative isolate overflow-hidden py-28 sm:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-red)]">Our Vision</div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          To build a future where{" "}
          <span className="text-gradient-brand">African talent, innovation and enterprise thrive</span>{" "}
          through education, technology and collaborative ecosystems.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  const email = "hello@afrinoverse.com";
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border bg-card p-10 shadow-card sm:p-16"
        >
          <div className="absolute inset-0 -z-10 opacity-80 bg-gradient-hero" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-brand opacity-30 blur-3xl" />

          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-red)]">Building the Future Together</div>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              Let's build Africa's next generation of platforms, together.
            </h2>
            <p className="mt-5 text-pretty text-muted-foreground sm:text-lg">
              Whether you are a learner, founder, institution, enterprise, investor or strategic
              partner — AFRINOVERSE welcomes opportunities to collaborate, innovate and build.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${email}?subject=Partnership%20with%20AFRINOVERSE`}
                onClick={() => track("email_click", { id: "final_cta" })}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
              >
                <Sparkles size={16} /> Partner With AFRINOVERSE
              </a>
              <a
                href={`mailto:${email}`}
                onClick={() => track("email_click", { id: "contact_email" })}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
              >
                <Mail size={16} /> {email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const ext = (id: string) => () => track("external_link_click", { id });
  return (
    <footer className="border-t bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo className="h-9" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Building Systems for Africa's Next Generation. Educate. Innovate. Empower.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Twitter, id: "twitter" },
              { Icon: Linkedin, id: "linkedin" },
              { Icon: Github, id: "github" },
            ].map(({ Icon, id }) => (
              <a
                key={id}
                href="#"
                onClick={ext(id)}
                aria-label={id}
                className="rounded-full border border-border p-2 text-foreground/60 transition hover:bg-muted hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold">Ecosystem</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#ecosystem" className="hover:text-foreground">Ibadan Digital Academy</a></li>
            <li><a href="#ecosystem" className="hover:text-foreground">DigitalBridge Publishing</a></li>
            <li><a href="#products" className="hover:text-foreground">Products</a></li>
            <li><a href="#innovation" className="hover:text-foreground">Innovation Lab</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#mission" className="hover:text-foreground">Mission</a></li>
            <li><a href="#why" className="hover:text-foreground">Why us</a></li>
            <li><a href="#vision" className="hover:text-foreground">Vision</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <div>© {new Date().getFullYear()} AFRINOVERSE. All rights reserved.</div>
          <div>Privacy-friendly analytics. No personal data collected.</div>
        </div>
      </div>
    </footer>
  );
}
