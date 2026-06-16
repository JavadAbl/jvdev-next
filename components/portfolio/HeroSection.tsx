"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
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
      id="home"
      ref={sectionRef}
      className="section-visible pt-20 md:pt-25 lg:h-screen flex flex-col justify-center lg:p-16"
    >
      <div className="lg:pb-[140px]">
        <p className="text-2xl text-neon font-mono mb-4 neon-text">
          Hello, I am
        </p>
        <h1 className="text-4xl font-mono font-bold text-[#e0e0e0] leading-tight neon-text">
          Mohammad Javad Abolhasani Far
        </h1>
      </div>
    </section>
  );
}
