import { Activity } from 'lucide-react'
import React from 'react'
import LickyCodeBackground from '@/components/LickyCodeBackground'

const page = () => {
  return (
    <div className="w-full min-h-screen licky-code-bg flex justify-center items-center pt-20 text-primary relative">
      <LickyCodeBackground />
      <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-3xl flex justify-center items-center gap-2 relative z-10'>
        <Activity className='w-10' />
        Under Construction
      </h1>
    </div>
  )
}

export default page