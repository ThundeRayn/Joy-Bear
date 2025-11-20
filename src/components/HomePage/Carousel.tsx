import { useState, useEffect } from 'react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

import Bear1Img from '../../assets/imgs/Bear1_11zon.webp'
import Bear2Img from '../../assets/imgs/Bear2_11zon.webp'
import Bear3Img from '../../assets/imgs/Bear3_11zon.webp'

// Import your Sanity client (adjust the path as needed)
import client from '../../Client';

const Bear1 = Bear1Img;
const Bear2 = Bear2Img;
const Bear3 = Bear3Img;

const Activities = [
  { id: 1, image: Bear1, title: 'Item 1' },
  { id: 2, image: Bear3, title: 'Item 2' },
  { id: 3, image: Bear1, title: 'Item 3' },
  { id: 4, image: Bear2, title: 'Item 4' },
  { id: 5, image: Bear1, title: 'Item 5' },
  { id: 6, image: Bear3, title: 'Item 6' },
  { id: 7, image: Bear2, title: 'Item 7' },
  { id: 8, image: Bear3, title: 'Item 8' },
]

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

const Carousel: React.FC<TagToysProps> = ({
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

  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [clickedButton, setClickedButton] = useState<null | 'left' | 'right'>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // Determine number of visible slides based on screen width
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1280) return 7; // Desktop: 5 middle + 2 side
    if (window.innerWidth >= 768) return 5;  // Tablet: 3 middle + 2 side
    return 3; // Mobile: 1 middle + 2 side
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    if (isSliding) return;
    setSlideDirection('left');
    setIsSliding(true);
    setClickedButton('left');
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + Activities.length) % Activities.length);
      setIsSliding(false);
      setClickedButton(null);
      setSlideDirection(null);
    }, 300);
  };

  const nextSlide = () => {
    if (isSliding) return;
    setSlideDirection('right');
    setIsSliding(true);
    setClickedButton('right');
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % Activities.length);
      setIsSliding(false);
      setClickedButton(null);
      setSlideDirection(null);
    }, 300);
  };

  // Get slides to display based on current index and visible count
  const getVisibleSlides = () => {
    const slides = [];
    const half = Math.floor(visibleCount / 2);
    
    // Add buffer slides on both sides to prevent gaps during animation
    const bufferSize = 1;
    for (let i = -half - bufferSize; i <= half + bufferSize; i++) {
      const index = (current + i + Activities.length) % Activities.length;
      slides.push({
        ...Activities[index],
        offset: i,
        index: index
      });
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  // Animation: move like in Carousels.tsx
  let translateX = '0%';
  if (isSliding && slideDirection === 'left') {
    translateX = '33%'; // Move right when going previous
  }
  if (isSliding && slideDirection === 'right') {
    translateX = '-33%'; // Move left when going next
  }

  return (
    <div className="w-full aspect-[13/9] md:aspect-[13/5] lg:aspect-[17/5] relative flex items-center justify-center" style={{overflow: 'visible'}}>
      <div className="flex w-full h-full items-center justify-center gap-2" style={{overflow: 'visible'}}>
        <div
          className="flex items-center justify-center gap-2 h-full"
          style={{
            width: '100%',
            transform: `translateX(${translateX})`,
            transition: isSliding ? 'transform 0.3s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
        >
          {visibleSlides.map((slide, idx) => {
            const half = Math.floor(visibleCount / 2);
            const isSide = Math.abs(slide.offset) === half;
            const isBuffer = Math.abs(slide.offset) > half;
            
            // Default state (no animation)
            let opacity = isSide ? 0.4 : isBuffer ? 0 : 1;
            let height = isSide ? '80%' : isBuffer ? '60%' : '100%';
            let display = isBuffer && !isSliding ? 'none' : 'block';
            
            // During animation, update opacity/height based on target position
            if (isSliding) {
              // Moving from side to center (left side coming in when going prev)
              if (slideDirection === 'left' && slide.offset < 0) {
                opacity = 1;
                height = '100%';
              }
              // Moving from side to center (right side coming in when going next)
              else if (slideDirection === 'right' && slide.offset > 0) {
                opacity = 1;
                height = '100%';
              }
              // Moving from center to side (going away)
              else if (slideDirection === 'left' && slide.offset > 0) {
                opacity = 0.4;
                height = '80%';
              }
              else if (slideDirection === 'right' && slide.offset < 0) {
                opacity = 0.4;
                height = '80%';
              }
              // Buffer slides entering view
              else if (Math.abs(slide.offset) > half) {
                display = 'block';
                opacity = 0.4;
                height = '80%';
              }
            }
            
            return (
              <div
                key={`${slide.index}-${idx}`}
                className="flex-shrink-0 object-cover object-center rounded-xl"
                style={{
                  display: display,
                  width: isSide || isBuffer
                    ? visibleCount === 3 ? '20%' : visibleCount === 5 ? '15%' : '12%'
                    : visibleCount === 3 ? '60%' : visibleCount === 5 ? '23.33%' : '15.2%',
                  height: height,
                  opacity: opacity,
                  zIndex: isSide || isBuffer ? 10 : 20,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  cursor: isSide ? 'pointer' : 'default',
                }}
                onClick={() => {
                  if (isSide && slide.offset < 0) {
                    prevSlide();
                  } else if (isSide && slide.offset > 0) {
                    nextSlide();
                  }
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center rounded-xl"
                  width={1920}
                  height={800}
                  loading="lazy"
                />
                {!isSide && !isBuffer && (
                  <p className="text-center font-bold" style={{ position: 'absolute', bottom: '-40px', left: 0, right: 0, color: '#2c362d', fontSize: '20px', textTransform: 'capitalize' }}>
                    {slide.title}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer ${isSliding && clickedButton === 'left' ? 'opacity-80' : ''}`}
        onClick={prevSlide}
        disabled={isSliding}
      ><RiArrowLeftWideFill /></button>
      <button
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer ${isSliding && clickedButton === 'right' ? 'opacity-80' : ''}`}
        onClick={nextSlide}
        disabled={isSliding}
      ><RiArrowRightWideFill /></button>
    </div>
  );
}

export default Carousel;