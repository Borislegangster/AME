import React from "react";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { StatsSection } from "../components/StatsSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { PromiseSection } from "../components/PromiseSection";
import { FaqSection } from "../components/FaqSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { NewsletterSection } from "../components/NewsletterSection";
export function Home() {
  return ( 
    /* Page d'acceuil */
    <div>
      <HeroSection />
      <FeaturesSection />
      <ExperienceSection />
      <StatsSection />
      <ServicesSection />
      <ProjectShowcase />
      <PromiseSection />
      <FaqSection />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
}