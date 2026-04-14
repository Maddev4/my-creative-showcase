import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-10">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Open to full-time roles and monthly engagements ($30/hr flexible). I own features across React/Next.js, Flutter, and Node.js—real-time systems, Firebase, Stripe, and AI-assisted delivery. Certified HIPAA Professional (CHP) valid through Feb 2028.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:be3830072@gmail.com"
                className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-teal hover:bg-teal-light transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <Mail size={18} className="text-teal" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium text-sm text-foreground">be3830072@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
                  <MapPin size={18} className="text-teal" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-medium text-sm text-foreground">Mikolow, Poland · Worldwide Remote</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-ring bg-background text-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-ring bg-background text-foreground transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Subject</label>
              <input
                type="text"
                placeholder="Project inquiry, collaboration..."
                required
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-ring bg-background text-foreground transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                required
                rows={4}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-ring bg-background text-foreground transition-colors resize-vertical"
              />
            </div>
            {submitted && (
              <p className="text-sm text-teal font-medium">Thanks — your message was sent!</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-sm hover:bg-primary/80 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
