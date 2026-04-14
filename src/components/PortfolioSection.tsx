import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import lobbie from "@/assets/lobbie.png";
import charmhealth from "@/assets/charmhealth.png";
import arcascope from "@/assets/arcascope.png";
import hubfit from "@/assets/hubfit.png";
import everfit from "@/assets/everfit.png";

type Category = "all" | "health" | "mobile";

const projects = [
  {
    img: lobbie,
    alt: "Lobbie healthcare SaaS",
    tags: [{ label: "HIPAA", cls: "bg-accent text-accent-foreground" }, { label: "EMR / Intake", cls: "bg-blue-100 text-blue-800" }],
    title: "Lobbie · lobbie.com",
    desc: "HIPAA-compliant patient intake and EMR for multi-location US practices. Built digital form delivery with 90%+ pre-appointment completion, multi-site access control, scheduling with SMS/email automation, and EHR integrations.",
    cat: "health" as const,
  },
  {
    img: charmhealth,
    alt: "CharmHealth clinical platform",
    tags: [{ label: "Clinical AI", cls: "bg-amber-100 text-amber-800" }, { label: "Enterprise", cls: "bg-accent text-accent-foreground" }],
    title: "CharmHealth · charmhealth.com",
    desc: "Enterprise clinical platform: CharmCopilot ambient scribing, AI visit summaries, structured charting, e-prescribing, lab integrations, and modular hub/tile launcher for federated workflows.",
    cat: "health" as const,
  },
  {
    img: arcascope,
    alt: "Arcascope circadian health",
    tags: [{ label: "HealthTech", cls: "bg-accent text-accent-foreground" }, { label: "Full Stack", cls: "bg-blue-100 text-blue-800" }],
    title: "Arcascope",
    desc: "Behavioral health and sleep optimization—product work on web experiences, data-forward storytelling, and engagement aligned to circadian science.",
    cat: "health" as const,
  },
  {
    img: hubfit,
    alt: "HubFit coach dashboard",
    tags: [{ label: "Coaching", cls: "bg-accent text-accent-foreground" }, { label: "SaaS", cls: "bg-blue-100 text-blue-800" }],
    title: "Hubfit",
    desc: "Coaching and fitness engagement—admin dashboards, client management, automations, and workflows supporting retention and coach scale.",
    cat: "health" as const,
  },
  {
    img: everfit,
    alt: "Everfit fitness intelligence",
    tags: [{ label: "Flutter", cls: "bg-blue-100 text-blue-800" }, { label: "Real-time", cls: "bg-accent text-accent-foreground" }],
    title: "Everfit (mobile)",
    desc: "Integrated fitness intelligence—workouts, coaching, messaging, and progress analytics with real-time client–coach engagement.",
    cat: "mobile" as const,
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "HealthTech", value: "health" },
  { label: "Mobile", value: "mobile" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal mb-2">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-xl mb-8">
            Strong domain experience in HealthTech, SaaS, and engagement-driven platforms—web, mobile, and full-stack delivery.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === f.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-teal hover:text-teal"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-teal transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.tags.map((t) => (
                      <span key={t.label} className={`text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full ${t.cls}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
