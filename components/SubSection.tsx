import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';


const SubSection = ({ name, route, classname, image }: {name:string, route:string, classname:string, image:string}) => {
  return (
    <Link href={route}>
      <Button type="submit" className={`${classname} flex flex-col`} >
      <Image
          src={`/Images/${image}`}
          alt={name}
          width={150}
          height={150}
          className='py-3'
        />
        {name}
      </Button>
    </Link>
  )
}

export default SubSection