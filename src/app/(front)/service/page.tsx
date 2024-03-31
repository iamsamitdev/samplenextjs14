import React from "react"
import Link from "next/link"

const Service = () => {
  return (
    <div className="flex flex-col space-y-4 w-96 text-start">
      <Link href="/">&larr; Home</Link>
      <h1 className="text-4xl">Service</h1>
      <p>This is the service page</p>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem eius
        voluptatum quo fuga necessitatibus vitae repellendus officiis beatae
        voluptas?
      </p>
      <Link href="/service/training">Training &rarr;</Link>
    </div>
  )
}

export default Service
