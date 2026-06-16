"use client";

import { useEffect, useRef } from "react";
import { subSkills } from "@/lib/portfolio-data";

export default function SubSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="subskills"
      ref={sectionRef}
      className="section-hidden mb-20 relative"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block neon-text">
        Sub Skills
        <span className="block w-3/5 h-1 bg-neon mt-2.5 rounded-sm shadow-[0_0_10px_#f0c529]" />
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 relative">
        {subSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-center items-center gap-2 skill-card-sweep bg-[rgba(30,30,30,0.23)] rounded-xl text-center transition-all duration-350 border border-transparent shadow-[0_5px_15px_rgba(0,0,0,0.3)] backdrop-blur-xs hover:border-(--glow-color) hover:z-10 group p-2 pb-1"
            style={
              {
                "--glow-color": skill.glowColor,
              } as React.CSSProperties
            }
          >
            {/* Icon */}
            <div
              className="text-5xl inline-block transition-all duration-400 relative z-2 group-hover:scale-125 group-hover:rotate-[5deg]"
              style={{
                color: skill.textColor,
                filter: "drop-shadow(0 0 12px var(--glow-color))",
                textShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            >
              <i className={`${skill.iconType} ${skill.icon}`} />
            </div>

            {/* Title */}
            <h3
              className="text-base font-bold   font-basis33 tracking-wider uppercase transition-all duration-300 relative z-2 group-hover:tracking-[0.09em] group-hover:[text-shadow:0_0_2px_var(--glow-color)]"
              style={{ color: skill.textColor }}
            >
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
