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
      if (window.innerWidth >= 1024) return 5; // desktop: 5
      if (window.innerWidth >= 768) return 4;  // iPad: 4
      return 4; // mobile: 2x2 = 4
    }
    return 4; // Default to 4 for mobile
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(() => getItemsPerPage());

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create displayProducts with fill logic for all breakpoints
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  const isTablet = typeof window !== "undefined" && window.innerWidth >= 768 && window.innerWidth < 1024;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const displayProducts = [...products];
  
  // For mobile view (4 per page): if last page isn't full, add products from beginning to fill it
  if (isMobile && products.length > 4) {
    const remainder = products.length % 4;
    if (remainder !== 0) {
      const itemsToAdd = 4 - remainder;
      for (let i = 0; i < itemsToAdd; i++) {
        displayProducts.push(products[i]);
      }
    }
  }
  // For iPad view (4 per page): if last page isn't full, add products from beginning to fill it
  if (isTablet && products.length > 4) {
    const remainder = products.length % 4;
    if (remainder !== 0) {
      const itemsToAdd = 4 - remainder;
      for (let i = 0; i < itemsToAdd; i++) {
        displayProducts.push(products[i]);
      }
    }
  }
  // For desktop view (5 per page): if last page isn't full, add products from beginning to fill it
  if (isDesktop && products.length > 5) {
    const remainder = products.length % 5;
    if (remainder !== 0) {
      const itemsToAdd = 5 - remainder;
      for (let i = 0; i < itemsToAdd; i++) {
        displayProducts.push(products[i]);
      }
    }
  }

  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = displayProducts.slice(startIndex, endIndex);

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
    <section className="w-full py-4 px-4 md:py-8 md:px-10 lg:px-20">
      <div className="flex flex-col items-center gap-1">
        <div className="w-full max-w-6xl relative mx-auto">
          <div className="px-2 md:px-8 pt-0 md:pt-3">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 min-h-[220px] md:min-h-[180px] lg:min-h-[230px]">
              {currentProducts.map((product, idx) => (
                <div key={`${product._id}-${startIndex + idx}`}>
                  <DisplayCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-3">
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
          <a href={viewMoreLink} className="font-semibold inline-block bg-Joyblue text-white px-6 py-2 rounded-xl shadow hover:bg-Joybrown transition">
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