'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'

interface SidebarProps {
    theme: string | undefined;
  setTheme: (theme: string) => void;
  }

const Sidebar: React.FC<SidebarProps> = ({ theme, setTheme }) => {
    const pathName = usePathname();
  return (
    <section className={`'sticky left-0 top-0 flex h-screen w-fit flex-col justify-between ${theme === 'light' ? 'bg-light-1 text-dark-5' : 'bg-dark-1 text-white'} p-6 pt-28 max-sm:hidden lg:w-[264px]'`}>
        <div className='flex flex-1 flex-col gap-6'>
            
            {/* Uses side bar links in constants/index.ts */}
            {sidebarLinks.map((link) => {
                const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);

                return (
                    <Link 
                    href ={link.route}
                    key={link.label}
                    className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                        [theme === 'light' ? 'bg-blue-2' : 'bg-blue-1']: isActive,
                      })}
                    >

                        <Image
                        src={`${theme === 'light' ? `${link.imgUrl}-dark.svg` : `${link.imgUrl}.svg` }`}
                        alt={link.label}
                        width={24}
                        height={24}
                        />
                        <p className='text-lg font-semibold max-lg:hidden'>
                            {link.label}
                        </p>

                    </Link>
                );
            })}
        </div>
    </section>
  )
    
}

export default Sidebar