import { Activity, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
   return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center pt-20 bg-background text-primary">
         <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-3xl flex justify-center items-center gap-2 mb-4'>
            <Activity className='w-10' />
            Under Construction
         </h1>
         <p className="text-center max-w-md mb-6">This page is currently under development. Visit my external blog site:</p>
         <Link
            href="https://blog-app-sandy-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
         >
            Explore My Blog <ExternalLink className="w-4 h-4" />
         </Link>
      </div>
   )
}

export default page