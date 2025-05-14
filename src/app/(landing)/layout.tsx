import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
