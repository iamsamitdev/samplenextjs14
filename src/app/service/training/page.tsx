import React from 'react'
import Link from 'next/link'

const Training = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ul className="flex flex-col space-y-3 items-start text-2xl">

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
    </main>
  )
}

export default Training