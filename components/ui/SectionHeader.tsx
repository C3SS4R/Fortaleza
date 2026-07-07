import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn(align === 'center' ? 'mx-auto max-w-2xl text-center' : '', className)}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
    </Reveal>
  );
}
