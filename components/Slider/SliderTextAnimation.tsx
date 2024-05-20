export function SliderTextAnimation() {
  return (
    <div className='absolute bottom-0 left-0 h-9 w-full overflow-hidden bg-black'>
      <div className='grid-cols-18 animate-carousel grid h-[90%] w-[800%] md:w-[400%] 2xl:w-[200%]'>
        {[...Array(18)].map((_, i) => (
          <span
            className='xs:text-sm flex h-full items-center justify-center text-xs'
            key={i}
          >
            KONKURS YSL BEAUTY
          </span>
        ))}
      </div>
    </div>
  );
}
