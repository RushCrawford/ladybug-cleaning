import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full text-black z-10 flex items-center justify-between'>
      {/* <nav className='conainer relative flex flex-wrap items-center justify-between mx-auto p-8'></nav> */}
      <div className='flex items-center'>
        <img 
            src="https://www.transparentpng.com/download/ladybug/ZeaJXD-ladybug-icon.png"
            width={100}
            />
          <Link href='/' className='font-bold text-3xl'>Ladybug Cleaning</Link>
      </div>
      <div className='space-x-4 text-xl'>
        <Link href='/home-cleaning-services/house-cleaning'>House Cleaning</Link>
        <Link href='/home-cleaning-services/deep-cleaning'>Deep Cleaning</Link>
        <Link href='/about'>About Me</Link>
      </div>
    </div>
  )
}