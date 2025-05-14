"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeIn, staggerContainer } from "@/lib/motion";

export function HeroSection() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="text-center md:text-left" variants={fadeIn("right", 0.2)}>
          <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Manage Your Allowance
            </span>
            <br />
            The Smart Way.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Allowance is the modern solution for tracking, saving, and understanding your finances. Get started today and take control of your money.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0 mb-8">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-base"
              aria-label="Email address for sign up"
            />
            <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground sm:w-auto w-full">
              Get Early Access
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Join thousands already simplifying their finances.
          </p>
        </motion.div>

        <motion.div className="relative" variants={fadeIn("left", 0.4)}>
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Allowance app mockup"
              data-ai-hint="app interface finance"
              width={600}
              height={400}
              priority
              className="object-cover w-full h-full"
            />
          </div>
           <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10 hidden md:block"></div>
           <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10 hidden md:block"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
