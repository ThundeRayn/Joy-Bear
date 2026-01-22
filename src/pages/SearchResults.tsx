import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import client from '../Client'
import ProductCard from "../components/ProductCard";
import Back2 from "../components/Back2";
import Hero from "../components/HomePage/Hero";

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

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setProducts([]);
      return;
    }

    setLoading(true);
    const query = `*[_type == "product" && (
      title match "*${searchQuery}*" ||
      description match "*${searchQuery}*" ||
      id match "*${searchQuery}*"
    )]{
      _id,
      id,
      slug,
      title,
      minOrderQuantity,
      description,
      "category": category[]->{title},
      "tags": tags[]->{name},
      "images": images[].asset->url
    }`;

    client
      .fetch(query)
      .then((data) => {
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <>
      <Hero 
        title="Search Results" 
        description={`Results for "${searchQuery}"`}
        img="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769036590/banner-image_qnmml8.png"
      />

      <div className="px-5 lg:px-8 pb-6 md:pb-8 lg:pb-15">
        <Back2 text="Back to Menu"/>
        <div className="flex flex-col items-center justify-center">
          <div className="p-10">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-Joyblue"></div>
              </div>
            ) : searchQuery.trim() === '' ? (
              <div className="text-center">
                <h2 className="text-3xl uppercase text-center font-semibold text-black mb-4">No search query</h2>
                <p className="text-center text-gray-600">Please enter a search term</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center">
                <h2 className="text-3xl uppercase text-center font-semibold text-black mb-4">No Products Found</h2>
                <p className="text-center text-gray-600">No products match "{searchQuery}"</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl uppercase text-center font-semibold text-black mb-4">Search Results</h2>
                <p className="text-center">Found {products.length} product{products.length !== 1 ? 's' : ''} matching "{searchQuery}"</p>
              </>
            )}
          </div>

          {products.length > 0 && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
