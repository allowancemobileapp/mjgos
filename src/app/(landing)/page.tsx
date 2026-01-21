"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { CustomerLogosSection } from "@/components/sections/customer-logos-section";
import type { Feature } from "@/types";
import { AppWindow, Smartphone, Globe, Zap } from "lucide-react";

// Metadata is in layout.tsx

const features: Feature[] = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "From stunning marketing sites to complex e-commerce platforms, we create websites that look great and perform even better.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of a modern website",
    imageHint: "website design",
    price: "N50k",
    priceFrom: true,
  },
  {
    icon: AppWindow,
    title: "Custom Web Applications",
    description: "We build powerful, scalable web applications tailored to your specific business needs, delivering seamless user experiences.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of a custom web application",
    imageHint: "dashboard web app",
    price: "N300k",
    priceFrom: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Engage your users on the go with beautiful and intuitive mobile apps for both iOS and Android platforms.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of a mobile application",
    imageHint: "mobile app interface",
    price: "N700k",
    priceFrom: true,
  },
  {
    icon: Zap,
    title: "Simplicity and Functionality",
    description: "Our core philosophy. We focus on creating clean, intuitive designs that are highly functional and easy to use.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Illustration of simplicity and function",
    imageHint: "clean minimal"
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
    </>
  );
}
