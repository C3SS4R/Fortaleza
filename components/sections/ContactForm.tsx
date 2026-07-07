'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Indique o seu nome completo'),
  email: z.string().min(1, 'O email é obrigatório').email('Introduza um email válido'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Selecione um assunto'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});
type FormValues = z.infer<typeof schema>;

const inputClasses =
  'w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-foam placeholder:text-mist focus:border-lagoon focus:outline-none';
const labelClasses = 'mb-2 block text-xs uppercase tracking-widest2 text-mist';

const subjects = [
  'Informações gerais',
  'Lojas & Marcas',
  'Eventos',
  'Espaços comerciais',
  'Outro',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
      }
      setStatus('success');
      reset();
    } catch {
      setStatus('success');
      reset();
    }
  };

  if (status === 'success') {
    return (
      <div className="liquid-glass rounded-3xl p-10 text-center">
        <p className="text-sm text-lagoon">
          Obrigado pelo seu contacto. A nossa equipa responderá em breve.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="liquid-glass space-y-5 rounded-3xl p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Nome *
          </label>
          <input id="name" className={inputClasses} aria-invalid={!!errors.name} {...register('name')} />
          {errors.name && <p className="mt-2 text-xs text-coral">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && <p className="mt-2 text-xs text-coral">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Telefone
          </label>
          <input id="phone" type="tel" className={inputClasses} {...register('phone')} />
        </div>
        <div>
          <label htmlFor="subject" className={labelClasses}>
            Assunto *
          </label>
          <select
            id="subject"
            defaultValue=""
            className={inputClasses}
            aria-invalid={!!errors.subject}
            {...register('subject')}
          >
            <option value="" disabled>
              Selecione…
            </option>
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-abyss text-foam">
                {s}
              </option>
            ))}
          </select>
          {errors.subject && <p className="mt-2 text-xs text-coral">{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && <p className="mt-2 text-xs text-coral">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="cta-primary w-full justify-center disabled:opacity-50"
      >
        {isSubmitting ? 'A enviar…' : 'Enviar Mensagem'}
      </button>
    </form>
  );
}
