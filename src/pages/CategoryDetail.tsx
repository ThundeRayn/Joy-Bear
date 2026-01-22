import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../Client";
import ProductCard from "../components/ProductCard";
import Back2 from "../components/Back2";
import Upbadge from "../components/Upbadge";

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
  category?: { title: string }[];
  tags?: { name: string }[];
  images?: { asset: { url: string } }[];
}

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryData, setCategoryData] = useState<{title?: string; description?: string; image?: string} | null>(null);

  useEffect(() => {
    if (!slug) return;

    // Fetch category details
    client
      .fetch(
        `*[_type == "category" && slug.current == "${slug}"][0]{
          title,
          description,
          "image": image.asset->url
        }`
      )
      .then((data) => {
        if (data) {
          setCategoryData({
            title: data.title,
            description: data.description,
            image: data.image
          });
        }
      })
      .catch((err) => console.error('Error fetching category:', err));

    // Fetch products
    client
      .fetch(
        `*[_type == "product" && "${slug}" in category[]->slug.current]{
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
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <>
    {categoryData && (
      <Upbadge 
        title={categoryData.title}
        description={categoryData.description}
        img={categoryData.image}/>
    )}
    
    <div className="px-5 lg:px-8 pb-6 md:pb-8 lg:pb-15">
      <Back2 text="Back to Menu" />
      <div className="flex flex-col items-center justify-center">

        <div className="p-10">
          <h2 className="text-center text-3xl font-semibold text-black mb-4 uppercase">{categoryData?.title}</h2>
          {products.length > 0 && <p>You are viewing {products.length} products</p>}
        </div>

        {products.length === 0 ? (
          <div className="w-full flex items-center justify-center py-12 md:py-20 px-4">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-2">Coming Soon</h3>
              <p className="text-sm md:text-base text-gray-500">We're working on bringing you amazing products in this category.</p>
            </div>
          </div>
        ) : (
          <div
            id="product-card"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2"
          >
            {products.map((product) => (
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

export default CategoryDetail;