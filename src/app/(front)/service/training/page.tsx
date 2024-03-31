import React from 'react'
import Link from 'next/link'

const Training = () => {
  return (
      <ul className="space-y-2 items-start text-2xl">

        <Link href="/service" className='text-base'>&larr; Service</Link>

        <li>
          <Link href="/service/training/public">&rarr; Public </Link>
        </li>
        <li>
          <Link href="/service/training/consulting">&rarr; Consulting</Link>
        </li>
        <li>
          <Link href="/service/training/development">&rarr; Development </Link>
        </li>
      </ul>
  )
}

export default Training