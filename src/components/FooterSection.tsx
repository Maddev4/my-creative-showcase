import { Heart } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-aurora py-16 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="inline-block mb-6">
        <span className="font-heading text-3xl font-bold text-gradient">Pavel.</span>
      </div>
      <p className="text-primary-foreground/60 text-sm mb-2">
        Senior Full-Stack Engineer · Mikolow, Poland
      </p>
      <a
        href="mailto:be3830072@gmail.com"
        className="inline-block text-sm text-transparent bg-clip-text bg-gradient-to-r from-violet to-cyan font-medium hover:opacity-80 transition-opacity"
      >
        be3830072@gmail.com
      </a>

      <div className="mt-8 pt-8 border-t border-primary-foreground/10">
        <p className="text-primary-foreground/25 text-xs flex items-center justify-center gap-1.5">
          © 2026 Pavel Grenda. Built with <Heart size={11} className="text-rose" /> All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
