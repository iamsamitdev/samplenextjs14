import React from "react"
import Link from "next/link"

const Public = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col space-y-4 w-96 text-start">
        <Link href="/service/training">&larr; Training</Link>
        <h1 className="text-4xl">Pubilc</h1>
        <p>This is the pubic page</p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem eius
          voluptatum quo fuga necessitatibus vitae repellendus officiis beatae
          voluptas?
        </p>
      </div>
    </div>
  )
}

export default Public
