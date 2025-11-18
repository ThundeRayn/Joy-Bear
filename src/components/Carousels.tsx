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

const Carousels = () => {
  // ...existing code...
    // Animation direction state
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

    // Modified navigation to set direction
    const prevSlide = () => {
      setSlideDirection('left');
      goTo(current - 1, 'left');
    };
    const nextSlide = () => {
      setSlideDirection('right');
      goTo(current + 1, 'right');
    };
    const [current, setCurrent] = useState(1); // Start at first real slide
  // Removed unused transition and slidesRef

    // Prepare slides: [last, ...Activities, first]
    const slides = [
      Activities[Activities.length - 1],
      ...Activities,
      Activities[0]
    ];



    // Prevent rapid clicks by disabling navigation during transition
    const [isSliding, setIsSliding] = useState(false);
    const [clickedButton, setClickedButton] = useState<null | 'left' | 'right'>(null);

    // Handle slide navigation and wrap around
    const goTo = (idx: number, btn: 'left' | 'right') => {
      if (isSliding) return;
      let newIdx = idx;
      if (newIdx < 1) newIdx = Activities.length;
      if (newIdx > Activities.length) newIdx = 1;
      setCurrent(newIdx);
      setIsSliding(true);
      setClickedButton(btn);
      // Reset sliding after animation
      setTimeout(() => {
        setIsSliding(false);
        setClickedButton(null);
      }, 300); // match transition duration
    };


    // Removed unused handleTransitionEnd

    // Only show three slides: previous, current, next
    const getSlide = (idx: number) => {
      // Wrap around
      if (idx < 0) return slides[slides.length - 2];
      if (idx >= slides.length) return slides[1];
      return slides[idx];
    };

    const prevIdx = current - 1 < 0 ? slides.length - 2 : current - 1;
    const nextIdx = current + 1 >= slides.length ? 1 : current + 1;
  // Calculate animation offset for sliding effect (after all state declarations)
  let translateX = '0%';
  if (isSliding && slideDirection === 'left') translateX = '33%';
  if (isSliding && slideDirection === 'right') translateX = '-33%';

    return (
      <div className="w-full aspect-[13/9] md:aspect-[13/7] lg:aspect-[17/7] overflow-hidden relative flex items-center justify-center">
        <div className="flex w-full h-full items-center justify-center gap-2" style={{overflow: 'hidden'}}>
          <div
            className="flex w-full h-full"
            style={{
              transform: `translateX(${translateX})`,
              transition: isSliding ? 'transform 0.3s cubic-bezier(0.4,0,0.2,1)' : 'none',
            }}
          >
            {/* Previous Slide */}
            <img
              src={getSlide(prevIdx).image}
              alt={getSlide(prevIdx).title}
              className={
                `w-[20%] h-[80%] object-cover object-center rounded-xl transition-all duration-300`
                + (isSliding && slideDirection === 'left' ? ' scale-100 opacity-100 z-20 w-[60%] h-full' : ' opacity-40 scale-90 z-10')
              }
              style={{zIndex: isSliding && slideDirection === 'left' ? 20 : 1}}
              width={1920}
              height={800}
              loading="lazy"
            />
            {/* Current Slide */}
            <img
              src={getSlide(current).image}
              alt={getSlide(current).title}
              className={
                `w-[60%] h-full object-cover object-center shadow-lg rounded-xl transition-all duration-300`
                + (isSliding && slideDirection === 'left' ? ' scale-90 opacity-0 w-[20%] h-[80%] z-10' : '')
                + (isSliding && slideDirection === 'right' ? ' scale-90 opacity-0 w-[20%] h-[80%] z-10' : '')
              }
              style={{zIndex: 2}}
              width={1920}
              height={800}
              loading="lazy"
            />
            {/* Next Slide */}
            <img
              src={getSlide(nextIdx).image}
              alt={getSlide(nextIdx).title}
              className={
                `w-[20%] h-[80%] object-cover object-center rounded-xl transition-all duration-300`
                + (isSliding && slideDirection === 'right' ? ' scale-100 opacity-100 z-20 w-[60%] h-full' : ' opacity-40 scale-90 z-10')
              }
              style={{zIndex: isSliding && slideDirection === 'right' ? 20 : 1}}
              width={1920}
              height={800}
              loading="lazy"
            />
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

export default Carousels;