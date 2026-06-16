"use client";

import { useEffect, useRef, useState } from "react";
import { coreSkills } from "@/lib/portfolio-data";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      id="skills"
      ref={sectionRef}
      className="section-hidden mb-20 font-mono"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block neon-text">
        Core Skills
        <span className="block w-3/5 h-1 bg-neon mt-2.5 rounded-sm shadow-[0_0_10px_#f0c529]" />
      </h2>

      {/* 
        Added onMouseLeave to the grid container. 
        This ensures the dimming only resets when the mouse completely leaves the grid area.
      */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {coreSkills.map((skill, index) => {
          // If a card is hovered, dim all cards EXCEPT the hovered one
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`group/card relative p-4 rounded-md bg-[rgba(15,15,15,0.6)] backdrop-blur-sm border border-l-2 border-transparent transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 ${
                isDimmed ? "opacity-5" : "opacity-100"
              }`}
              style={{
                borderLeftColor: skill.color,
                boxShadow: `0 0 8px ${skill.color}33`,
                // Keep stagger animation for initial load, but remove delay for hover transitions
                transitionDelay:
                  hoveredIndex === null ? `${index * 40}ms` : "0ms",
              }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{
                  boxShadow: `0 0 20px ${skill.color}66, inset 0 0 10px ${skill.color}22`,
                  borderLeft: `2px solid ${skill.color}`,
                }}
              />

              {/* Skill Name */}
              <h3
                className="text-lg font-bold mb-1 transition-all duration-200"
                style={{
                  color: skill.color,
                  textShadow: `0 0 5px ${skill.color}AA`,
                }}
              >
                {skill.name}
              </h3>

              {/* Skill Description */}
              <p className="text-base font-basis33 text-gray-200 group-hover/card:text-white transition-colors duration-50">
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
