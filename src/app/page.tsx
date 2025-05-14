// This page can be used for a different root experience or redirect.
// For now, the main landing page is at / (implicitly served by (landing)/page.tsx).
// If you need a distinct root page different from the landing, implement it here.
// Otherwise, this file can be minimal or redirect.

// For this exercise, assuming (landing)/page.tsx is the default "/"
// we can keep this as is, or redirect.
// Keeping it minimal:
export default function Home() {
  return null; // Or a redirect component if preferred
}
