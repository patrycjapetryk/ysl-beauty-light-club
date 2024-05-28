import { AboutSection } from '@/components/AboutSection/AboutSection';
import { Header } from '@/components/Header/Header';
import { RulesSection } from '@/components/RulesSection/RulesSection';
import { Slider } from '@/components/Slider/Slider';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden text-center'>
      <Slider />

      <div className='relative mx-auto flex w-full flex-col items-center bg-black pt-20 sm:pt-32 lg:max-w-[950px]'>
        <Header />
        <AboutSection />
        <RulesSection />
      </div>
    </main>
  );
}
