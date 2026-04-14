import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-navy/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">
          <span className="text-gradient">Pavel</span>
          <span className="text-primary-foreground/80">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet to-cyan rounded-full group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 relative overflow-hidden bg-gradient-to-r from-violet to-indigo text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-violet/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Let's Talk</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground/80"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong border-t border-primary-foreground/10 pb-6"
        >
          {navLinks.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="block px-6 py-3.5 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground border-b border-primary-foreground/5"
            >
              {l.label}
            </motion.a>
          ))}
          <div className="px-6 pt-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-gradient-to-r from-violet to-indigo text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
