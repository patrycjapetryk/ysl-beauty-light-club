import Image from 'next/image';

export function SliderBackground() {
  return (
    <>
      <div className='bg-ysl-pattern ysl-background absolute left-0 top-0 h-[200vh] w-full bg-cover'></div>
      <div className='ysl-triangle absolute left-[-50%] right-[-50%] top-[-50%] h-screen md:top-[-30%]'>
        <Image
          className='object-contain object-top'
          src='./images/ysl-triangle.svg'
          fill
          sizes='(max-width: 768px) 200vw, 100vw'
          alt=''
        />
      </div>
    </>
  );
}
