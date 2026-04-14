import { motion } from "framer-motion";

const skills = [
  { icon: "⚛️", name: "React / Next.js", level: "TypeScript, Ant Design, MUI" },
  { icon: "📱", name: "Flutter", level: "Dart, GetX, Firebase, social auth" },
  { icon: "🟢", name: "Node.js / NestJS", level: "REST APIs, scalable backends" },
  { icon: "🔥", name: "Firebase", level: "Auth, Firestore, FCM, Storage" },
  { icon: "⚡", name: "Real-time", level: "WebSockets, Socket.io, live data" },
  { icon: "📊", name: "Data Viz", level: "Recharts, analytics UX" },
  { icon: "🗄️", name: "Data Layer", level: "PostgreSQL, Supabase" },
  { icon: "💳", name: "Payments", level: "Stripe subscriptions & billing" },
  { icon: "🤖", name: "AI Workflows", level: "GPT, Claude, Codex pipelines" },
  { icon: "🚀", name: "Delivery", level: "CI/CD, Agile, code review" },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal mb-2">Core Expertise</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-2">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-xl mb-10">
          Frontend, mobile, backend, real-time systems, and AI-assisted delivery—aligned with production SaaS and HealthTech platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:border-teal hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-sm text-foreground truncate">{s.name}</div>
              <div className="text-xs text-muted-foreground truncate">{s.level}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
