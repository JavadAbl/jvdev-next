"use client";

import Sidebar from "@/components/portfolio/Sidebar";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import SubSkillsSection from "@/components/portfolio/SubSkillsSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="w-[85%] ml-[15%] max-lg:w-full max-lg:ml-0 max-lg:pt-20 max-lg:px-5 max-lg:pb-5 relative bg-[#121212] lg:max-w-[1100px]">
        <ParticleBackground />

        <div className="relative z-1">
          <HeroSection />
          <div className="py-16 lg:px-16">
            <AboutSection />
            <ResumeSection />
            <SkillsSection />
            <SubSkillsSection />
            <PortfolioSection />
            <ContactSection />
          </div>

          <footer className="neon-text text-center py-8 text-sm">
            &copy; 2026 Mohammad Javad Abolhasani Far. All Rights Reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}
