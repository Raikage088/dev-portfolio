/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // 👈 Install: npm install lucide-react

import logo from "@/assets/my_logo.svg";
import { Button } from "@/components/Button";

export const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certification", label: "Certification" },
    { href: "#contact", label: "Contact" },
  ];

  const [currentSection, setCurrentSection] = useState("#hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const scrollSetting = {
      root: null,
      rootMargin: "-10% 0px -40% 0px",
      threshold: 0,
    };

    const detectCurrentSection = (entries) => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        setCurrentSection("#contact");
        window.history.replaceState(null, null, "#contact");
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setCurrentSection(id);
          window.history.replaceState(null, null, id);
        }
      });
    };

    const observer = new IntersectionObserver(
      detectCurrentSection,
      scrollSetting,
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src={logo}
              alt="my_logo"
              className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110 md:h-20"
            />
          </a>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link, index) => {
            const isActive = currentSection === link.href;
            return (
              <a
                href={link.href}
                key={index}
                className="relative px-3 py-2 text-base font-bold text-font-color-primary transition-all duration-300 ease-in-out hover:text-font-color-secondary hover:-translate-y-0.5"
              >
                <span className="relative z-20">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-foreground rounded-full opacity-90"
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button - visible only on mobile */}
        <button
          className="md:hidden p-2 text-font-color-primary hover:text-font-color-secondary transition-colors z-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        // If Mobile is not open, set max-height to 0 and opacity to 0, otherwise set max-height to a large value and opacity to 100
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2 bg-background/95 backdrop-blur-sm">
          {navLinks.map((link, index) => {
            const isActive = currentSection === link.href;
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-foreground text-black"
                    : "text-font-color-primary hover:bg-muted hover:text-font-color-secondary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};
