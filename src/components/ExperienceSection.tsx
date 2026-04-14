import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Mobile & Full-Stack Engineer",
    period: "Apr 2025 – Feb 2026",
    company: "FitAlytics Sp. z o.o.",
    location: "Behavioral analytics · fitness & health coaching",
    bullets: [
      "Led mobile and full-stack delivery for a behavioral analytics platform—Flutter apps, React (TypeScript) web, and integrations end-to-end",
      "Owned features across mobile and web: coaching workflows, dashboards, notifications, and API-backed experiences",
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
    bullets: [
      "Led mobile full-stack development: Flutter (Dart) client apps plus React + TypeScript + Ant Design admin dashboards",
      "Delivered scalable health & wellness experiences with Firebase, social login, and secure data flows",
      "Led migration from legacy mobile stack to Flutter, reducing maintenance cost by 40%",
      "Built subscription flows, Stripe payment UI, and billing integrations",
    ],
  },
  {
    role: "Frontend Developer",
    period: "Jun 2021 – Mar 2023",
    company: "Netguru S.A.",
    location: "International startup clients (SaaS, health-tech, fintech)",
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
    bullets: [
      "Developed web apps using JavaScript, React, and REST APIs",
      "Built foundations in scalable frontend architecture and clean coding practices",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal mb-2">Career</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-2">
          Work Experience
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          7+ years shipping web and mobile products for HealthTech and SaaS—from dashboards and real-time engagement to subscriptions and migrations.
        </p>
      </motion.div>

      <div className="relative pl-8 border-l-2 border-teal/30">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative mb-10 last:mb-0"
          >
            {/* Dot */}
            <div className="absolute -left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-teal ring-4 ring-background" />

            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="font-heading text-lg font-bold text-foreground">{exp.role}</h3>
              <span className="bg-teal-light text-teal text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-teal font-semibold text-sm">{exp.company}</p>
            <p className="text-muted-foreground text-xs mb-3">{exp.location}</p>
            <ul className="space-y-1.5">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-muted-foreground pl-5 relative leading-relaxed">
                  <span className="absolute left-0 text-teal font-bold">→</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
