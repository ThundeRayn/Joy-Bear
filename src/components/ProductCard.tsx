// components/ProductCard.tsx
import React from 'react'

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: { title: string };
  images?: { asset: { url: string } }[];
}

type ProductCardProps = {
  product?: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      {product ? (
        <li key={product._id}>
            <a href={`/products/${product.title}`}>
              {product.title}, 
              {product.price}, 
              {product.description},
              {product.images && product.images.length > 0 ? `${product.images[0]}` : 'No Image'},
              {product.category ? product.category.title : 'No Category'}
            </a>
          </li>
      ) : (
        <div>No Product Available</div>
      )}
    </div>
  )
}

export default ProductCard
