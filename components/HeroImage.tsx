"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeProvider';
import Image from 'next/image';

const HeroImage = () => {
   const { theme } = useTheme();
   const [effectiveTheme, setEffectiveTheme] = useState<string>('light');

   useEffect(() => {
      const determineEffectiveTheme = () => {
         if (theme === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
         }
         return theme || 'light';
      };

      setEffectiveTheme(determineEffectiveTheme());

      if (theme === 'system') {
         const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
         const handleChange = () => setEffectiveTheme(mediaQuery.matches ? 'dark' : 'light');

         mediaQuery.addEventListener('change', handleChange);
         return () => mediaQuery.removeEventListener('change', handleChange);
      }
   }, [theme]);

   return (
      <>
         <div className='relative w-full max-w-md h-fit sm:h-80 md:h-96'>
            {
               effectiveTheme === 'light' ? (
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