'use client';

import { useState } from 'react';

import { useElementDimensions } from '@/hooks/useElementDimensions';
import { RulesText } from './RulesText';

export function RulesSection() {
  const [showRules, setshowRules] = useState(false);
  const { dimensions, ref } = useElementDimensions();
  const { height } = dimensions ?? {};

  const handleTitleClick = () => {
    setshowRules(!showRules);
  };

  return (
    <section className='w-full' id='regulamin'>
      <h2 className='text-xl uppercase'>Regulamin konkursu</h2>
      <button className='text-xs uppercase' onClick={handleTitleClick}>
        {showRules ? 'Zwiń' : 'Rozwiń'}
      </button>

      <div
        className={`
          overflow-hidden duration-1000 ease-in-out
          `}
        style={{ maxHeight: showRules && height ? `${height}px` : 0 }}
      >
        <div ref={ref}>
          <RulesText />
        </div>
      </div>
    </section>
  );
}
