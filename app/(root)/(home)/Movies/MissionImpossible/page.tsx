'use client'

import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';
import { Breadcrumb } from '@/components/breadcrumb';

const page = () => {

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Movies', href: '/Movies' },
    { label: 'Mission Impossible', href: 'MissionImpossible' },
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

      <h1 className='text-3xl font-bold'>
        Mission Impossible
      </h1>
    </section>
  )
}

export default page