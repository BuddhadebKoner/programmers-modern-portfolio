"use client"

import React from 'react'
import { useTheme } from './ThemeProvider';
import Image from 'next/image';

const HeroImage = () => {
   const { theme } = useTheme();

   return (
      <>
         <div className='relative w-full max-w-md h-fit sm:h-80 md:h-96'>
            {
               theme === 'light' ? (
                  <Image
                     src="/herologo_light.svg"
                     alt="Hero"
                     fill
                     priority
                     className="object-contain"
                  />
               ) : (
                  <Image
                     src="/herologo.svg"
                     alt="Hero"
                     fill
                     priority
                     className="object-contain"
                  />
               )
            }
         </div>
      </>
   )
}

export default HeroImage