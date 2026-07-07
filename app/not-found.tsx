import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-abyss px-6 text-center">
      <span className="wordmark text-7xl text-transparent [-webkit-text-stroke:1.5px_#38B2C6] sm:text-9xl">
        404
      </span>
      <h1 className="mt-6 font-display text-2xl font-bold text-foam">Maré vazia por aqui</h1>
      <p className="mt-3 max-w-sm text-sm text-mist">
        A página que procura não existe ou foi movida. Volte ao início e siga a linha do horizonte.
      </p>
      <Link href="/" className="cta-primary mt-8">
        Voltar ao início
      </Link>
    </section>
  );
}
