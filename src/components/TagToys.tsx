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

type TagToysProps = {
  /** Heading text to display above the cards */
  title?: string;
  /** Tag name to query products by (e.g. 'Latest') */
  tagName?: string;
  /** Optional link for the "view more" button */
  viewMoreLink?: string;
  /** Optional label for the view more button */
  viewMoreLabel?: string;
}

const TagToys: React.FC<TagToysProps> = ({
  title = 'New Arrivals',
  tagName = 'Latest',
  viewMoreLink = '/latest',
  viewMoreLabel = 'VIEW MORE'
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // build a safe groq query using the provided tagName
    const q = `*[_type == "product" && "${tagName}" in tags[]->name]{
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
      .fetch(q)
      .then((data) => {
        setProducts(data || []);
      })
      .catch((err) => console.error(err));
  }, [tagName]);

  return (
    <section className="w-full py-16 px-10 lg:px-20">
      <div className="flex flex-col items-center">

        <h2 className="text-3xl font-medium text-gray-900 mb-8">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <DisplayCard key={product.id || product._id} product={product} />
          ))}
        </div>

        <div className="mt-8">
          <a href={viewMoreLink} className="inline-block bg-Joyblue text-white px-6 py-2 rounded-xl shadow hover:bg-[#6a886c] transition">
            {viewMoreLabel}
          </a>
        </div>

      </div>
    </section>
  );
}

export default TagToys