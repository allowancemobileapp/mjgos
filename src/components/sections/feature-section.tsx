"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";

import { fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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

const services = [
  'Website Design & Development',
  'Custom Web Applications',
  'Mobile App Development',
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
});


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
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      service: title,
    },
  });

  React.useEffect(() => {
    form.reset({ name: "", service: title });
  }, [title, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `Hello, my name is ${values.name}. I'm interested in your '${values.service}' service.`;
    const whatsappUrl = `https://wa.me/2349135067590?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setOpen(false);
    form.reset();
    toast({
      title: "Redirecting to WhatsApp...",
      description: "Please complete your request on WhatsApp.",
    });
  }

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
            {price && (
               <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Get a Quote</DialogTitle>
                    <DialogDescription>
                      Fill in the details below. You'll be redirected to WhatsApp to send the message.
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">
                        Send on WhatsApp
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            )}
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
