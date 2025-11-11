import React from 'react'

interface Product {
  _id: string;
  id: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  description: string;
  minOrderQuantity?: number;
  category?: {title: string}[];
  tags?: {name: string}[];
  images?: { asset: { url: string } }[];
}

type ProductCardProps = {
  product?: Product;
}

const DisplayCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Render other product details as needed */}
        </>
      ) : (
        <p>No product information available.</p>
      )}
    </div>
  )
}

export default DisplayCard