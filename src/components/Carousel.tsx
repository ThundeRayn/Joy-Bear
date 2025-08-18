import { useState } from 'react'
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
    const [current, setCurrent] = useState(0);
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? Activities.length - 1 : prev - 1));
        console.log('Previous slide:', current);
    };
    const nextSlide = () => {
        setCurrent((prev) => (prev === Activities.length - 1 ? 0 : prev + 1));
        console.log('Next slide:', current);
    };

    
  return (
    <div className="w-full h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden relative">
        <div 
          className="flex transition-transform duration-300 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
            {Activities.map((activity, index) => (
            <img 
              key={index}
              src={activity.image} 
              loading="lazy"
              alt={activity.title} 
              className="w-full h-full object-cover object-center flex-shrink-0"/>
            ))}
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white bg-opacity-50 rounded-full cursor-pointer"
          onClick={prevSlide}
        ><RiArrowLeftWideFill /></button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white bg-opacity-50 rounded-full cursor-pointer"
          onClick={nextSlide}
        ><RiArrowRightWideFill /></button>
    </div>
  )
}

export default Carousel;