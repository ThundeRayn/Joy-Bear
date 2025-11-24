import { useState, useEffect } from 'react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

import Bear1Img from '../../assets/imgs/Bear1_11zon.webp'
import Bear2Img from '../../assets/imgs/Bear2_11zon.webp'
import Bear3Img from '../../assets/imgs/Bear3_11zon.webp'

const Bear1 = Bear1Img;
const Bear2 = Bear2Img;
const Bear3 = Bear3Img;

const Activities = [
  { id: 1, image: Bear2, title: 'Item 1', description: 'Description for Item 1' },
  { id: 2, image: Bear1, title: 'Item 2', description: 'Description for Item 2' },
  { id: 3, image: Bear3, title: 'Item 3', description: 'Description for Item 3' },
]

const Heros = () => {
  const [current, setCurrent] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const [clickedButton, setClickedButton] = useState<null | 'left' | 'right'>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add keyframes for text animation
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideUpFade {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance slide every 30 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [current, isSliding]);
  //end of auto-advance

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
    <div className="w-full pt-2 lg:pt-4 pb-6 aspect-[13/9] md:aspect-[13/7] lg:aspect-[17/7] overflow-hidden relative">
      <div className="w-full h-full flex items-center justify-center" style={{overflow: 'visible'}}>
        <div
          className="flex h-full gap-2 md:gap-4"
          style={{
            transform: isMobile 
              ? `translateX(calc(-${current * 80}% - ${current * 8}px + 10%))` 
              : `translateX(calc(-${current * 80}% - ${current * 16}px + 10%))`,
            transition: isSliding ? 'transform 0.8s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="h-full flex-shrink-0 cursor-pointer relative"
              style={{ 
                width: '80%',
                opacity: idx === current ? 1 : 0.4,
                transition: isSliding ? 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)' : 'none'
              }}
              onClick={idx < current ? prevSlide : idx > current ? nextSlide : undefined}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                width={1920}
                height={800}
                loading="lazy"
              />
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)'
                }}
              ></div>
              <div 
                className="absolute bottom-8 left-8 right-8 text-white z-10"
                style={{
                  animation: idx === current ? 'slideUpFade 0.8s ease-out' : 'none',
                  opacity: idx === current ? 1 : 0,
                  transform: idx === current ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
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