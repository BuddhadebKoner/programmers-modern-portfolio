import GitHubProfile from '@/components/GitHubProfile';
import LickyCodeBackground from '@/components/LickyCodeBackground';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Buddhadeb Koner | FullStack Web Developer",
  description: "Welcome to the personal portfolio of Buddhadeb Koner, a creative FullStack Web Developer producing great software.",
};

const Page = () => {
  return (
    <main className="licky-code-bg min-h-screen w-full flex flex-col justify-center items-center gap-6 md:flex-row md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-10 relative">

      <LickyCodeBackground variant="home" />

      <div className='w-full md:w-1/2 max-w-2xl flex flex-col gap-4 text-center md:text-left'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-highlight font-mono'>
          Buddhadeb Koner
        </h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-mono'>
          FullStack
        </h1>
        <p className='text-base sm:text-lg md:text-xl text-highlight-secondary font-mono'>
          Web Developer
        </p>
        <p className='text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 font-mono'>
          I&apos;m Buddhadeb Koner, a programmer who aims to produce and share{" "}
          <Link
            href="/works"
            className='link-color hover:link-hover ml-1 whitespace-nowrap'
          >
            [great software ↗]
          </Link>{" "}
          with the world.
        </p>
        <div className="flex flex-col gap-2 justify-center md:justify-start items-center md:items-start">
          <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover font-mono">
            - [Know About me ↗]
          </Link>
          <Link href="/works" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover font-mono">
            - [Showcase ↗]
          </Link>
          <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover font-mono">
            - [Get in touch ↗]
          </Link>
          <Link href="/skill" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover font-mono">
            - [What i know ! ↗]
          </Link>
          <Link href="/story" className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover font-mono">
            - [Know my story ↗]
          </Link>
        </div>
      </div>
      <div className='w-full md:w-1/2 max-w-2xl flex flex-col justify-center items-center gap-5'>
        <GitHubProfile />
      </div>
    </main>
  );
};
export default Page;