import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import client from '../Client'


const ProductDetail = () => {
  const [singleProduct,setSingleProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const {productId} = useParams<{productId: string}>();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${productId}"]{
          _id,
          price,
          title,
          description,
          category->{title},
          "images": images[].asset->url
        }`
      )
      .then((data) => {
        console.log(data); // <-- print
        console.log(productId);
        setSingleProduct(data[0]) // set the first product
      })
      .catch((err) => console.error(err));
  }, [productId]);

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