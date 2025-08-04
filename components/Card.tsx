"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CardProps {
   title: string;
   description: string;
   demoUrl?: string;
   sourceCodeUrl?: string;
   images: string[];
   imageAlt?: string[];
   tags?: string[];
}

const Card = ({ title, description, demoUrl, sourceCodeUrl, images, imageAlt = [], tags }: CardProps) => {
   return (
      <article className="relative mb-6 sm:mb-8 rounded-lg overflow-hidden border border-theme bg-background-secondary hover:border-highlight-secondary">
         {/* Licky Code Background Elements */}
         <div className="absolute top-2 right-2 text-accent-green opacity-15 font-mono text-xs pointer-events-none z-10">{'</>'}</div>
         <div className="absolute bottom-2 left-2 text-link-color opacity-10 font-mono text-xs pointer-events-none z-10">{'// project'}</div>

         {/* Project title and links */}
         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 border-b border-theme gap-2 bg-background-secondary">
            {demoUrl && (
               <Link
                  href={demoUrl}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-base sm:text-lg md:text-xl font-medium link-color hover:link-hover font-mono"
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
                     className="px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium link-color hover:link-hover font-mono"
                     target="_blank"
                     rel="noopener noreferrer"
                     title={`View source code of ${title}`}
                  >
                     [Source Code ↗]
                  </Link>
               )}
            </div>
         </div>

         {/* Image gallery with Swiper */}
         <div className="relative">
            <Swiper
               modules={[Navigation, Pagination, A11y, Autoplay]}
               spaceBetween={0}
               slidesPerView={1}
               navigation
               pagination={{ clickable: true }}
               loop={true}
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
               }}
               className="aspect-video"
            >
               {images.map((image, index) => (
                  <SwiperSlide key={index}>
                     <div className="aspect-video relative">
                        <Image
                           src={image}
                           alt={imageAlt[index]}
                           fill
                           className="object-cover"
                           priority={index === 0}
                        />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         {/* Description */}
         <div className="relative p-3 sm:p-4 bg-background-secondary">
            {/* Code-style comment */}
            <div className="text-accent-yellow opacity-30 font-mono text-xs mb-2">{'/* Description */'}</div>
            <p className="text-sm sm:text-base text-primary font-mono leading-relaxed">{description}</p>

            {/* Tags */}
            {tags && tags.length > 0 && (
               <div className="mt-2 sm:mt-3">
                  <div className="text-accent-orange opacity-30 font-mono text-xs mb-2">{'// Technologies'}</div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                     {tags.map((tag, index) => (
                        <span
                           key={index}
                           className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-theme/10 text-primary text-xs rounded border border-theme/20 font-mono hover:bg-theme/20"
                        >
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </article>
   );
};

export default Card;