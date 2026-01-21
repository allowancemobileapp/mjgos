"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FeatureSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageHint?: string;
  reverse?: boolean;
  isDark?: boolean;
  price?: string;
  priceFrom?: boolean;
}

export function FeatureSection({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt,
  imageHint,
  reverse = false,
  isDark = false,
  price,
  priceFrom,
}: FeatureSectionProps) {
  return (
    <motion.section
      className={cn(
        "py-16 sm:py-24",
        isDark ? "bg-secondary text-secondary-foreground" : "bg-background text-foreground"
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn("up", 0.2)}
      aria-labelledby={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center",
            reverse ? "md:grid-flow-col-dense" : ""
          )}
        >
          <div className={cn(reverse ? "md:col-start-2" : "")}>
            <div className="mb-4 inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-lg">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h2 id={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-3xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {description}
            </p>
            {price && (
              <div className="mb-6">
                <p className="text-2xl font-bold text-primary">
                  {price}
                  {priceFrom && <span className="text-sm font-normal text-muted-foreground ml-1">/ starting from</span>}
                </p>
              </div>
            )}
            <Button asChild>
                <Link href={`https://wa.me/2349135067590?text=I'm%20interested%20in%20your%20'${encodeURIComponent(title)}'%20service.`} target="_blank">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
          <div className={cn("relative mt-10 md:mt-0", reverse ? "md:col-start-1" : "")}>
            <motion.div 
              className="aspect-[16/10] rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px -5px hsla(var(--primary) / 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                data-ai-hint={imageHint}
                width={500}
                height={312} // 500 * (10/16)
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
