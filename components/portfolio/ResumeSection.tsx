"use client";

import { useEffect, useRef } from "react";
import { experience, education } from "@/lib/portfolio-data";

export default function ResumeSection() {
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
    <section id="resume" ref={sectionRef} className="section-hidden mb-20">
      <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 inline-block neon-text">
        Resume
        <span className="block w-3/5 h-1 bg-neon mt-2.5 rounded-sm shadow-[0_0_10px_#f0c529]" />
      </h2>

      {/* Experience */}
      <h3 className="text-xl md:text-2xl mb-6 font-mono text-[rgba(177,177,177,0.99)] ">
        Experience
      </h3>

      <div className="relative border-l-2 border-[#ddd] pl-8 ml-4">
        {experience.map((item, index) => (
          <div key={index} className="relative mb-10 last:mb-0">
            <div className="absolute left-[-2.6rem] top-1.25 w-4 h-4 rounded-full bg-white border-[3px] border-neon" />

            <div className="text-sm text-neon font-semibold mb-2">
              {item.date}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-0.5">{item.company}</h3>

              <h4 className="text-base text-[#c4cad1] font-normal mb-2">
                {item.role}
              </h4>

              <ul className="list-disc list-inside space-y-1 font-sans text-sm">
                {item.details.map((detail, dIndex) => (
                  <li key={dIndex} className="text-[#e0e0e0]">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <h3 className="text-xl md:text-2xl mb-6 text-[rgba(177,177,177,0.99)] mt-8">
        Education
      </h3>
      <div className="relative border-l-2 border-[#ddd] pl-8 ml-4">
        {education.map((item, index) => (
          <div key={index} className="relative mb-10 last:mb-0">
            <div className="absolute left-[-2.6rem] top-1.25 w-4 h-4 rounded-full bg-white border-[3px] border-neon" />

            <div className="text-sm text-neon font-semibold mb-2">
              {item.date}
            </div>

            <div>
              <h3 className="text-xl">{item.degree}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
