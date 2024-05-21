import Link from 'next/link';

export function Navigation() {
  return (
    <nav className='absolute left-0 top-0 z-50 flex w-full justify-between gap-6 px-6 py-4 text-xs uppercase md:justify-end md:px-8 md:py-5'>
      <Link className='md:grow' href='/#nagrody'>
        Nagrody
      </Link>
      <Link href='/#regulamin'>Regulamin</Link>
      <Link href='https://www.instagram.com/yslbeauty/' target='_blank'>
        Instagram
      </Link>
    </nav>
  );
}
