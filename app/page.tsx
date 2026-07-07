import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Amenities from '@/components/sections/Amenities';
import Stores from '@/components/sections/Stores';
import Events from '@/components/sections/Events';
import Testimonials from '@/components/sections/Testimonials';
import Location from '@/components/sections/Location';
import Newsletter from '@/components/sections/Newsletter';
import WaveDivider from '@/components/ui/WaveDivider';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WaveDivider color="#04202D" />
      <Amenities />
      <Stores preview />
      <WaveDivider color="#04202D" />
      <Events />
      <Testimonials />
      <WaveDivider color="#04202D" />
      <Location />
      <Newsletter />
    </>
  );
}
