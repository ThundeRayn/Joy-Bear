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
        <a href={`/products/${product.slug.current}`} className="block">
          <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all cursor-pointer group">
            {/* Product Image */}
            <div className="w-full h-48 bg-gray-200 overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <img
                  src={typeof product.images[0] === 'string' ? product.images[0] : product.images[0]?.asset?.url}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Product Title */}
            <div className="flex justify-center p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-Joybrown transition-colors duration-200">{product.title}</h3>
            </div>
          </div>
        </a>
      ) : (
        <p>No product information available.</p>
      )}
    </div>
  )
}

export default DisplayCard