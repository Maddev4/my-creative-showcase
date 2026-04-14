import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
    tags: [
      { label: "HIPAA", cls: "bg-emerald/15 text-emerald border border-emerald/20" },
      { label: "EMR / Intake", cls: "bg-brand-blue/15 text-brand-blue border border-brand-blue/20" },
    ],
    title: "Lobbie",
    subtitle: "lobbie.com",
    desc: "HIPAA-compliant patient intake and EMR for multi-location US practices. Digital form delivery with 90%+ pre-appointment completion, scheduling with SMS/email automation, and EHR integrations.",
    cat: "health" as const,
    gradient: "from-emerald to-teal",
  },
  {
    img: charmhealth,
    alt: "CharmHealth clinical platform",
    tags: [
      { label: "Clinical AI", cls: "bg-amber/15 text-amber border border-amber/20" },
      { label: "Enterprise", cls: "bg-violet/15 text-violet border border-violet/20" },
    ],
    title: "CharmHealth",
    subtitle: "charmhealth.com",
    desc: "Enterprise clinical platform: CharmCopilot ambient scribing, AI visit summaries, structured charting, e-prescribing, and modular hub/tile launcher.",
    cat: "health" as const,
    gradient: "from-amber to-rose",
  },
  {
    img: arcascope,
    alt: "Arcascope circadian health",
    tags: [
      { label: "HealthTech", cls: "bg-cyan/15 text-cyan border border-cyan/20" },
      { label: "Full Stack", cls: "bg-indigo/15 text-indigo border border-indigo/20" },
    ],
    title: "Arcascope",
    subtitle: "",
    desc: "Behavioral health and sleep optimization — data-forward storytelling and engagement aligned to circadian science.",
    cat: "health" as const,
    gradient: "from-cyan to-brand-blue",
  },
  {
    img: hubfit,
    alt: "HubFit coach dashboard",
    tags: [
      { label: "Coaching", cls: "bg-violet/15 text-violet border border-violet/20" },
      { label: "SaaS", cls: "bg-rose/15 text-rose border border-rose/20" },
    ],
    title: "Hubfit",
    subtitle: "",
    desc: "Coaching and fitness engagement — admin dashboards, client management, automations supporting retention and coach scale.",
    cat: "health" as const,
    gradient: "from-violet to-pink",
  },
  {
    img: everfit,
    alt: "Everfit fitness intelligence",
    tags: [
      { label: "Flutter", cls: "bg-brand-blue/15 text-brand-blue border border-brand-blue/20" },
      { label: "Real-time", cls: "bg-coral/15 text-coral border border-coral/20" },
    ],
    title: "Everfit",
    subtitle: "mobile",
    desc: "Integrated fitness intelligence — workouts, coaching, messaging, and progress analytics with real-time client–coach engagement.",
    cat: "mobile" as const,
    gradient: "from-brand-blue to-violet",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "HealthTech", value: "health" },
  { label: "Mobile", value: "mobile" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet/4 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald mb-3">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Selected <span className="text-gradient-cool">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Strong domain experience in HealthTech, SaaS, and engagement-driven platforms.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active === f.value
                  ? "bg-gradient-to-r from-violet to-indigo text-primary-foreground border-transparent shadow-lg shadow-violet/20"
                  : "bg-card text-muted-foreground border-border hover:border-violet/40 hover:text-foreground"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 relative"
              >
                {/* Image with gradient overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary-foreground/90 backdrop-blur-sm text-foreground p-2 rounded-full shadow-lg">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t.label} className={`text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full ${t.cls}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-0.5">
                    {p.title}
                    {p.subtitle && (
                      <span className="text-muted-foreground font-normal text-sm ml-1.5">
                        · {p.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{p.desc}</p>
                </div>

                {/* Bottom gradient line */}
                <div className={`h-1 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
