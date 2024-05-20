import { Header } from '@/components/Header/Header';
import { Slider } from '@/components/Slider/Slider';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden text-center'>
      <Slider />
      <Header />
    </main>
  );
}
