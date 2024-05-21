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
      gsap
        .timeline({
          defaults: {
            duration: 2,
            ease: 'back.out(1.7)',
          },
        })
        .to('.ysl-heart-intro', {
          scale: 1,
          y: 28,
        });

      gsap
        .timeline({
          defaults: {
            duration: 0.5,
            ease: 'power3.out',
          },
        })
        .to('.ysl-heart-intro', {
          opacity: 1,
        });

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
        y: 60,
        scrollTrigger: {
          trigger: '.ysl-triangle',
          start: 'top -150px',
          end: 'bottom top',
          scrub: 0.7,
        },
      });

      gsap.to('.ysl-logo', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.ysl-logo',
          start: '20% top',
          end: 'bottom 50%',
          scrub: 1,
        },
      });

      gsap.to('.ysl-heart', {
        y: 85,
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
    <section
      className='relative min-h-dvh w-full overflow-hidden'
      ref={container}
    >
      <SliderBackground />

      <div className='ysl-logo fixed left-0 top-0 flex h-dvh w-full items-start justify-center'>
        <div className='xs:mt-16 relative mt-10 h-[120px] w-[400px] max-w-[60%] sm:max-w-[40%] md:mt-10 lg:mt-8 lg:max-w-[23%]'>
          <Image
            className='object-contain'
            src='./images/ysl-logo.svg'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            alt='YSL Beauty Logo'
          />
        </div>
      </div>
      <div className='ysl-heart absolute left-0 top-0 flex h-dvh w-full items-center justify-center'>
        <div className='ysl-heart-intro relative mt-6 h-[560px] w-[560px] max-w-[90%] scale-90 opacity-0 md:h-[610px] md:w-[610px]'>
          <Image
            className='object-contain'
            src='/images/ysl-heart.png'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            alt='YSL Beauty Light Club Logo'
            priority
          />
        </div>
      </div>

      <SliderTextAnimation />
    </section>
  );
}
