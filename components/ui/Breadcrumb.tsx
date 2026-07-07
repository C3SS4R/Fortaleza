import Link from 'next/link';

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest2 text-mist">
      <Link href="/" className="transition-colors hover:text-lagoon">
        Início
      </Link>
      <span className="mx-2 text-mist/50">/</span>
      <span className="text-foam">{current}</span>
    </nav>
  );
}
