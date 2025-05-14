import type { Metadata } from 'next';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: 'Allowance - Smart Financial Management',
  description: 'Take control of your finances with Allowance. Easy tracking, insightful reports, and secure management for your personal allowance and expenses.',
  keywords: ['finance', 'allowance', 'budget', 'money management', 'personal finance'],
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
