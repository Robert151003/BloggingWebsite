import React from 'react'

interface HomeProps {
  theme: string | undefined;
  setTheme: (value: string) => void;
}

const Home: React.FC<HomeProps> = ({ theme, setTheme }) => {
  
  return (
    <section
      className={`flex size-full flex-col gap-10`}
    >
      <h1 className='text-3xl font-bold '>
        Home
      </h1>
    </section>
  )
}

export default Home