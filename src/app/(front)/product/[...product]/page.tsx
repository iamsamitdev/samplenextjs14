import Link from 'next/link'
type Props = {
  params: { product: string[] }
  searchParams: { 
      type: string 
      cat: string
  },
}

function Product({params, searchParams}: Props) {
  return (
    <div className="flex flex-col space-y-4 w-96 text-start">
      <Link href="/">&larr; Home</Link>
      <h1 className="text-4xl">Product</h1>
      <p>This is the product page</p>
      <p>Product params 0: { params.product[0] }</p>
      <p>Product params 1: { params.product[1] }</p>
      <p>Product params 2: { params.product[2] }</p>
      <p>Product params 3: { params.product[3] }</p>
      <p>Product params: { params.product.join('/') }</p>
      <p>Product type: { searchParams.type }</p>
      <p>Product cat: { searchParams.cat }</p>
    </div>
  )
}

export default Product