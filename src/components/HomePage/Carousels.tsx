import { useState } from 'react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

import Bear1Img from '../../assets/imgs/Bear1_11zon.webp'
import Bear2Img from '../../assets/imgs/Bear2_11zon.webp'
import Bear3Img from '../../assets/imgs/Bear3_11zon.webp'

const Bear1 = Bear1Img;
const Bear2 = Bear2Img;
const Bear3 = Bear3Img;

const Activities = [
  { id: 1, image: Bear2, title: 'Item 1' },
  { id: 2, image: Bear1, title: 'Item 2' },
  { id: 3, image: Bear3, title: 'Item 3' },
]

const Carousels = () => {
  // Track which image should be shown in the center during animation
  const [animatingIdx, setAnimatingIdx] = useState<number | null>(null);
  // ...existing code...
    // Animation direction state
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

    // Modified navigation to set direction
    const prevSlide = () => {
      if (isSliding) return;
      setSlideDirection('left');
      setIsSliding(true);
      setAnimatingIdx(current - 1 < 1 ? Activities.length : current - 1);
      setClickedButton('left');
      setTimeout(() => {
        setCurrent(current - 1 < 1 ? Activities.length : current - 1);
        setIsSliding(false);
        setClickedButton(null);
        setSlideDirection(null);
        setAnimatingIdx(null);
      }, 500);
    };
    const nextSlide = () => {
      if (isSliding) return;
      setSlideDirection('right');
      setIsSliding(true);
      setAnimatingIdx(current + 1 > Activities.length ? 1 : current + 1);
      setClickedButton('right');
      setTimeout(() => {
        setCurrent(current + 1 > Activities.length ? 1 : current + 1);
        setIsSliding(false);
        setClickedButton(null);
        setSlideDirection(null);
        setAnimatingIdx(null);
      }, 300);
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
    /* const goTo = (idx: number, btn: 'left' | 'right') => {
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
      }, 300);
    };*/


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

    // During animation, center image is animatingIdx, otherwise current
    const centerIdx = isSliding && animatingIdx !== null ? animatingIdx : current;

    // Animation: move and grow
    let translateX = '0%';
    let scalePrev = 'scale-90';
    let scaleCurrent = 'scale-100';
    let scaleNext = 'scale-90';
    let opacityPrev = 'opacity-40';
    let opacityCurrent = 'opacity-100';
    let opacityNext = 'opacity-40';
    let zPrev = 'z-10';
    let zCurrent = 'z-20';
    let zNext = 'z-10';

    if (isSliding && slideDirection === 'left') {
      // Move left: previous image moves to center, center moves to right
      translateX = '33%'; // Only enough to bring prev to center
      scalePrev = 'scale-100';
      scaleCurrent = 'scale-90';
      scaleNext = 'scale-90';
      opacityPrev = 'opacity-100';
      opacityCurrent = 'opacity-40';
      opacityNext = 'opacity-40';
      zPrev = 'z-20';
      zCurrent = 'z-10';
      zNext = 'z-10';
    }
    if (isSliding && slideDirection === 'right') {
      // Move right: next image moves to center, center moves to left
      translateX = '-33%'; // Only enough to bring next to center
      scalePrev = 'scale-90';
      scaleCurrent = 'scale-90';
      scaleNext = 'scale-100';
      opacityPrev = 'opacity-40';
      opacityCurrent = 'opacity-40';
      opacityNext = 'opacity-100';
      zPrev = 'z-10';
      zCurrent = 'z-10';
      zNext = 'z-20';
    }

    // Center image size animation logic (after all variables are defined)
    let centerW = '60%';
    let centerH = '100%';
    if (isSliding && animatingIdx !== null) {
      if ((slideDirection === 'left' && animatingIdx === prevIdx) || (slideDirection === 'right' && animatingIdx === nextIdx)) {
        centerW = '60%';
        centerH = '100%';
      } else {
        centerW = '20%';
        centerH = '80%';
      }
    }

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
              className={`w-[20%] h-[80%] object-cover object-center rounded-xl transition-all duration-300 ${scalePrev} ${opacityPrev} ${zPrev}`}
              width={1920}
              height={800}
              loading="lazy"
            />
            {/* Center Slide (animated) */}
            <img
              src={getSlide(centerIdx).image}
              alt={getSlide(centerIdx).title}
              className={`object-cover object-center shadow-lg rounded-xl transition-all duration-300 ${scaleCurrent} ${opacityCurrent} ${zCurrent}`}
              style={{
                width: centerW,
                height: centerH,
              }}
              width={1920}
              height={800}
              loading="lazy"
            />
            {/* Next Slide */}
            <img
              src={getSlide(nextIdx).image}
              alt={getSlide(nextIdx).title}
              className={`w-[20%] h-[80%] object-cover object-center rounded-xl transition-all duration-300 ${scaleNext} ${opacityNext} ${zNext}`}
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