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
  const [categoryTitle, setCategoryTitle] = useState<string>('View our products');
  const [categoryDescription, setCategoryDescription] = useState<string>('Explore our full collection — from playful plush to personalized keepsakes, crafted with heart and imagination.');
  const [categoryImage, setCategoryImage] = useState<string>('');

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
          setCategoryTitle(data.title || 'View our products');
          setCategoryDescription(data.description || 'Explore our full collection — from playful plush to personalized keepsakes, crafted with heart and imagination.');
          setCategoryImage(data.image || '');
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
    <Upbadge 
      title={categoryTitle}
      description={categoryDescription}
      img={categoryImage}/>
    
    <div className="px-5 lg:px-8 pb-6 md:pb-8 lg:pb-15">
      <Back2 text="Back to Menu" />
      <div className="flex flex-col items-center justify-center">

        <div className="p-10">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">{slug}</h2>
          <p>You are viewing {products.length} products</p>
        </div>

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
      </div>
    </div>
    </>
  );
};

export default CategoryDetail;