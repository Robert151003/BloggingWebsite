'use client'

import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react'
import { Breadcrumb } from '@/components/breadcrumb';
import Filter from '@/components/Filter';
import { useTheme } from 'next-themes';
import SubSection from '@/components/SubSection';


const Page = () => {
  const { theme } = useTheme()

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Tv-Shows', href: '/Tv-Shows' },
  ];

  return (
    <section
      className={`flex size-full flex-col gap-10`}
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
        Tv-Shows
      </h1>
      <Filter />
      <div
        id='container'
        className={`grid grid-cols-3 gap-4`}
        style={{
          gridTemplateColumns: 'repeat(3, 200px)',
        }}
      >
        <div id='sub'>
          <SubSection
            name='Adventure Time'
            route='Tv-Shows/AdventureTime'
            classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
            image='AdventureTime.jpeg'
          />
        </div>
      </div>
    </section>
  )
}

export default Page