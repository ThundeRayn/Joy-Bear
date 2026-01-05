import { useEffect, useState } from "react";
import client from '../../Client';
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

const TagToys2: React.FC<TagToysProps> = ({
  // title = 'New Arrivals',
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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) return 5; // 1 row × 5 columns
    }
    return 1; // 1 row × 1 column for mobile
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section className="w-full py-8 px-10 lg:px-20">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-6xl relative mx-auto">
          {totalPages > 1 && (
            <>
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer transition hover:bg-gray-100"
                onClick={handlePrev}
              >
                <RiArrowLeftWideFill />
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer transition hover:bg-gray-100"
                onClick={handleNext}
              >
                <RiArrowRightWideFill />
              </button>
            </>
          )}

          <div className="px-22 pt-3">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 min-h-[250px] md:min-h-[260px]">
              {currentProducts.map((product, idx) => (
                <div key={product._id || idx}>
                  <DisplayCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-1">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentPage ? 'bg-Joyblue w-5' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}
        
        <div className="mt-4 flex items-center gap-3">
          {products.length > 5 && (
            <button
              onClick={handlePrev}
              className="p-2 text-Joyblue bg-white rounded-full cursor-pointer transition hover:bg-gray-100"
              aria-label="Previous page"
            >
              <RiArrowLeftWideFill className="text-3xl" />
            </button>
          )}
          <a href={viewMoreLink} className="inline-block bg-Joyblue text-white px-6 py-2 rounded-xl shadow hover:bg-Joybrown transition">
            {viewMoreLabel}
          </a>
          {products.length > 5 && (
            <button
              onClick={handleNext}
              className="p-2 text-Joyblue bg-white rounded-full cursor-pointer transition hover:bg-gray-100"
              aria-label="Next page"
            >
              <RiArrowRightWideFill className="text-3xl" />
            </button>
          )}
        </div>
        {/* <p className="text-sm font-normal text-gray-300">
          {title}
        </p> */}
        
      </div>
    </section>
  );
}

export default TagToys2