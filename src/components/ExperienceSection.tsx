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
      "Led mobile + full-stack delivery across Flutter and React (TypeScript), coordinating feature work from UX to APIs and release",
      "Shipped CRM-like coaching workflows: lead/client intake, segmentation, dashboards, and automated follow-ups",
      "Built webhook-style integrations and event-driven notifications for onboarding and lifecycle messaging",
      "Delivered real-time engagement tracking (Socket.io) for coach/client experiences and operational dashboards",
      "Integrated AI-enabled workflows for summarization and content generation, improving operator throughput and response time",
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
      "Led mobile full-stack dev: Flutter client apps + React + Ant Design admin dashboards, shipped as multi-tenant SaaS features",
      "Implemented role-based access patterns and secure data flows aligned with healthcare-adjacent privacy requirements",
      "Led migration from legacy stack to Flutter, reducing maintenance cost by 40%",
      "Built subscription flows: Stripe checkout, billing lifecycle, and webhook-driven entitlement provisioning",
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
      "Built production web apps using React + TypeScript with reusable component systems and scalable frontend architecture",
      "Implemented dashboards, reporting views, and real-time features (WebSockets) with attention to performance and reliability",
      "Delivered integration-heavy features (REST APIs, auth flows, background jobs) in SaaS and health-tech contexts",
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
      "Built foundations in scalable frontend patterns, API consumption, and clean coding practices",
    ],
  },
];

/** Work experience timeline with impact-focused bullets. */
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
          7+ years shipping web and mobile products for SaaS and HealthTech — integrations, billing, real-time workflows, and AI-enabled features.
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
