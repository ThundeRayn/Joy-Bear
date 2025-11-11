import {useState, useEffect} from "react"
import client from '../Client'
import ProductCard from "../components/ProductCard";
import Back2 from "../components/Back2";

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

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          _id,
          id,
          slug,
          title,
          minOrderQuantity,
          description,
          "category": category[]->{title},
          "tags": tags[]->{name},
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
    <div className=" px-5 lg:px-8 pb-6 md:pb-8 lg:pb-15">
      <Back2 text="Back to Menu"/>
      <div className=" flex flex-col items-center justify-center">

          <div className="p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our products</h2>
              <p>You are viewing {products.length} products</p>
          </div>


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
    </div>
  )
}

export default Product