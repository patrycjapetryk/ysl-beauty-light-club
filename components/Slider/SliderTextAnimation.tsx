export function SliderTextAnimation() {
  return (
    <div className='3xl:h-10 absolute bottom-0 left-0 h-9 w-full overflow-hidden bg-black'>
      <div className='grid-cols-18 animate-carousel xs:w-[600%] grid h-[90%] w-[800%] sm:w-[400%] lg:w-[300%] xl:w-[200%]'>
        {[...Array(18)].map((_, i) => (
          <span
            className='flex h-full items-center justify-center text-xs 2xl:text-sm '
            key={i}
          >
            KONKURS YSL BEAUTY
          </span>
        ))}
      </div>
    </div>
  );
}
