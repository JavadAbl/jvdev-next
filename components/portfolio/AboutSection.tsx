"use client";

import { useEffect, useRef } from "react";
import AnimatedParagraph from "../animated-text";

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="section-hidden mb-20 ">
      <h2 className="text-3xl md:text-4xl font-mono font-bold inline-block neon-text">
        About Me
        <span className="block w-3/5 h-1 bg-neon mt-2.5 mb-8 rounded-sm shadow-[0_0_10px_#f0c529]" />
      </h2>

      <div className="bg-[rgba(30,30,30,0.23)] p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] relative overflow-hidden border border-[rgba(240,197,41,0.2)] backdrop-blur-xs font-basis33 font-normal text-xl text-justify text-[#e0e0e0]">
        <AnimatedParagraph
          text="Full-Stack Programmer with experience in designing and developing
          scalable web applications with a focus on Node.js, Nest.js, React.js,
          and Next.js. Has practical experience in developing Monolithic,
          Modular, and Microservices architectures, designing and implementing
          REST APIs and Event-Driven systems based on Redis and RabbitMQ."
          className="mb-4 "
          duration={2000}
        />

        <AnimatedParagraph
          text=" With over 4 years of experience in development, I have a strong
          foundation in both front-end and back-end technologies. I love
          learning new technologies and solving complex problems and turning
          ideas into reality through code. specially running js code on the
          server!"
          className="mb-4 "
          duration={2000}
        />

        <div className="mt-6 flex gap-8 flex-wrap">
          <div>
            <strong className="text-neon">Email:</strong>{" "}
            <span className="text-[#e0e0e0]">work.javadabl@gmail.com</span>
          </div>
          <div>
            <strong className="text-neon">Location:</strong>{" "}
            <span className="text-[#e0e0e0]">Iran - Tehran</span>
          </div>
          <div>
            <strong className="text-neon">Age:</strong>{" "}
            <span className="text-[#e0e0e0]">32</span>
          </div>
        </div>
      </div>
    </section>
  );
}
