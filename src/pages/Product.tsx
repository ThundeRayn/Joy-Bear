import {useState, useEffect} from "react"
import client from '../Client'
import ProductCard from "../components/ProductCard";

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

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          _id,
          slug,
          price,
          title,
          description,
          category->{title},
          "images": images[].asset->url
        }`
      )
      .then((data) => {
        console.log(data); // <-- Add this line
        setProducts(data)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 md:py-4 lg:py-6 px-5">
        <div className="p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our products</h2>
            <p>You are viewing {products.length} products</p>
        </div>
        {/* {products.map(product => (
          <li key={product._id}>
            <a href={`/products/${product.title}`}>
              {product.title}, 
              {product.price}, 
              {product.description},
              {product.images && product.images.length > 0 ? `${product.images[0]}` : 'No Image'},
              {product.category ? product.category.title : 'No Category'}
            </a>
          </li>
        ))} */}


        <div
          id="product-card"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2"
        >
          {products.map(product => (
            <div key={product._id} className="rounded-lg bg-white shadow flex justify-center">
              <ProductCard 
                key={product._id}  
                product={product}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Product