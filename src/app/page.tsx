"use client";

import {
  Brush,
  Component,
  Smartphone,
  Server,
} from "lucide-react";
import { CustomerLogosSection } from "@/components/sections/customer-logos-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { HeroSection } from "@/components/sections/hero-section";
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    icon: Brush,
    title: "Website Design & Development",
    description: "Visually stunning and highly functional websites that captivate your audience and drive engagement. From sleek landing pages to complex corporate sites.",
    imageSrc: "https://placehold.co/500x312.png?text=Website",
    imageAlt: "A stunning website design",
    imageHint: "website design",
    price: "N50k",
    priceFrom: false,
  },
  {
    icon: Component,
    title: "Custom Web Applications",
    description: "Powerful, scalable, and secure web applications tailored to your specific business needs. We build robust solutions that streamline your operations and delight your users.",
    imageSrc: "https://placehold.co/500x312.png?text=Web+App",
    imageAlt: "A custom web application interface",
    imageHint: "web application",
    price: "N500k",
    priceFrom: true,
  },
  {
    icon: Server,
    title: "Admin Dashboards",
    description: "Private and secure admin panels to manage your public web applications. These are web apps used by a smaller group and not openly accessible to the general public.",
    imageSrc: "https://placehold.co/500x312.png?text=Dashboard",
    imageAlt: "An admin dashboard interface",
    imageHint: "admin dashboard",
    price: "N300k",
    priceFrom: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Engaging and intuitive mobile apps for iOS and Android. We handle the entire lifecycle from concept to launch, ensuring a seamless user experience.",
    imageSrc: "https://placehold.co/500x312.png?text=Mobile+App",
    imageAlt: "A mobile app interface",
    imageHint: "mobile app",
    price: "N700k",
    priceFrom: true,
  },
];


export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <CustomerLogosSection />
      <div id="features" className="scroll-mt-20">
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            imageHint={feature.imageHint}
            price={feature.price}
            priceFrom={feature.priceFrom}
            reverse={index % 2 !== 0}
            isDark={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
}
