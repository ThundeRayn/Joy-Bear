import { useState, useRef } from 'react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

import Bear1 from '../assets/imgs/bear1_11zon.webp'
import Bear2 from '../assets/imgs/bear2_11zon.webp'
import Bear3 from '../assets/imgs/bear3_11zon.webp'

const Activities = [
  { id: 1, image: Bear2, title: 'Item 1' },
  { id: 2, image: Bear1, title: 'Item 2' },
  { id: 3, image: Bear3, title: 'Item 3' },
]

const Carousel = () => {
    const [current, setCurrent] = useState(1); // Start at first real slide
    const [transition, setTransition] = useState(true);
    const slidesRef = useRef<HTMLDivElement>(null);

    // Prepare slides: [last, ...Activities, first]
    const slides = [
      Activities[Activities.length - 1],
      ...Activities,
      Activities[0]
    ];


    // Prevent rapid clicks by disabling navigation during transition
    const [isSliding, setIsSliding] = useState(false);

    const goTo = (idx: number) => {
      if (isSliding) return;
      setTransition(true);
      setCurrent(idx);
      setIsSliding(true);
    };

    const prevSlide = () => {
      goTo(current - 1);
    };
    const nextSlide = () => {
      goTo(current + 1);
    };

    // Handle transition end for seamless looping
    const handleTransitionEnd = () => {
      setIsSliding(false);
      if (current === 0) {
        setTransition(false);
        setCurrent(Activities.length);
      } else if (current === slides.length - 1) {
        setTransition(false);
        setCurrent(1);
      }
    };

    // Calculate transform
    const style = {
      transform: `translateX(-${current * 100}%)`,
      transition: transition ? 'transform 0.3s' : 'none',
    };

    return (
      <div className="w-full h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden relative">
        <div
          ref={slidesRef}
          className="flex h-full"
          style={style}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((activity, index) => (
            <img
              key={index}
              src={activity.image}
              loading="lazy"
              alt={activity.title}
              width={1920}
              height={800}
              className="w-full h-full object-cover object-center flex-shrink-0"
            />
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white bg-opacity-50 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-pointer"
          onClick={prevSlide}
          disabled={isSliding}
        ><RiArrowLeftWideFill /></button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white bg-opacity-50 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-pointer"
          onClick={nextSlide}
          disabled={isSliding}
        ><RiArrowRightWideFill /></button>
      </div>
    );
}

export default Carousel;