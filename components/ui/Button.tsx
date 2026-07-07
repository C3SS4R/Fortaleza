import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonProps) {
  const isExternal = href.startsWith('http');
  const base =
    'group inline-flex items-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest2 transition-all duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-ocean to-abyss text-foam hover:from-ocean-light hover:to-ocean'
      : 'border border-coral text-coral hover:bg-coral hover:text-abyss';

  const content = (
    <>
      {children}
      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {content}
    </Link>
  );
}
