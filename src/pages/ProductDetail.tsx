
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
  images?: string[];
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
        console.log(data); // <-- print
        console.log(`singlePage slug: `+ slug); // <-- print
        setSingleProduct(data[0]) // set the first product
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {singleProduct ? (
      <>
          {/* <div key={singleProduct._id}>
            {singleProduct.title},
            {singleProduct.price},
            {singleProduct.description},
            {singleProduct.images && singleProduct.images.length > 0 ? `${singleProduct.images[0]}` : 'No Image'},
            {singleProduct.category ? singleProduct.category.title : 'No Category'}
          </div> */}

        {/* Product Image and Info */}
        <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row">

          {/* Image */}
          <div className="w-full md:w-md h-80 rounded-2xl overflow-hidden shadow-lg">
            {singleProduct.images && singleProduct.images.length > 0 ? (
              <img
                src={singleProduct.images[0]}
                alt={singleProduct.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                No Image
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="mt-6 w-full md:ml-10 md:mt-4">
            <h1 className="text-3xl font-bold text-gray-800">{singleProduct.title}</h1>
            <p className="text-lg text-blue-600 font-semibold mt-2">
              ${singleProduct.price}
            </p>

            {singleProduct.category && (
              <span className="inline-block mt-3 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                {singleProduct.category.title}
              </span>
            )}

            <p className="mt-6 text-gray-700 leading-relaxed">
              {singleProduct.description}
            </p>
          </div>
        </div>
      </>
      ) : (
        <div>
          <p className="text-center my-10 text-gray-500">Product not found</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetail