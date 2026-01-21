import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="0" y="24" fontFamily="var(--font-geist-sans), Arial, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(var(--primary))" className="transition-colors duration-300">
        MJGOS
      </text>
    </svg>
  );
}
