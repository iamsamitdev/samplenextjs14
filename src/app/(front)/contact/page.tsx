import React from "react"
import Link from "next/link"

const Contact = () => {
  return (
    <div className="flex flex-col space-y-4 w-96 text-start">
      <Link href="/">&larr; Home</Link>
      <h1 className="text-4xl">Contact</h1>
      <p>This is the contact page</p>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem eius
        voluptatum quo fuga necessitatibus vitae repellendus officiis beatae
        voluptas?
      </p>
    </div>
  )
}

export default Contact
