import React from 'react';

// This file is intentionally left empty to resolve a build conflict.
// The content for the root layout is now located in /src/app/layout.tsx.
export default function EmptyLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
