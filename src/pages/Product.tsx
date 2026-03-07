import {useState, useEffect} from "react"
import { Helmet } from 'react-helmet-async'
import client from '../Client'
import ProductCard from "../components/ProductCard";
import Back2 from "../components/Back2";
import Hero from "../components/HomePage/Hero";
//import ContactBadge from "../components/ContactBadge";

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
    <>
    <Helmet>
      <title>Products | JoyBear Toys</title>
      <meta name="description" content="Browse JoyBear's full collection of custom plush toys, stuffed animals, and personalized keepsakes crafted with heart and imagination." />
      <link rel="canonical" href="https://www.joybeartoys.com/products" />
    </Helmet>
    <Hero
    title="View Our Products" 
    description="Explore our full collection — from playful plush to personalized keepsakes, crafted with heart and imagination."
    img="https://res.cloudinary.com/dqj2gwlpf/image/upload/q_auto,f_auto,w_1200/v1769036590/banner-image_qnmml8.png"/>

    <div className=" px-5 lg:px-8 pb-6 md:pb-8 lg:pb-15">
      <Back2 text="Back to Menu"/>
      <div className=" flex flex-col items-center justify-center">

          <div className="p-10">
              <h2 className="text-3xl uppercase text-center font-semibold text-black mb-4">Our products</h2>
              <p className="text-center">You are viewing {products.length} products</p>
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
    
    </>
  )
}

export default Product