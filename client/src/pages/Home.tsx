import React from "react";
import { SEO } from '../components/SEO';
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
      <SEO title="Accueil" description="AME Construction, expert en construction et rénovation. Découvrez nos services de construction, rénovation et architecture pour vos projets résidentiels et commerciaux." image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" />
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