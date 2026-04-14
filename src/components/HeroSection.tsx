import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const stats = [
  { num: "7+", label: "Years Experience" },
  { num: "15+", label: "Projects Shipped" },
  { num: "5", label: "HealthTech Apps" },
];

const techTags = [
  "React", "Next.js", "TypeScript", "Flutter", "Node.js", "Firebase",
  "PostgreSQL", "Stripe", "Socket.io",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => (
  <section className="relative min-h-screen bg-navy-gradient flex items-center overflow-hidden">
    {/* Glow orbs */}
    <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] rounded-full bg-teal/10 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-[20%] -left-[5%] w-[400px] h-[400px] rounded-full bg-teal-mid/8 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left */}
      <div>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-teal/15 border border-teal-mid/30 text-teal-mid px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-teal-mid animate-pulse-dot" />
          Available for hire
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-5"
        >
          <span className="text-primary-foreground">Senior Full-Stack</span>
          <br />
          <span className="text-gradient-teal">Engineer</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground/60 text-base md:text-lg max-w-md leading-relaxed mb-8"
        >
          I build high-impact web & mobile products for HealthTech and SaaS—React, Flutter, Node.js, real-time systems, and AI-assisted delivery.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 mb-10"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary/80 transition-all hover:-translate-y-0.5"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary-foreground/25 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:border-teal-mid hover:text-teal-mid transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-extrabold text-teal-mid font-heading">
                {s.num}
              </div>
              <div className="text-xs text-primary-foreground/45 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — profile card */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="glass-card rounded-2xl p-8 max-w-md mx-auto lg:ml-auto"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal to-teal-mid flex items-center justify-center text-3xl font-extrabold text-primary-foreground mb-5 ring-4 ring-teal/30">
          PG
        </div>
        <h3 className="text-primary-foreground text-lg font-bold mb-1">Pavel Grenda</h3>
        <p className="text-primary-foreground/50 text-sm mb-1">Senior Full-Stack Engineer</p>
        <p className="flex items-center gap-1.5 text-primary-foreground/40 text-xs mb-5">
          <MapPin size={12} /> Mikolow, Poland · Remote Worldwide
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techTags.map((t) => (
            <span
              key={t}
              className="bg-teal/20 border border-teal/40 text-teal-mid text-xs font-semibold px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-3.5 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
          Open to opportunities
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
