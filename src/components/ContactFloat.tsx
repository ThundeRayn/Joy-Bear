import { useEffect, useState } from "react";

const ContactFloat = () => {
  const [bottomPosition, setBottomPosition] = useState(8);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply bottom gap logic for md screens and larger
      if (window.innerWidth < 768) {
        setBottomPosition(8);
        return;
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      // If within 120px of the bottom, use bottom-32, otherwise bottom-8
      if (distanceFromBottom <= 64) {
        setBottomPosition(42);
      } else {
        setBottomPosition(8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div>
        {/* Floating contact button */}
        <a
            href="/contact"
            className="fixed right-8 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-Joygrey shadow-lg text-Joybrown text-lg font-bold hover:bg-Joyblue hover:text-white transition"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)", bottom: `${bottomPosition * 4}px`, transition: 'bottom 0.3s ease' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <span className="flex flex-col items-center justify-center">
                    <img src={isHovered ? "/joybear-newicon.svg" : "/joybear-newicon.svg"} alt="Contact" width={28} height={28} />
                    <span className="text-xs mt-1">Contact</span>
                </span>
            </div>
        </a>
    </div>
  )
}

export default ContactFloat