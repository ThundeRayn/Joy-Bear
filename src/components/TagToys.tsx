import { useEffect, useState } from "react";
import client from '../Client';
import DisplayCard from "./DisplayCard";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

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
  viewMoreLink = '/tags/latest',
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

  // Carousel state
  const [visible, setVisible] = useState(0);
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) return 4;
    }
    return 2;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCount);
  const handlePrev = () => setVisible((v) => Math.max(0, v - 1));
  const handleNext = () => setVisible((v) => Math.min(maxIndex, v + 1));

  return (
    <section className="w-full py-16 px-10 lg:px-20">
      <div className="flex flex-col items-center">

        <h2 className="text-3xl font-medium text-gray-900 mb-8">
          {title}
        </h2>

        <div className="w-full max-w-6xl relative mx-auto">
          {/* Left Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer transition"
            onClick={handlePrev}
            disabled={visible === 0}
            style={{ opacity: visible === 0 ? 0.1 : 1 }}
          >
            <RiArrowLeftWideFill />
          </button>
          {/* Right Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer transition"
            onClick={handleNext}
            disabled={visible === maxIndex}
            style={{ opacity: visible === maxIndex ? 0.1 : 1 }}
          >
            <RiArrowRightWideFill />
          </button>
          {/* Card Carousel */}
          <div className="overflow-hidden">
            <ul
              className={`flex gap-4 pt-4 px-4 min-w-full transition-transform duration-500 ${products.length < 4 ? 'justify-center' : ''}`}
              style={{ transform: `translateX(-${visible * (100 / visibleCount)}%)` }}
            >
              {products.map((product, idx) => (
                <li
                  key={product._id || idx}
                  className="flex-shrink-0 w-1/2 md:w-1/4 p-4"
                  style={{ minWidth: visibleCount === 2 ? "50%" : "25%" }}
                >
                  <DisplayCard product={product} />
                </li>
              ))}
            </ul>
          </div>
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