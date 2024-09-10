'use client'

import SubSection from '@/components/SubSection';
import React from 'react';
import { useTheme } from 'next-themes';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/breadcrumb';

const Page = () => {
  const { theme } = useTheme()

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Gaming', href: '/Gaming' },
  ];

  return (
    <section
      className={`flex flex-col gap-10 max-w-md ml-0 pl-4`}
    >

      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <h1 className='text-3xl font-bold '>
        Gaming
      </h1>
      <div
        className={`grid grid-cols-3 gap-4`}
        style={{
          gridTemplateColumns: 'repeat(3, 200px)',
        }}
      >
        <SubSection
          name='Hollow Knight'
          route='Gaming/HollowKnight'
          classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
          image='HollowKnight.jpeg'
        />
        <SubSection
          name='Mario Wonder'
          route='Gaming/Mario'
          classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
          image='MarioWonder.jpeg'
        />
        <SubSection
          name="Zelda Link's Awakening"
          route='Gaming/Zelda'
          classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
          image='ZeldaLA.jpeg'
        />
        
        
      </div>
    </section>
  )
}

export default Page