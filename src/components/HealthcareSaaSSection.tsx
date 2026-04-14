import { motion } from "framer-motion";
import { Brain, CreditCard, LayoutGrid, Lock, MessageSquare, Webhook } from "lucide-react";

const items = [
  {
    icon: LayoutGrid,
    title: "Modular platform UX",
    desc: "Launcher dashboards, provisioned app tiles, and role-based access patterns that scale across locations and teams.",
    gradient: "from-violet/20 to-indigo/20",
    border: "hover:border-violet/40",
  },
  {
    icon: Webhook,
    title: "APIs & webhooks",
    desc: "Webhook ingestion, idempotency, retries, and audit-friendly workflows for Typeform/Stripe/Twilio-style integrations.",
    gradient: "from-cyan/20 to-emerald/20",
    border: "hover:border-cyan/40",
  },
  {
    icon: CreditCard,
    title: "Stripe billing",
    desc: "Subscription lifecycles, entitlements, and webhook-driven provisioning for multi-location SaaS.",
    gradient: "from-amber/20 to-rose/20",
    border: "hover:border-amber/40",
  },
  {
    icon: MessageSquare,
    title: "Patient/lead messaging",
    desc: "SMS/email automation patterns, templates, and deliverability-minded flows for engagement and follow-up.",
    gradient: "from-indigo/20 to-cyan/20",
    border: "hover:border-indigo/40",
  },
  {
    icon: Brain,
    title: "AI enablement",
    desc: "LLM-powered summarization, document generation, and workflow automation with privacy-first data handling.",
    gradient: "from-rose/20 to-amber/20",
    border: "hover:border-rose/40",
  },
  {
    icon: Lock,
    title: "HIPAA-aware delivery",
    desc: "Least-privilege access, encrypted storage/transport, and audit trails for PHI-sensitive systems (BA/covered-entity workflows).",
    gradient: "from-emerald/20 to-teal/20",
    border: "hover:border-emerald/40",
  },
] as const;

/** Healthcare SaaS positioning section tailored to HIPAA + AWS + AI-enabled platforms. */
const HealthcareSaaSSection = () => (
  <section id="healthcare" className="section-padding relative overflow-hidden">
    <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-emerald/5 blur-[110px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-violet/4 blur-[130px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-emerald to-cyan mb-3">
          Healthcare SaaS
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Built for <span className="text-gradient-cool">secure workflows</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          The kind of system work that matters for HIPAA-sensitive, integration-heavy platforms: intake, messaging, billing, automation, and auditability.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className={`group relative bg-card border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-400 ${it.border}`}
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${it.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-background/60 border border-border flex items-center justify-center mb-4">
                <it.icon size={20} className="text-foreground/80" />
              </div>
              <div className="font-heading font-bold text-foreground mb-1">{it.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{it.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HealthcareSaaSSection;
