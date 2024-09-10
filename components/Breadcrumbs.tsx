import Link from 'next/link'
import React from 'react'

const Breadcrumbs = ({href, label}: {href:string, label:string}) => {
  return (
    <Link href={href} className={`transition-all`}>
      {label}
    </Link>
  )
}

export default Breadcrumbs