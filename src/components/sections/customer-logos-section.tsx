"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const logos = [
  { src: "https://placehold.co/150x60.png?text=CompanyA", alt: "Company A Logo", hint: "logo company" },
  { src: "https://placehold.co/150x60.png?text=CompanyB", alt: "Company B Logo", hint: "logo brand" },
  { src: "https://placehold.co/150x60.png?text=CompanyC", alt: "Company C Logo", hint: "logo corporate" },
  { src: "https://placehold.co/150x60.png?text=CompanyD", alt: "Company D Logo", hint: "logo tech" },
  { src: "https://placehold.co/150x60.png?text=CompanyE", alt: "Company E Logo", hint: "logo startup" },
];

export function CustomerLogosSection() {
  return (
    <motion.section
      id="customers"
      className="py-16 sm:py-24 bg-background"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby="customer-logos-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          id="customer-logos-heading" 
          className="text-2xl font-semibold text-center text-foreground mb-4"
          variants={fadeIn("up", 0.1)}
        >
          Trusted by leading companies
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12"
          variants={fadeIn("up", 0.2)}
        >
          Join innovative teams using Allowance to manage their finances effectively.
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * index + 0.3)}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                data-ai-hint={logo.hint}
                width={150}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
