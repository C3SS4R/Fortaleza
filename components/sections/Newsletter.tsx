'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Reveal from '@/components/ui/Reveal';

const schema = z.object({
  email: z.string().min(1, 'O email é obrigatório').email('Introduza um email válido'),
});
type FormValues = z.infer<typeof schema>;

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="newsletter" className="bg-abyss px-6 pb-24 lg:px-12 lg:pb-32">
      <div className="mx-auto max-w-content">
        <Reveal variant="scale">
          <div className="liquid-glass relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-12">
            <div className="horizon-line absolute inset-x-0 top-0 opacity-50" />
            <span className="section-label justify-center">Newsletter</span>
            <h2 className="section-title mx-auto max-w-xl">
              Nunca perca a agenda da <span>baía</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-mist">
              Eventos, novas lojas e promoções — direto no seu email, sem spam.
            </p>

            {submitted ? (
              <p className="mx-auto mt-8 max-w-md text-sm text-lagoon">
                Subscrição registada. Até breve na Fortaleza.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1 text-left">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="o.seu@email.com"
                    aria-invalid={!!errors.email}
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-foam placeholder:text-mist focus:border-lagoon focus:outline-none"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-coral">{errors.email.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-primary justify-center disabled:opacity-50"
                >
                  {isSubmitting ? 'A enviar…' : 'Subscrever'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
