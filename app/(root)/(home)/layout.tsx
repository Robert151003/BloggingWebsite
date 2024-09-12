'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useTheme } from 'next-themes'
import React, { ReactNode, useEffect, useState } from 'react'
import Cookies from "js-cookie";
import Loader from '@/components/Loader'

const defaultTheme = 'light';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true);
  const storedTheme = Cookies.get("theme");

  useEffect(() => {
    if (!storedTheme) {
      // If no cookie is present, set the default theme as a cookie
      Cookies.set("theme", defaultTheme);
      setTheme(defaultTheme);
    } else {
      setTheme(storedTheme);
    }
    setLoading(false);
  }, [storedTheme, setTheme, defaultTheme]);

  const { resolvedTheme } = useTheme();

  // Effect to update the body element's class when the theme changes
  React.useEffect(() => {
    document.body.classList.toggle("dark", resolvedTheme === "dark");
    document.body.classList.toggle("light", resolvedTheme === "light");
  }, [resolvedTheme]);

  if (loading) {
    return <Loader/>;
  }

  return (
    <main className='relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className='flex'>
        <Sidebar theme={theme}/>
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className="w-full">
            {React.Children.map(children, child => {
              // Pass theme and setTheme props to each child component
              return React.cloneElement(child as React.ReactElement, { theme, setTheme })
            })}
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomeLayout