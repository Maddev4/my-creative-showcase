import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Shield } from "lucide-react";

const stats = [
  { num: "7+", label: "Years Experience", color: "from-violet to-indigo" },
  { num: "15+", label: "Projects Shipped", color: "from-cyan to-emerald" },
  { num: "5", label: "HealthTech Apps", color: "from-rose to-coral" },
];

const techTags = [
  { name: "React", color: "bg-brand-blue/15 text-brand-blue border-brand-blue/25" },
  { name: "Next.js", color: "bg-violet/15 text-violet border-violet/25" },
  { name: "TypeScript", color: "bg-indigo/15 text-indigo border-indigo/25" },
  { name: "React Native", color: "bg-brand-blue/15 text-brand-blue border-brand-blue/25" },
  { name: "Flutter", color: "bg-cyan/15 text-cyan border-cyan/25" },
  { name: "Node.js", color: "bg-emerald/15 text-emerald border-emerald/25" },
  { name: "Firebase", color: "bg-amber/15 text-amber border-amber/25" },
  { name: "PostgreSQL", color: "bg-brand-blue/15 text-brand-blue border-brand-blue/25" },
  { name: "Socket.io", color: "bg-rose/15 text-rose border-rose/25" },
  { name: "AWS", color: "bg-amber/15 text-amber border-amber/25" },
  { name: "LLMs (GPT-4/5, Claude)", color: "bg-rose/15 text-rose border-rose/25" },
  { name: "RAG", color: "bg-amber/15 text-amber border-amber/25" },
  { name: "LangGraph / LangChain", color: "bg-violet/15 text-violet border-violet/25" },
  { name: "Voice Agents", color: "bg-cyan/15 text-cyan border-cyan/25" },
  { name: "Twilio (Voice/SMS/WA)", color: "bg-brand-blue/15 text-brand-blue border-brand-blue/25" },
  { name: "Vector DBs (Pinecone/Qdrant)", color: "bg-indigo/15 text-indigo border-indigo/25" },
  { name: "n8n / Zapier", color: "bg-emerald/15 text-emerald border-emerald/25" },
  { name: "Webhooks / Event-driven", color: "bg-rose/15 text-rose border-rose/25" },
  { name: "Stripe / PayPal", color: "bg-violet/15 text-violet border-violet/25" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/** Hero headline + positioning for healthcare SaaS and AI-enabled platforms. */
const HeroSection = () => (
  <section className="relative min-h-screen bg-aurora flex items-center overflow-hidden">
    {/* Floating gradient orbs */}
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-violet/8 blur-[100px] float-animation pointer-events-none" />
    <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] rounded-full bg-cyan/6 blur-[80px] float-animation-delayed pointer-events-none" />
    <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-rose/5 blur-[60px] float-animation pointer-events-none" />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10"
    >
      {/* Left */}
      <div>
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse-dot" />
          <span className="text-emerald text-xs font-semibold uppercase tracking-widest">
            Available for hire
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6"
        >
          <span className="text-primary-foreground">Senior</span>
          <br />
          <span className="text-gradient">AI & Full-Stack</span>
          <br />
          <span className="text-primary-foreground">Engineer</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-primary-foreground/50 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
        >
          Crafting high-impact web & mobile products for{" "}
          <span className="text-primary-foreground/80 font-medium">HealthTech</span> and{" "}
          <span className="text-primary-foreground/80 font-medium">SaaS</span> — from concept to production.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-violet to-indigo text-primary-foreground px-7 py-3.5 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-violet/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 glass text-primary-foreground/80 hover:text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <Sparkles size={15} />
            Get in Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="flex gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className={`text-3xl md:text-4xl font-extrabold font-heading bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                {s.num}
              </div>
              <div className="text-xs text-primary-foreground/35 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — profile card */}
      <motion.div variants={item}>
        <div className="glass-strong rounded-3xl p-8 card-shine glow-multi float-animation max-w-sm mx-auto lg:ml-auto">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet via-indigo to-cyan flex items-center justify-center text-3xl font-extrabold text-primary-foreground mb-6 shadow-lg shadow-violet/30">
            PG
          </div>

          <h3 className="text-primary-foreground text-xl font-bold mb-1 font-heading">Pavel Grenda</h3>
          <p className="text-primary-foreground/50 text-sm mb-1">Senior Full-Stack Engineer</p>
          <p className="flex items-center gap-1.5 text-primary-foreground/35 text-xs mb-6">
            <MapPin size={11} /> Mikolow, Poland · Remote Worldwide
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {techTags.map((t) => (
              <span
                key={t.name}
                className={`text-[0.7rem] font-semibold px-3 py-1 rounded-full border ${t.color}`}
              >
                {t.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2.5 bg-emerald/10 border border-emerald/20 text-emerald text-xs font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse-dot" />
            Open to opportunities
          </div>

          <div className="flex items-center gap-2 mt-4 bg-violet/10 border border-violet/20 text-violet text-xs font-semibold px-4 py-2 rounded-full">
            <Shield size={12} />
            HIPAA-aware engineering · PHI-safe patterns
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
