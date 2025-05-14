"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { CustomerLogosSection } from "@/components/sections/customer-logos-section";
import type { Feature } from "@/types";
import { BarChart, DollarSign, Users, Zap } from "lucide-react";

// Metadata has been moved to src/app/(landing)/layout.tsx

const features: Feature[] = [
  {
    icon: BarChart,
    title: "Insightful Reports",
    description: "Gain a clear understanding of your spending habits with detailed, easy-to-read reports. Visualize where your money goes and make smarter financial decisions.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of insightful financial reports",
    imageHint: "charts graphs finance"
  },
  {
    icon: DollarSign,
    title: "Effortless Tracking",
    description: "Log your income and expenses in seconds. Our intuitive interface makes it simple to stay on top of your finances, anytime, anywhere.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of effortless expense tracking",
    imageHint: "mobile app list"
  },
  {
    icon: Zap,
    title: "Budget Automation",
    description: "Set up recurring allowances and bills. Let Allowance handle the repetitive tasks so you can focus on your financial goals.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of budget automation feature",
    imageHint: "calendar automation"
  },
  {
    icon: Users,
    title: "Shared Accounts (Coming Soon)",
    description: "Collaborate on finances with family or partners. Manage shared budgets and track collective spendingGoals with ease.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of shared accounts feature",
    imageHint: "people collaboration"
  },
];

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <div id="features">
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.title}
            {...feature}
            reverse={index % 2 !== 0}
            isDark={index % 2 !== 0} // Alternating backgrounds
          />
        ))}
      </div>
      <CustomerLogosSection />
      {/* Placeholder for Pricing and Contact sections if needed */}
      <section id="pricing" className="py-16 sm:py-24 bg-background text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground">Coming Soon! Simple and transparent plans.</p>
        </div>
      </section>
      <section id="contact" className="py-16 sm:py-24 bg-secondary text-center">
         <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">Get in touch with the Allowance team.</p>
        </div>
      </section>
    </>
  );
}
