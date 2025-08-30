import {useState, useEffect} from "react"
import client from '../Client'
import ProductCard from "../components/ProductCard";

interface Product {
  _id: string;
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
    <div>
      <h1>Products</h1>
      <p>You are viewing {products.length} products</p>
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
      <div>
        {products.map(product => (
          <ProductCard 
            key={product._id}  
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Product