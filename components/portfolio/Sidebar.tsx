"use client";

import { useState, useCallback } from "react";
import { navItems, socialLinks } from "@/lib/portfolio-data";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      // Close menu on mobile (lg breakpoint is 1024px)
      if (window.innerWidth <= 1024) {
        setIsOpen(false);
      }

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const isMobile = window.innerWidth <= 1024;
        // Add an offset so the section isn't hidden behind the mobile header (h-15 = 60px)
        const offset = isMobile ? 80 : 0;

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [],
  );

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-[3px] z-998 transition-opacity transition-visibility ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "0.4s",
        }}
        onClick={toggleMenu}
      />

      {/* Mobile Header - only visible on lg and below */}
      <header className="fixed top-0 left-0 w-full h-15 bg-[#1a1a1a] text-white items-center px-5 z-999 shadow-[0_2px_10px_rgba(0,0,0,0.1)] lg:hidden flex">
        <button
          className="bg-none border-none text-white text-2xl cursor-pointer transition-transform active:scale-90"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="ml-auto font-bold text-neon absolute left-1/2 -translate-x-1/2">
          JVDEV.IR
        </div>
      </header>

      {/* Sidebar - desktop: always visible; mobile: toggled via isOpen */}
      <nav
        className={`flex flex-col overflow-y-hidden fixed left-0 top-0 h-screen bg-[#1a1a1a] text-white items-center pt-5 z-1000 shadow-[4px_0_15px_rgba(0,0,0,0.1)] transition-transform duration-400 
          w-70 lg:w-[15%] lg:min-w-50
          -translate-x-full lg:translate-x-0
          ${isOpen ? "translate-x-0" : ""}
        `}
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Profile Section */}
        <div className="text-center mb-8 w-full px-4 shrink-0">
          <img
            src="/javad.jpg"
            alt="Profile Picture"
            className="object-top w-35 rounded-[50%] border-[3px] border-neon mb-4 transition-transform hover:scale-105 hover:rotate-5 shadow-[0_0_20px_rgba(240,197,41,0.5),0_0_30px_rgba(240,197,41,0.3)] hover:shadow-[0_0_30px_rgba(240,197,41,0.8),0_0_40px_rgba(240,197,41,0.6)]"
          />
          <h2 className="text-xl font-semibold mb-1 neon-text">
            M.J Abolhasani
          </h2>
          <p
            className="text-sm text-[#aab2bd] font-light neon-text"
            style={{ animationDuration: "2.5s" }}
          >
            Full Stack Developer
          </p>
        </div>

        {/* Navigation */}
        <ul className="w-full flex flex-col items-center list-none text-sm flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <li key={item.href} className="w-full text-center">
              <a
                href={item.href}
                className="flex items-center py-3 px-5 text-[#aab2bd] font-medium transition-all duration-300 relative overflow-hidden hover:text-neon hover:bg-white/5 group"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <i className={`fas ${item.icon} mr-2.5 w-5 text-center`} />

                {item.label}

                {/* Underline Animation */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-neon transition-all duration-300 -translate-x-1/2 shadow-[0_0_5px_#f0c529] group-hover:w-4/5" />
              </a>
            </li>
          ))}
        </ul>

        {/* Social Footer */}
        <div className="mt-auto flex gap-3.75 shrink-0 mb-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-[#aab2bd] text-lg transition-all duration-300 p-2 rounded-full hover:text-neon hover:scale-125"
              style={{ textShadow: "0 0 5px #f0c529" }}
              aria-label={social.label}
            >
              <i className={`fab ${social.icon}`} />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
