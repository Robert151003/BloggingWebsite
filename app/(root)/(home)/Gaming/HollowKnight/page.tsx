'use client'

import React from 'react';
import { useTheme } from 'next-themes';

const Page = () => {
  const { theme } = useTheme()
  return (
    <section
      className={`flex flex-col gap-10 max-w-md ml-0 pl-4`}
    >
      <h1 className='text-3xl font-bold '>
        Hollow Knight
      </h1>
    </section>
  )
}

export default Page