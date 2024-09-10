import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react'
import { Breadcrumb } from '@/components/breadcrumb';


const page = () => {

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
    </section>
  )
}

export default page