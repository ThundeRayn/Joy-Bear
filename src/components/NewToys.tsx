import { useEffect, useState } from "react";
import client from '../Client';
import DisplayCard from "./DisplayCard";

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

const NewToys = () => {
const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && "Latest" in tags[]->name]{
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
        setProducts(data)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="w-full py-16 px-10 lg:px-20">
        <div className="flex flex-col items-center">

            {/* Right: Brand Intro Text */}
            <h2 className="text-3xl font-medium text-gray-900 mb-8">
                New Arrivals
            </h2>
            {/* display all new arrivals */}
            <div className="flex flex-wrap justify-center gap-8">
              {products.map((product) => (
                <DisplayCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8">
                <a href="/latest" className="inline-block bg-Joyblue text-white px-6 py-2 rounded-xl shadow hover:bg-[#6a886c] transition">
                VIEW MORE
                </a>
            </div>

        </div>
    </section>
  )
}

export default NewToys