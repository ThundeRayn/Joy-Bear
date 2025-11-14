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
            <a href={`/products/${product.slug.current}`}>
              {/* {product.title}, 
              {product.price}, 
              {product.description},
              {product.images && product.images.length > 0 ? `${product.images[0]}` : 'No Image'},
              {product.category ? product.category.title : 'No Category'} */}
            
                <div className="max-w-xs bg-white shadow rounded overflow-hidden">
                    {/* Product Image */}
                    {
                        <div className="relative h-64 w-full">
                        <img
                            src={product.images && product.images.length > 0 ? `${product.images[0]}` : `https://images.unsplash.com/photo-1583478415880-b79447d73a84?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                            alt={product.title}
                            className="object-cover w-full h-full"
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
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="mt-1 text-gray-700">#{product.id}</p>
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
