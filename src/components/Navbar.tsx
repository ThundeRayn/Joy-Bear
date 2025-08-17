import { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
    const threshold = window.innerHeight * 0.4
      if (window.scrollY > lastScrollY && window.scrollY > threshold) {
        // scrolling down hide
        setShow(false);
      } else {
        // scrolling up show
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
        className={`sticky top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"
            }`}
    >

        <div
            id='navbar'
            className={`bg-[#f8f8f8] p-4 flex justify-between shadow-sm shadow-gray-100`}>

            <div id='nav-logo'>
                Joy Bear Logo
            </div>

            <div
                id='nav-menu'
                className='flex items-center'>
                <a
                    href="#"
                    className='text-[#2c362d] font-sm hover:text-[#617963] transition-colors duration-300 ease-in-out'>
                    <FiMenu size={24} />
                </a>
            </div>
        </div>

    </nav>
    
  )
}

export default Navbar