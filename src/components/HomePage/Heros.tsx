import { useState, useEffect } from 'react'
//import { RiArrowLeftWideFill } from "react-icons/ri";
//import { RiArrowRightWideFill } from "react-icons/ri";

// const Bear1 = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img5_sjffnq.png";
// const Bear2 = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img6_mtqm9x.png";
// const Bear3 = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img3_crddrj.png";

const Bear1 = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768334143/slides1_mylrf5.png";
const Bear2 = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768334149/slides4_yfw9tl.png";
const Bear3 = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768334156/slides3_d8uokh.png";
const Bear4 = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768334138/slides2_irmjes.png";

const Activities = [
  { id: 1, image: Bear1, title: 'Full Customization', description: '' },
  { id: 2, image: Bear2, title: 'Factory Direct Manufacturing', description: '' },
  { id: 3, image: Bear3, title: 'Soft, Safe & Certified', description: '' },
  { id: 4, image: Bear4, title: 'From Sample to Mass Production', description: '' },
]

const Heros = () => {
  const [current, setCurrent] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  //const [clickedButton, setClickedButton] = useState<null | 'left' | 'right'>(null);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setCurrent(current - 1);
    setTimeout(() => {
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
    setCurrent(current + 1);
    setTimeout(() => {
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
    <div className="w-full pt-2 md:pt-4 pb-2 md:pb-4 aspect-[13/9] md:aspect-[13/7] lg:aspect-[17/7] overflow-hidden relative">
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
                <h2 className="text-2xl md:text-4xl font-bold font-serif mb-2">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<button
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer ${isSliding && clickedButton === 'left' ? 'opacity-80' : ''}`}
        onClick={prevSlide}
        disabled={isSliding}
      ><RiArrowLeftWideFill /></button>
      <button
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer ${isSliding && clickedButton === 'right' ? 'opacity-80' : ''}`}
        onClick={nextSlide}
        disabled={isSliding}
      ><RiArrowRightWideFill /></button> */}
    </div>
  );
}

export default Heros;