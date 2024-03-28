import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ul className="flex flex-col space-y-2 items-start text-3xl">
        <li>
          <Link href="/about">About &rarr;</Link>
        </li>
        <li>
          <Link href="/service">Service &rarr;</Link>
        </li>
        <li>
          <Link href="/contact">Contact &rarr;</Link>
        </li>
      </ul>
    </main>
  )
}
