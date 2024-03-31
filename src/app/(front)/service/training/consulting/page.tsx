import React from "react"
import Link from "next/link"

const Consulting = () => {
  return (
    <div className="flex flex-col space-y-4 w-96 text-start">
      <Link href="/service/training">&larr; Training</Link>
      <h1 className="text-4xl">Consulting</h1>
      <p>This is the consulting page</p>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem eius
        voluptatum quo fuga necessitatibus vitae repellendus officiis beatae
        voluptas?
      </p>
    </div>
  )
}

export default Consulting
