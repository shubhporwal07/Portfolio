import React from "react";
import { Hero } from "@/components/hero/Hero";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { PositionAbout } from "@/components/sections/PositionAbout";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { SelectedProjects } from "@/components/projects/SelectedProjects";
import { SkillsToolkit } from "@/components/skills/SkillsToolkit";
import { ExperienceSection } from "@/components/timeline/ExperienceSection";
import { AchievementsCertificates } from "@/components/certificates/AchievementsCertificates";
import { EducationSection } from "@/components/education/EducationSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col w-full">
      {/* 01 POSITION / HERO */}
      <Hero />

      {/* 02 WHAT I BUILD */}
      <WhatIBuild />

      {/* 03 POSITION / PHILOSOPHY & SIGNALS */}
      <PositionAbout />

      {/* 04 METHODOLOGY: HOW I BUILD */}
      <HowIBuild />

      {/* 03 SELECTED WORK / FLAGSHIP PROJECTS */}
      <SelectedProjects />

      {/* 04 TOOLKIT / TECHNICAL SKILLS */}
      <SkillsToolkit />

      {/* 05 EXPERIENCE & ISRO HACKATHON */}
      <ExperienceSection />

      {/* CREDENTIALS & CERTIFICATIONS */}
      <AchievementsCertificates />

      {/* 06 EDUCATION & SCHOLARSHIP */}
      <EducationSection />

      {/* 07 CONTACT / CALL TO ACTION */}
      <ContactSection />
    </main>
  );
}
