"use client";

import { useEffect, useRef } from "react";
import { portfolioProjects } from "@/lib/portfolio-data";

// Inline SVG Icons for self-sufficiency
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export default function PortfolioSection() {
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
    <section id="portfolio" ref={sectionRef} className="section-hidden mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block neon-text">
        Portfolio
        <span className="block w-3/5 h-1 bg-neon mt-2.5 rounded-sm shadow-[0_0_10px_#f0c529]" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col h-full bg-[rgba(15,15,15,0.6)] backdrop-blur-md rounded-xl p-6 border border-[rgba(240,197,41,0.2)] transition-all duration-300 hover:-translate-y-2.5 hover:border-neon hover:shadow-[0_10px_25px_rgba(0,0,0,0.3),0_0_15px_rgba(240,197,41,0.2)]"
          >
            <h3 className="mb-3 text-xl font-bold text-white group-hover:text-neon transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-lg font-basis33 text-gray-400 mb-5 grow ">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-neon/10 text-neon border border-neon/30 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-[rgba(240,197,41,0.1)]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon text-sm font-medium transition-colors duration-300 flex items-center gap-2"
              >
                <GithubIcon />
                Code
              </a>

              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  <ExternalLinkIcon />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
