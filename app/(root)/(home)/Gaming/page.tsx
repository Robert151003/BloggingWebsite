import React from 'react'

interface PageProps {
  theme: string | undefined;
  setTheme: (value: string) => void;
}

const page: React.FC<PageProps> = ({ theme, setTheme }) => {
  return (
    <section
      className={`flex size-full flex-col gap-10`}
    >
      <h1 className='text-3xl font-bold '>
        Gaming
      </h1>
    </section>
  )
}

export default page