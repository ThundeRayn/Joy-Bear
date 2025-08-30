import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import client from '../Client'

type Product = {
  _id: string;
  slug: string;
  title: string;
  price: number;
  description: string;
  category: { title: string };
  images?: { asset: { url: string } }[];
}

const ProductDetail = () => {
  const [singleProduct,setSingleProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const {slug} = useParams<{slug: string}>();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
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
        console.log(`singlePage data: `+data); // <-- print
        console.log(`singlePage slug: `+slug); // <-- print
        setSingleProduct(data[0]) // set the first product
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <div>
      {singleProduct ? (
        <div key={singleProduct._id}>
          {singleProduct.title},
          {singleProduct.price},
          {singleProduct.description},
          {singleProduct.images && singleProduct.images.length > 0 ? `${singleProduct.images[0]}` : 'No Image'},
          {singleProduct.category ? singleProduct.category.title : 'No Category'}

        </div>
      ) : (
        <div>Product Detail Coming Soon...</div>
      )}
    </div>
  )
}

export default ProductDetail