import React from "react"
import Link from "next/link"

export default function Main() {
  return (
    <ul className="space-y-2 text-3xl text-end">
    <li>
      <Link href="/about">About &rarr;</Link>
    </li>
    <li>
      <Link href="/service">Service &rarr;</Link>
    </li>
    <li>
      <Link href="/contact">Contact &rarr;</Link>
    </li>
    <li>
      <Link href="/report/1?type=monthly&cat=1">Report &rarr;</Link>
    </li>
    <li>
      <Link href="/product/a/b/c/d?type=month&cat=1">Product &rarr;</Link>
    </li>
    <li>
      <Link href="/not-found">NotFound &rarr;</Link>
    </li>
  </ul>
  )
}
