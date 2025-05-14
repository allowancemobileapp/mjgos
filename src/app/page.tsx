// This page can be used for a different root experience or redirect.
// For now, the main landing page is at / (implicitly served by (landing)/page.tsx).
// If you need a distinct root page different from the landing, implement it here.
// Otherwise, this file can be minimal or redirect.

import LandingPage from "@/app/(landing)/page";

export default function Home() {
  return <LandingPage />;
}
