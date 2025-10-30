import React from 'react'

interface Product {
  _id: string;
  slug: {
    _type: "slug";
    current: string;
  };
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
        <div key={product._id}>
            <a href={`/products/${product.slug.current}`}>
              {/* {product.title}, 
              {product.price}, 
              {product.description},
              {product.images && product.images.length > 0 ? `${product.images[0]}` : 'No Image'},
              {product.category ? product.category.title : 'No Category'} */}
            
        <div className="max-w-xs md:max-w-sm lg:max-w-md bg-white shadow rounded overflow-hidden">
                    {/* Product Image */}
          <div className="relative h-64 md:h-80 lg:h-96 w-full">
                        <img
                            src={product.images && product.images.length > 0 ? `${product.images[0]}` : `https://images.unsplash.com/photo-1583478415880-b79447d73a84?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                            alt={product.title}
                            className="object-cover w-full h-full"
                        />
                        {/* Category Tag */}
                        {product.category?.title && (
                            <span className="absolute top-2 left-2 bg-[#86A788] text-white text-xs px-2 py-1 rounded">
                            {product.category.title}
                            </span>
                        )}
            </div>

          {/* Product Info */}
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="mt-1 text-gray-700">${product.price}</p>
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
