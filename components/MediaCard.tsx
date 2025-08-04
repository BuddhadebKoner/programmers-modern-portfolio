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
      <div className="relative z-50 mb-6 sm:mb-8 rounded-lg overflow-hidden border-2 border-theme hover:border-highlight-secondary bg-background-secondary">
         {/* Licky Code Background Elements */}
         <div className="absolute top-1 right-2 text-accent-green opacity-15 font-mono text-xs pointer-events-none">{'@'}</div>
         <div className="absolute bottom-1 left-2 text-link-color opacity-10 font-mono text-xs pointer-events-none">{'<>'}</div>

         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-theme gap-2 bg-background-secondary relative z-10">
            <Link
               href={url}
               className="px-2 sm:px-3 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-medium link-color hover:link-hover font-mono"
               target="_blank"
               rel="noopener noreferrer"
            >
               [{title} ↗]
            </Link>
            <div className='flex items-center bg-background-primary bg-opacity-30 rounded-md px-3 py-1'>
               <div className="text-xs sm:text-sm font-medium text-highlight-secondary hover:text-highlight font-mono"
               >
                  {username}
               </div>
            </div>
         </div>
         <div className="p-2 sm:p-2 bg-background-secondary relative z-10">
            <div className="text-accent-yellow opacity-30 font-mono text-xs mb-1">{'// Description'}</div>
            <p className="text-xs sm:text-sm md:text-base text-primary leading-relaxed font-mono">{description}</p>
         </div>
      </div>
   )
}

export default MediaCard