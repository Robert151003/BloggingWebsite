'use client'

import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Cookies from "js-cookie";
import React from 'react'


interface NavbarProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
 
  const { setTheme: setNextTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setNextTheme(newTheme); // Update the theme prop using the useTheme hook
    Cookies.set("theme", newTheme, { expires: 30 });
  };


  return (
    <nav className={`flex-between fixed z-50 w-full ${theme === 'light' ? 'bg-light-1' : 'bg-dark-1'} px-6 py-4 lg:px-10`}>
      <Link href="/" className={`flex items-center gap-1 ${theme === 'light' ? 'text-dark' : 'text-white'}`}>
        <Image src="/icons/logo.svg" width={32} height={32} alt="logo" className='max-sm:size-10' />
        <p className={`text-[26px] font-extrabold ${theme === 'light' ? 'text-dark' : 'text-white'} max-sm:hidden`}>Logo</p>
      </Link>

      <div className={`flex justify-center mx-auto ${theme === 'light' ? 'text-dark' : 'text-white'}`}>
        <Button type='submit'> <Image src={`${theme === 'light' ? '/icons/search-dark.svg' : '/icons/search.svg'}`} alt='search' width={20} height={20}/> </Button>
        <Input type='text' placeholder='Search' className={`w-full max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[264px] ${theme === 'light' ? 'text-dark' : 'text-white'}`}  />
      </div>

      <div className={`flex-between gap-5 ${theme === 'light' ? 'text-dark' : 'text-white'}`}>
        <MobileNav/>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleThemeChange("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

export default Navbar