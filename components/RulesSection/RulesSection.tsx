'use client';

import { useState } from 'react';

const rules = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at elit in eros interdum accumsan et et nisi. Quisque dictum ullamcorper ornare. Etiam sit amet ullamcorper justo. Praesent lorem est, fermentum at sem at, consectetur consequat augue. Suspendisse et volutpat felis, et mattis quam. Cras hendrerit est ut diam rhoncus pretium. Ut lacus enim, scelerisque eget ligula ut, tincidunt malesuada ipsum. Ut mollis lectus eu leo ultrices dignissim. Nulla sed efficitur ligula. Quisque dictum nulla nec purus pretium, congue molestie dolor congue. Aliquam faucibus pharetra nisl ut auctor. Mauris tincidunt varius blandit. Duis quis dolor vel orci euismod sollicitudin. Curabitur vel egestas enim. Phasellus venenatis congue faucibus. Morbi id turpis in sapien consequat eleifend vel a diam.',
  'Phasellus mauris risus, condimentum at mi nec, ullamcorper fermentum quam. Mauris molestie quam id risus interdum pretium. Morbi congue ac ante in posuere. Integer at condimentum leo. Duis at tellus eu mi hendrerit auctor. Proin maximus mi mi, eget mattis leo varius a. Nam non eros quis arcu vestibulum ultrices.',
  'Duis in tortor ipsum. Vestibulum eleifend turpis nisi, quis pellentesque sapien pulvinar ac. In cursus accumsan est, et hendrerit magna eleifend et. Aenean lacinia nulla eu sem consequat interdum. Suspendisse mollis neque at nisi hendrerit egestas. Ut tempor malesuada lorem. Duis tincidunt volutpat elit, nec tempus ligula iaculis non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
];

export function RulesSection() {
  const [showRules, setshowRules] = useState(false);

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
          overflow-hidden duration-300 ease-in-out lg:duration-1000
          ${showRules ? 'max-h-[1000px] lg:max-h-[2000px]' : 'max-h-0'}`}
      >
        <ul
          className={`my-11 w-full flex-col items-center gap-6 px-5 text-xs ${
            showRules ? 'flex' : 'hidden'
          }`}
        >
          {rules.map((item, index) => (
            <li key={index}>
              <span>{`${index + 1}. ${item}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
