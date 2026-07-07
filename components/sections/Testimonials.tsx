import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="bg-abyss px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          label="Testemunhos"
          title="Quem vem,"
          highlight="volta"
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
