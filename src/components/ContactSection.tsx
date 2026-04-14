import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  /** Intercepts the demo form submission and shows a confirmation state. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] rounded-full bg-violet/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full bg-cyan/4 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-violet to-rose mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Open to full-time roles and monthly engagements. Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 max-w-4xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I own features across React/Next.js, Flutter, and Node.js — API integrations, real-time systems, Stripe billing, and AI-enabled workflows. I’m comfortable shipping in HIPAA-aware environments (PHI handling, least-privilege access, audit trails, encryption in transit/at rest).
            </p>

            <a
              href="mailto:be3830072@gmail.com"
              className="group flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-violet/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet to-indigo flex items-center justify-center shadow-lg shadow-violet/20 group-hover:scale-110 transition-transform">
                <Mail size={20} className="text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                <div className="font-medium text-sm text-foreground truncate">be3830072@gmail.com</div>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-violet transition-colors" />
            </a>

            <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-emerald flex items-center justify-center shadow-lg shadow-cyan/20">
                <MapPin size={20} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                <div className="font-medium text-sm text-foreground">Mikolow, Poland · Remote</div>
              </div>
            </div>

            <div className="p-5 bg-card border border-border rounded-2xl">
              <div className="text-xs text-muted-foreground mb-1">Rate</div>
              <div className="font-heading font-bold text-2xl text-gradient">$30 - $35/hr</div>
              <div className="text-xs text-muted-foreground mt-1">Flexible monthly engagements</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-7 space-y-5 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20 bg-background text-foreground transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20 bg-background text-foreground transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Subject</label>
              <input
                type="text"
                placeholder="Project inquiry, collaboration..."
                required
                className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20 bg-background text-foreground transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                required
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20 bg-background text-foreground transition-all resize-y"
              />
            </div>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-emerald font-medium flex items-center gap-2"
              >
                ✓ Message sent successfully!
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full group bg-gradient-to-r from-violet to-indigo text-primary-foreground py-3.5 rounded-xl font-bold text-sm hover:shadow-xl hover:shadow-violet/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
