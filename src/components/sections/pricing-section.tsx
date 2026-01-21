"use client";

import { Check, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';

const pricingPlans = [
  {
    title: 'Basic Website',
    price: 'N50k',
    description: 'A professional landing page or small brochure site.',
    features: [
      '1-3 Pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO Setup',
    ],
    from: false,
  },
  {
    title: 'Pro Website',
    price: 'N150k',
    description: 'A complex site with a blog or CMS integration.',
    features: [
      'Up to 10 Pages',
      'Content Management System (CMS)',
      'Blog Integration',
      'Advanced SEO',
    ],
    from: false,
    popular: true,
  },
  {
    title: 'Web App / Dashboard',
    price: 'N300k',
    description: 'Custom web applications, SaaS, or internal dashboards.',
    features: [
      'User Authentication',
      'Database Integration',
      'Custom Functionality',
      'Scalable Architecture',
    ],
    from: true,
  },
  {
    title: 'Mobile App',
    price: 'N700k',
    description: 'Native or cross-platform mobile apps for iOS & Android.',
    features: [
      'For iOS & Android',
      'App Store Submission',
      'Push Notifications',
      'API Integration',
    ],
    from: true,
  },
];


export function PricingSection() {
  return (
    <motion.section
      id="pricing"
      className="py-16 sm:py-24 bg-secondary"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div key={plan.title} variants={fadeIn('up', 0.2 + index * 0.05)}>
              <Card className={`flex flex-col h-full relative overflow-hidden ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}>
                 {plan.popular && (
                  <div className="absolute top-0 -right-12 text-center text-sm font-semibold text-primary-foreground bg-primary py-1 w-48 transform rotate-45">
                    Popular
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription className="pt-1 h-12">{plan.description}</CardDescription>
                   <div className="flex items-baseline pt-4">
                     <p className="text-4xl font-bold tracking-tight">{plan.price}</p>
                     {plan.from && <span className="text-sm text-muted-foreground ml-1">/ starting from</span>}
                   </div>
                </CardHeader>
                <CardContent className="flex-grow">
                   <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
