"use client";

import { useEffect, useRef, useState } from "react";

interface BinaryParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  speed: number;
  opacity: number;
  char: string;
  hue: number;
  reset: () => void;
  update: () => void;
  draw: () => void;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const particlesRef = useRef<BinaryParticle[]>([]);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const speedFactor = 0.6;
    const particleCount = 200;

    function resizeCanvas() {
      if (!canvas || !container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      initParticles();
    }

    function createParticle(): BinaryParticle {
      const particle = {
        canvas,
        size: 8 + Math.random() * 6,
        speed: 0.3 + Math.random() * 1.5,
        opacity: 0.5 + Math.random() * 0.5,
        char: Math.random() > 0.5 ? "0" : "1",
        hue: Math.random() * 30,
        x: Math.random() * (canvas?.width || 800),
        y: Math.random() * (canvas?.height || 600),
        vx: (Math.random() - 0.5) * 3 * speedFactor,
        vy: (Math.random() - 0.5) * 3 * speedFactor,

        reset() {
          if (!canvas) return;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 3 * speedFactor;
          particle.vy = (Math.random() - 0.5) * 3 * speedFactor;
        },

        update() {
          if (!canvas) return;
          particle.x += particle.vx * speedFactor;
          particle.y += particle.vy * speedFactor;

          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          if (Math.random() > 0.995) {
            particle.vx = (Math.random() - 0.5) * 3 * speedFactor;
            particle.vy = (Math.random() - 0.5) * 3 * speedFactor;
          }

          if (Math.random() > 0.99) {
            particle.char = Math.random() > 0.5 ? "0" : "1";
          }
        },

        draw() {
          if (!ctx) return;
          ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
          ctx.font = `${particle.size}px Arial, sans-serif`;
          ctx.fillText(particle.char, particle.x, particle.y);
        },
      };

      return particle;
    }

    function initParticles() {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle());
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameRef.current);
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="binary-canvas" />
    </div>
  );
}
