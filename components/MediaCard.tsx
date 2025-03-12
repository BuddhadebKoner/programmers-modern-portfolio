import Link from 'next/link'
import React from 'react'

interface MediaCardProps {
   title: string;
   username: string;
   url: string;
   description: string;
}

const MediaCard = ({ title, username, url, description }: MediaCardProps) => {
   return (
      <div className="z-50 group relative mb-6 sm:mb-8 rounded-lg overflow-hidden transition-all duration-300 border-2 border-theme hover:border-highlight-secondary">
         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-theme gap-2 bg-background-secondary">
            <Link
               href={url}
               className="px-2 sm:px-3 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-medium link-color hover:link-hover transition-colors duration-200"
               target="_blank"
               rel="noopener noreferrer"
            >
               [{title} ↗]
            </Link>
            <div className='flex items-center bg-background-primary bg-opacity-30 rounded-md px-3 py-1'>
               <div className="text-xs sm:text-sm font-medium text-highlight-secondary hover:text-highlight transition-colors duration-200"
               >
                  {username}
               </div>
            </div>
         </div>
         <div className="p-2 sm:p-2 bg-background-secondary">
            <p className="text-xs sm:text-sm md:text-base text-primary leading-relaxed">{description}</p>
         </div>
         <div className="absolute inset-0 border border-highlight opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
      </div>
   )
}

export default MediaCard