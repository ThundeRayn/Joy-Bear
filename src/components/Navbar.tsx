import { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RiArrowDownWideFill } from "react-icons/ri";
import Search from './Search'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [open,setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
    const threshold = window.innerHeight * 0.5
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
        className={`sticky top-0 left-0 w-full bg-white transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"
            }`}
    >

        {/* Navbar */}
        <div
            id='navbar'
            className={`bg-[#f8f8f8] shadow-gray-100`}>

          {/* Desktop: Logo centered */}
          <div className='hidden md:flex justify-center items-center p-4'>
            <div className="w-full max-w-6xl mx-auto flex items-center">

              <div className="flex-1 flex justify-start">
                <div className="w-full max-w-xs">
                  <Search />
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <a href='/'>
                  <div id='nav-logo' className='flex justify-center items-center gap-2'>
                      <img src="/joybear-full.svg" alt="Joy Bear Logo" className="w-14 h-14 inline" />
                  </div>
                </a>
              </div>

              <div className="flex-1 flex justify-end">
                <a
                  href="/about"
                  className="inline-block px-6 py-2 rounded-xl border border-Joybrown text-Joybrown font-medium transition-colors duration-200 hover:text-[#8b6f47] hover:border-[#8b6f47] whitespace-nowrap"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Menu centered */}
          <div className='hidden md:flex justify-center items-center pb-4'>
            <ul className='flex items-center gap-6'>
              <li>
                <a href='/products' className="text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out">EXPLORE ALL</a>
              </li>
              <li>
                <a href='/categories' className="text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out">CATEGORIES</a>
              </li>
              <li>
                <a href='/popular' className="text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out">POPULAR</a>
              </li>
              <li>
                <a href='/latest' className="text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out">LATEST</a>
              </li>
              <li>
                <a href='/customize' className="text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out">CUSTOMIZE</a>
              </li>
            </ul>
          </div>

          {/* Mobile: Logo and Menu toggle side by side */}
          <div className='md:hidden p-4 flex justify-between'>
            <a href='/'>
              <div id='nav-logo' className='flex justify-center items-center gap-2'>
                  <img src="/bear-paw.svg" alt="Joy Bear Logo" className="w-6 h-6 inline" />
                  <span>Joy Bear Toys</span>
              </div>
            </a>

            <div
                id='nav-menu'
                className='flex items-center gap-6'>
                {/* Mobile menu toggle */}
                <a
                    href="#"
                    onClick={() => setOpen(!open)}
                    className='text-[#2c362d] font-sm hover:text-[#617963] transition-colors duration-300 ease-in-out'>
                    {open? <RiArrowDownWideFill size={24} />: <FiMenu size={24} />}
                </a>
            </div>
          </div>
        </div>

        {/* Dropdown - only visible on mobile */}
        <div
          className={`w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#f8f8f8] flex items-center justify-center text-black text-normal font-normal ${open ? 'max-h-64 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        >
            <ul className='w-full flex flex-col'>
                <li>
                  <a href='/' className="menu-item">Home</a>
                </li>
                <li>
                  <a href='/about' className="menu-item">About</a>
                </li>
                <li>
                  <a href='/products' className="menu-item">Toys</a>
                </li>
                <li>
                  <a href='/customize' className="menu-item">Customize</a>
                </li>
            </ul>
        </div>

    </nav>
    
  )
}

export default Navbar