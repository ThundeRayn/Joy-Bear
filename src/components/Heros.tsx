import { useState } from 'react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

import Bear1Img from '../assets/imgs/Bear1_11zon.webp'
import Bear2Img from '../assets/imgs/Bear2_11zon.webp'
import Bear3Img from '../assets/imgs/Bear3_11zon.webp'

const Bear1 = Bear1Img;
const Bear2 = Bear2Img;
const Bear3 = Bear3Img;

const Activities = [
  { id: 1, image: Bear2, title: 'Item 1' },
  { id: 2, image: Bear1, title: 'Item 2' },
  { id: 3, image: Bear3, title: 'Item 3' },
]

const Heros = () => {
  const [current, setCurrent] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const [clickedButton, setClickedButton] = useState<null | 'left' | 'right'>(null);

  const slides = [
    Activities[Activities.length - 1],
    ...Activities,
    Activities[0]
  ];

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setClickedButton('left');
    setCurrent(current - 1);
    setTimeout(() => {
      setClickedButton(null);
      if (current - 1 === 0) {
        setTimeout(() => {
          setIsSliding(false);
          setCurrent(Activities.length);
        }, 50);
      } else {
        setIsSliding(false);
      }
    }, 800);
  };

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setClickedButton('right');
    setCurrent(current + 1);
    setTimeout(() => {
      setClickedButton(null);
      if (current + 1 === slides.length - 1) {
        setTimeout(() => {
          setIsSliding(false);
          setCurrent(1);
        }, 50);
      } else {
        setIsSliding(false);
      }
    }, 800);
  };

  return (
    <div className="w-full pt-2 pb-6 aspect-[13/9] md:aspect-[13/7] lg:aspect-[17/7] overflow-hidden relative">
      <div className="w-full h-full flex items-center justify-center" style={{overflow: 'visible'}}>
        <div
          className="flex h-full gap-4"
          style={{
            transform: `translateX(calc(-${current * 80}% - ${current * 16}px + 10%))`,
            transition: isSliding ? 'transform 0.8s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
        >
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.image}
              alt={slide.title}
              className="h-full object-cover object-center flex-shrink-0 cursor-pointer"
              style={{ 
                width: '80%',
                opacity: idx === current ? 1 : 0.4,
                transition: isSliding ? 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)' : 'none'
              }}
              width={1920}
              height={800}
              loading="lazy"
              onClick={idx < current ? prevSlide : idx > current ? nextSlide : undefined}
            />
          ))}
        </div>
      </div>

      <button
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer ${isSliding && clickedButton === 'left' ? 'opacity-80' : ''}`}
        onClick={prevSlide}
        disabled={isSliding}
      ><RiArrowLeftWideFill /></button>
      <button
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer ${isSliding && clickedButton === 'right' ? 'opacity-80' : ''}`}
        onClick={nextSlide}
        disabled={isSliding}
      ><RiArrowRightWideFill /></button>
    </div>
  );
}

export default Heros;