import { useState, useEffect } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "ABC Toys Inc.",
    feedback: "JoyBear's OEM service exceeded our expectations. The quality and attention to detail were outstanding. Highly recommend for custom plush projects!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Creative Brands Co.",
    feedback: "Working with JoyBear has been a pleasure. Their licensed IP toys are top-notch and our customers love them. Professional team and great communication.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Kids World Store",
    feedback: "The custom plush toys we ordered brought joy to so many children. JoyBear's craftsmanship and commitment to quality are unmatched.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Global Retail Solutions",
    feedback: "Fantastic experience from start to finish. The ODM services helped us bring our vision to life perfectly. Will definitely work with them again!",
    avatar: "DT"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsSliding(false), 300);
  };

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsSliding(false), 300);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (current + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="w-full bg-secondary py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">What Our Customers Say</h2>
          <p className="mt-2 text-lg text-gray-600">
            Trusted by businesses worldwide for quality and service
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-300 ease-in-out"
              style={{
                transform: isSliding ? 'translateX(-10px)' : 'translateX(0)',
              }}
            >
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition flex-shrink-0"
                  style={{
                    width: visibleCount === 1 ? '100%' : visibleCount === 2 ? 'calc(50% - 12px)' : 'calc(25% - 18px)'
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-Joyblue flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"{testimonial.feedback}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="p-2 text-[#2c362d] bg-white rounded-full cursor-pointer shadow-lg hover:bg-gray-100 transition"
            onClick={prevSlide}
            disabled={isSliding}
          >
            <RiArrowLeftWideFill size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isSliding) {
                    setIsSliding(true);
                    setCurrent(index);
                    setTimeout(() => setIsSliding(false), 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-white w-5' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="p-2 text-[#2c362d] bg-white rounded-full cursor-pointer shadow-lg hover:bg-gray-100 transition"
            onClick={nextSlide}
            disabled={isSliding}
          >
            <RiArrowRightWideFill size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;