"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { CustomerLogosSection } from "@/components/sections/customer-logos-section";
import type { Feature } from "@/types";
import { AppWindow, Smartphone, Globe, Zap } from "lucide-react";

const features: Feature[] = [
  {
    icon: AppWindow,
    title: "Custom Web Applications",
    description: "We build powerful, scalable web applications tailored to your specific business needs, delivering seamless user experiences.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of a custom web application",
    imageHint: "dashboard web app"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Engage your users on the go with beautiful and intuitive mobile apps for both iOS and Android platforms.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of a mobile application",
    imageHint: "mobile app interface"
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "From stunning marketing sites to complex e-commerce platforms, we create websites that look great and perform even better.",
    imageSrc: "https://placehold.co/500x312.png",
    imageAlt: "Screenshot of a modern website",
    imageHint: "website design"
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
      <section id="pricing" className="py-16 sm:py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground">Flexible plans for businesses of all sizes. Contact us for a custom quote.</p>
        </div>
      </section>
      <section id="contact" className="py-16 sm:py-24 bg-secondary text-center">
         <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">Ready to start your project? Get in touch with our team.</p>
        </div>
      </section>
    </>
  );
}
