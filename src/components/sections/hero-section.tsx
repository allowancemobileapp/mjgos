"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { fadeIn, staggerContainer } from "@/lib/motion";

const websites = [
  {
    imageUrl: "https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/MJGOS/Screenshot%202026-01-21%20042202.png",
    url: "https://classrep.vercel.app/",
    alt: "ClassRep website screenshot"
  },
  {
    imageUrl: "https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/MJGOS/Screenshot%202026-01-21%20042229.png",
    url: "https://cccchigbolawfirm.vercel.app/",
    alt: "CCC Chigbo Law Firm website screenshot"
  },
  {
    imageUrl: "https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/MJGOS/Screenshot%202026-01-21%20042348.png",
    url: "https://interunibash.vercel.app/",
    alt: "Interunibash website screenshot"
  },
  {
    imageUrl: "https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/MJGOS/Screenshot%202026-01-21%20042406.png",
    url: "https://mjlt.vercel.app/",
    alt: "MJLT website screenshot"
  }
];


export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle email submission logic
    console.log("Email submitted:", event.currentTarget.email.value);
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-background to-secondary dark:from-background dark:to-secondary/50"
      variants={staggerContainer()}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="text-center md:text-left" variants={fadeIn("right", 0.2)}>
          <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-primary">
              MJGOS
            </span>
            <br />
            Simplicity & Functionality.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Mr James Group of SAAS builds high-quality, functional software solutions. From web and mobile apps to stunning websites, we bring your vision to life.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0 mb-8">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-base"
              aria-label="Email address for a project quote"
            />
            <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground sm:w-auto w-full">
              Start Your Project
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Let's build something great together.
          </p>
        </motion.div>

        <motion.div className="relative" variants={fadeIn("left", 0.4)}>
           <Carousel
            plugins={[plugin.current]}
            className="w-full rounded-xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-300"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-0">
              {websites.map((site, index) => (
                <CarouselItem key={index} className="pl-0">
                  <Link href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.alt}`}>
                    <div className="aspect-video">
                      <Image
                        src={site.imageUrl}
                        alt={site.alt}
                        width={600}
                        height={400}
                        priority={index === 0}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
           <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10 hidden md:block"></div>
           <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10 hidden md:block"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
