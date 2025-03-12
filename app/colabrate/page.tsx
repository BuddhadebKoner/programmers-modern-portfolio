import { Activity } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center pt-20 bg-background text-primary">
      <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-3xl flex justify-center items-center gap-2'>
        <Activity className='w-10' />
        Under Construction
      </h1>
    </div>
  )
}

export default page