"use client";

import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface CardProps {
   title: string;
   description: string;
   demoUrl?: string;
   sourceCodeUrl?: string;
   images: string[];
   tags?: string[];
}

const Card = ({ title, description, demoUrl, sourceCodeUrl, images, tags }: CardProps) => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
   };

   const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
   };

   return (
      <article className="mb-6 sm:mb-8 rounded-lg overflow-hidden transition-all duration-300 border border-theme">
         {/* Project title and links */}
         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 border-b border-theme gap-2">
            {demoUrl && (
               <Link
                  href={demoUrl}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-base sm:text-lg md:text-xl font-medium link-color hover:link-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View demo of ${title}`}
               >
                  [{title} ↗]
               </Link>
            )}
            <div className='flex'>
               {sourceCodeUrl && (
                  <Link
                     href={sourceCodeUrl}
                     className="px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium link-color hover:link-hover"
                     target="_blank"
                     rel="noopener noreferrer"
                     title={`View source code of ${title}`}
                  >
                     [Source Code ↗]
                  </Link>
               )}
            </div>
         </div>

         {/* Image gallery */}
         <div className="relative">
            <div className="aspect-video relative">
               <Image
                  src={images[currentImageIndex]}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority={currentImageIndex === 0}
               />
            </div>

            {/* Navigation arrows - only show if multiple images */}
            {images.length > 1 && (
               <div className="absolute inset-0 flex justify-between items-center">
                  <button
                     onClick={prevImage}
                     className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 ml-1 sm:ml-2 transition-colors cursor-pointer"
                     aria-label="Previous image"
                  >
                     <MoveLeft size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button
                     onClick={nextImage}
                     className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 mr-1 sm:mr-2 transition-colors cursor-pointer"
                     aria-label="Next image"
                  >
                     <MoveRight size={16} className="sm:w-5 sm:h-5" />
                  </button>
               </div>
            )}

            {/* Image indicators */}
            {images.length > 1 && (
               <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {images.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                           }`}
                        aria-label={`Go to image ${index + 1}`}
                     />
                  ))}
               </div>
            )}
         </div>

         {/* Description */}
         <div className="p-3 sm:p-4 bg-background-secondary">
            <p className="text-sm sm:text-base text-primary">{description}</p>

            {/* Tags */}
            {tags && tags.length > 0 && (
               <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                  {tags.map((tag, index) => (
                     <span
                        key={index}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-theme/10 text-primary text-xs rounded-full"
                     >
                        {tag}
                     </span>
                  ))}
               </div>
            )}
         </div>
      </article>
   );
};

export default Card;
