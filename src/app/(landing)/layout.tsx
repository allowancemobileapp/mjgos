import type { Metadata } from 'next';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: 'MJGOS - Custom Software Solutions',
  description: 'We build high-quality web apps, websites, and mobile apps with a focus on simplicity and functionality.',
  keywords: ['saas', 'web development', 'mobile apps', 'software solutions', 'custom software'],
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[60px] md:pt-[68px]"> {/* Adjust pt based on Navbar height */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
