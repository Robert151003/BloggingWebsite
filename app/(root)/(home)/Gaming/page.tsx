'use client'

import SubSection from '@/components/SubSection';
import React from 'react';
import { useTheme } from 'next-themes';

const page = () => {
  const { theme } = useTheme()
  return (
    <section
      className={`flex flex-col gap-10 max-w-md ml-0 pl-4`}
    >
      <h1 className='text-3xl font-bold '>
        Gaming
      </h1>
      <div
        className={`grid grid-cols-2 gap-4`}
        style={{
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <SubSection
          name='Hollow Knight'
          route='/HollowKnight'
          classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
        />
        <SubSection
          name='Mario'
          route='/Mario'
          classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
        />
        <SubSection
          name='Luigi'
          route='/Mario'
          classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
        />
        
      </div>
    </section>
  )
}

export default page