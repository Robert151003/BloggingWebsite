import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'


const SubSection = ({ name, route, classname }: {name:string, route:string, classname:string}) => {
  console.log(`classname: ${classname}`);
  return (
    <Link href={route}>
      <Button type="submit" className={`${classname}`}>
        {name}
      </Button>
    </Link>
  )
}

export default SubSection