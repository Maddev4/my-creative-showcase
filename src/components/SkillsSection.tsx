import { motion } from "framer-motion";

const skills = [
  { icon: "🧠", name: "LLM Integration", level: "GPT-4/GPT-5, Claude, LLaMA 3, Gemini, Mistral · RAG", gradient: "from-rose/20 to-amber/20", border: "hover:border-rose/40" },
  { icon: "🕸️", name: "Multi-Agent Systems", level: "LangChain, LangGraph, CrewAI, AutoGen", gradient: "from-violet/20 to-indigo/20", border: "hover:border-violet/40" },
  { icon: "🎙️", name: "AI Voice Agents", level: "Sales/support/IVR · VAPI, Retell, Bland, hume.ai", gradient: "from-cyan/20 to-emerald/20", border: "hover:border-cyan/40" },
  { icon: "🗣️", name: "Speech Tech (STT/TTS)", level: "Real-time voice processing · ElevenLabs voice cloning", gradient: "from-amber/20 to-coral/20", border: "hover:border-amber/40" },
  { icon: "🧬", name: "Vector Databases", level: "Pinecone, Weaviate, Qdrant, ChromaDB", gradient: "from-indigo/20 to-cyan/20", border: "hover:border-indigo/40" },
  { icon: "🧱", name: "Backend", level: "Python (Django/Flask/FastAPI) · Node (Express/NestJS) · Java (Spring Boot)", gradient: "from-emerald/20 to-teal/20", border: "hover:border-emerald/40" },
  { icon: "📞", name: "Twilio Services", level: "Voice, SMS, WhatsApp · Studio Flows · Programmable Messaging", gradient: "from-brand-blue/20 to-violet/20", border: "hover:border-brand-blue/40" },
  { icon: "🗂️", name: "CRM Platforms", level: "Salesforce, HubSpot, Zoho, Pipedrive, Airtable · Custom CRMs", gradient: "from-brand-blue/20 to-indigo/20", border: "hover:border-brand-blue/40" },
  { icon: "⚙️", name: "Automation Tools", level: "n8n, Zapier, Make.com, Power Automate", gradient: "from-emerald/20 to-cyan/20", border: "hover:border-emerald/40" },
  { icon: "🔌", name: "Integrations & Webhooks", level: "Google Calendar, Zoom, Slack, Notion · Calendly/Cal.com · event-driven sync/ETL", gradient: "from-violet/20 to-pink/20", border: "hover:border-violet/40" },
  { icon: "💳", name: "Payments", level: "Stripe, PayPal", gradient: "from-indigo/20 to-rose/20", border: "hover:border-indigo/40" },
];

/** Core skills snapshot, optimized for SaaS/HealthTech roles. */
const SkillsSection = () => (
  <section id="skills" className="section-padding relative overflow-hidden">
    {/* Subtle background accent */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan/5 blur-[80px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan mb-3">
          Core Expertise
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Full‑stack delivery for SaaS and HealthTech: modular frontends, API/webhook integrations, AWS deployment patterns, and AI-enabled workflows.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className={`group relative bg-card border border-border rounded-2xl p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-400 cursor-default ${s.border}`}
          >
            {/* Gradient bg on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

            <div className="relative z-10">
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <div className="font-heading font-bold text-sm text-foreground mb-0.5">{s.name}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{s.level}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
