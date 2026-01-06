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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      {product ? (
        <div key={product._id}>
            <a href={`/products/${product.slug.current}`} className="group block bg-white rounded-lg border border-gray-200 hover:border-Joyblue hover:shadow-md transition-all duration-300">
            
                <div className="bg-white rounded-lg overflow-hidden">
                    {/* Product Image */}
                    {
                        <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-gray-100">
                        <img
                            src={product.images && product.images.length > 0 ? `${product.images[0]}` : `https://images.unsplash.com/photo-1583478415880-b79447d73a84?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Category Tags */}
                        {product.category && product.category.length > 0 && (
                            <div className="absolute top-2 left-2 flex flex-col gap-1">
                                {product.category.map((cat, idx) => (
                                    <span key={idx} className="bg-[#86A788] text-white text-xs px-2 py-1 rounded">
                                        {cat.title}
                                    </span>
                                ))}
                            </div>
                        )}
                        </div>
                    }

                    {/* Product Info */}
                    <div className="p-3">
                        <h4 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] text-gray-800 group-hover:text-Joyblue transition-colors">{product.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">#{product.id}</p>
                    </div>
                    
                </div>
            </a>
          </div>
      ) : (
        <div>No Product Available</div>
      )}
    </div>
  )
}

export default ProductCard
