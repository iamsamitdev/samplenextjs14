import Link from 'next/link'
import React from 'react'

type Props = {
    params: { id: string }
    searchParams: { 
        type: string 
        cat: string
    },
}

function Report({ params, searchParams }: Props) {
    return (
        <div className="flex flex-col space-y-4 w-96 text-start">
            <Link href="/">&larr; Home</Link>
            <h1 className="text-4xl">Report</h1>
            <p>This is the report page</p>
            <p>Report id: { params.id }</p>
            <p>Report type: { searchParams.type }</p>
            <p>Report cat: { searchParams.cat }</p>
        </div>
    )
}

export default Report