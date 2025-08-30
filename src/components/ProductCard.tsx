// components/ProductCard.tsx
import React from 'react'

type ProductCardProps = {
  title: string
  price: number
  images?: { asset: { url: string } }[]
  category?: { title: string }
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, images, category }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Product Image */}
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
        {images && images.length > 0 ? (
          <img
            src={images[0].asset.url}
            alt={title}
            className="object-contain h-full"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category Tag */}
        {category && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
            {category.title}
          </span>
        )}

        {/* Product Title */}
        <h3 className="text-lg font-semibold mb-1">{title}</h3>

        {/* Product Price */}
        <p className="text-gray-700 font-medium">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard
