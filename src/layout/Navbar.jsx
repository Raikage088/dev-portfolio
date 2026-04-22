/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import logo from "@/assets/my_logo.svg";
import { Button } from "@/components/Button";

export const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certification", label: "Certification" },
    { href: "#contact", label: "Contact" },
  ];

  const [currentSection, setCurrentSection] = useState("#hero"); // set hero as default

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
        return; // Exit para hindi ma-override ng observer
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

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center pl-20">
          <a href="#hero" className="cursor-pointer">
            <img
              src={logo}
              alt="my_logo"
              className="h-20 w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-115"
            />
          </a>
        </div>
        {/* Navbar pages selector */}
        <div className="flex items-center">
          <div className="flex gap-20 pr-40">
            {navLinks.map((link, index) => {
              const isActive = currentSection === link.href;

              return (
                <a
                  href={link.href}
                  key={index}
                  className="relative px-5 py-2 inline-block text-base font-bold text-font-color-primary transition-all duration-300 ease-in-out hover:text-font-color-secondary hover:-translate-y-1"
                >
                  <span className="relative z-20">{link.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-foreground rounded-full"
                      transition={{
                        type: "tween", // Ito ang mag-aalis ng "talbog" o "snap"
                        ease: "easeInOut", // Classic smooth easing
                        duration: 0.5, // 0.3s = duration-300
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
        {/* CTA */}
        {/* <div>
          <Button
            className="rounded-sm bg-button-secondary! text-font-color-primary!"
            size="default"
          >
            LET'S CONTACT
          </Button>
        </div> */}
      </nav>
    </header>
  );
};
