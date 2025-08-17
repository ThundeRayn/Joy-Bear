import { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RiArrowDownWideFill } from "react-icons/ri";

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
        className={`sticky top-0 left-0 w-full bg-white shadow-sm transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"
            }`}
    >

        {/* Navbar */}
        <div
            id='navbar'
            className={`bg-[#f8f8f8] p-4 flex justify-between shadow-sm shadow-gray-100`}>

            <div id='nav-logo' className='flex justify-center items-center gap-2'>
                <img src="/bear-paw.svg" alt="Joy Bear Logo" className="w-6 h-6 inline" />
                <span>Joy Bear</span>
            </div>

            <div
                id='nav-menu'
                className='flex items-center'>
                <a
                    href="#"
                    onClick={() => setOpen(!open)}
                    className='text-[#2c362d] font-sm hover:text-[#617963] transition-colors duration-300 ease-in-out'>
                    {open? <RiArrowDownWideFill size={24} />: <FiMenu size={24} />}

                </a>
            </div>
        </div>

        {/* Dropdown - suitable for desktop*/}
        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out bg-[#f8f8f8] flex items-center justify-center text-black text-normal font-normal ${open ? 'max-h-64 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        >
            <ul className='w-full flex flex-col'>
                <li className="menu-item">Home</li>
                <li className="menu-item">Products</li>
                <li className="menu-item">Activities</li>
            </ul>
        </div>

    </nav>
    
  )
}

export default Navbar