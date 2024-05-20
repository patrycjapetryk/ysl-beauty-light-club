'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SliderBackground } from './SliderBackground';
import { SliderTextAnimation } from './SliderTextAnimation';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Slider() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to('.ysl-background', {
        y: 600,
        scrollTrigger: {
          trigger: '.ysl-background',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.2,
        },
      });

      gsap.to('.ysl-triangle', {
        y: 100,
        scrollTrigger: {
          trigger: '.ysl-triangle',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      });

      gsap.to('.ysl-logo', {
        y: 10,
        scrollTrigger: {
          trigger: '.ysl-logo',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.ysl-heart', {
        y: 100,
        scale: 0.8,
        scrollTrigger: {
          trigger: '.ysl-heart',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.8,
        },
      });
    },
    { scope: container },
  );

  return (
    <section className='relative min-h-screen w-full' ref={container}>
      <SliderBackground />

      <div className='ysl-logo fixed left-0 top-0 flex h-screen w-full items-start justify-center'>
        <div className='relative h-[120px] w-[400px] max-w-[60%] sm:mt-6'>
          <Image
            className='object-contain'
            src='./images/ysl-logo.svg'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            alt='YSL Beauty Light Club'
          />
        </div>
      </div>
      <div className='ysl-heart absolute left-0 top-0 flex h-screen w-full items-center justify-center'>
        <div className=' relative mt-6 h-[560px] w-[560px] max-w-[90%] md:h-[660px] md:w-[660px]'>
          <Image
            className='object-contain'
            src='./images/ysl-heart.svg'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            alt='YSL Beauty Light Club'
            priority
          />
        </div>
      </div>

      <SliderTextAnimation />
    </section>
  );
}
