import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Mobile & Full-Stack Engineer",
    period: "Apr 2025 – Feb 2026",
    company: "FitAlytics Sp. z o.o.",
    location: "Behavioral analytics · fitness & health coaching",
    color: "from-violet to-indigo",
    dotColor: "bg-violet",
    bullets: [
      "Led mobile and full-stack delivery — Flutter apps, React (TypeScript) web, and integrations end-to-end",
      "Owned coaching workflows, dashboards, notifications, and API-backed experiences",
      "Built real-time engagement tracking using Socket.io and Firebase",
      "Improved onboarding conversion by 35% through UX and performance optimization",
      "Introduced AI-assisted workflows, increasing delivery speed by ~2×",
    ],
  },
  {
    role: "Lead Mobile & Full-Stack Engineer",
    period: "May 2023 – Feb 2025",
    company: "WellTech Solutions Sp. z o.o.",
    location: "Health & wellness platforms",
    color: "from-cyan to-brand-blue",
    dotColor: "bg-cyan",
    bullets: [
      "Led mobile full-stack dev: Flutter client apps + React + Ant Design admin dashboards",
      "Delivered scalable health experiences with Firebase, social login, and secure data flows",
      "Led migration from legacy stack to Flutter, reducing maintenance cost by 40%",
      "Built subscription flows, Stripe payment UI, and billing integrations",
    ],
  },
  {
    role: "Frontend Developer",
    period: "Jun 2021 – Mar 2023",
    company: "Netguru S.A.",
    location: "International startup clients (SaaS, health-tech, fintech)",
    color: "from-emerald to-teal",
    dotColor: "bg-emerald",
    bullets: [
      "Built modern web applications using React, TypeScript, and Styled-components",
      "Implemented real-time features and dashboards using Recharts and WebSockets",
      "Contributed to frontend architecture and reusable component systems",
    ],
  },
  {
    role: "Junior Web & Mobile Developer",
    period: "Apr 2019 – Feb 2021",
    company: "Future Processing S.A.",
    location: "Web & early mobile solutions",
    color: "from-amber to-coral",
    dotColor: "bg-amber",
    bullets: [
      "Developed web apps using JavaScript, React, and REST APIs",
      "Built foundations in scalable frontend architecture and clean coding practices",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-secondary/50 relative overflow-hidden">
    <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-rose/4 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-rose to-amber mb-3">
          Career Journey
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Work <span className="text-gradient-warm">Experience</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          7+ years shipping web and mobile products for HealthTech and SaaS.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-violet via-cyan to-amber" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative pl-14 mb-12 last:mb-0 group"
          >
            {/* Dot */}
            <div className={`absolute left-3 top-1 w-[18px] h-[18px] rounded-full ${exp.dotColor} ring-4 ring-background shadow-lg group-hover:scale-125 transition-transform duration-300`}>
              <Briefcase size={10} className="text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-transparent relative overflow-hidden">
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h3 className="font-heading text-lg font-bold text-foreground">{exp.role}</h3>
                <span className={`bg-gradient-to-r ${exp.color} text-primary-foreground text-xs font-semibold px-3.5 py-1 rounded-full whitespace-nowrap`}>
                  {exp.period}
                </span>
              </div>
              <p className="font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan mb-0.5">
                {exp.company}
              </p>
              <p className="text-muted-foreground text-xs mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground pl-5 relative leading-relaxed">
                    <span className="absolute left-0 text-violet font-bold">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
