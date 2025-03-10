import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className="min-h-screen px-4 py-12 sm:py-16 md:py-24 bg-background text-main-text flex flex-col justify-center items-center gap-6 md:flex-row md:gap-12 lg:gap-16">
      <div className='w-full md:w-1/2 flex justify-center'>
        <div className='relative w-full max-w-md h-64 sm:h-80 md:h-96'>
          <Image
            src="/herologo.svg"
            alt="Hero"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
      <div className='w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-highlight'>
          Buddhadeb Koner
        </h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary'>
          FullStack
        </h1>
        <p className='text-base sm:text-lg md:text-xl text-highlight-secondary'>
          Web Developer
        </p>
        <p className='text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0'>
          I'm IroncladDev, a Texas-based programmer who aims to produce and share{" "}
          <Link
            href="/works"
            className='link-color hover:link-hover ml-1 whitespace-nowrap'
          >
            [great software ↗]
          </Link>
          {" "}with the world
        </p>
        <div className="flex flex-col justify-center  items-baseline space-x-4">
          <Link href="/story" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover">
            [STORY ↗]
          </Link>
          <Link href="/works" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover">
            [WORKS ↗]
          </Link>
          <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover">
            [CONTSCT ↗]
          </Link>
          <Link href="/skill" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover">
            [SKILLS ↗]
          </Link>
          <Link href="/showcase" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover">
            [SHOWCASE ↗]
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Page