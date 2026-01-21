import { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RiArrowDownWideFill } from "react-icons/ri";
import Search from './Search'
import NavDropDown from './NavDropDown';
import SearchDropDown from './SearchDropDown';


const Navbar = () => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

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

  //functions
  const handleCategoryMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setHoveredNavItem('CATEGORIES');
    setShowDropdown(true);
  }

  const handleCategoryMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredNavItem(null);
      setShowDropdown(false);
    }, 300);
    setDropdownTimeout(timeout);
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowDropdown(true);
  }

  const handleDropdownMouseLeave = () => {
    setHoveredNavItem(null);
    setShowDropdown(false);
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  }

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  }

  const handleSearchBlur = () => {
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 150);
  }

  const handleSearchClear = () => {
    setSearchQuery('');
    setIsSearchFocused(false);
  }

  //classNames
  const spanClassName = "absolute left-0 top-8 w-full h-[2px] bg-Joybrown scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left";



  return (
    <nav
      className={`sticky top-0 left-0 w-full bg-white transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"}`}
    >

    {/* Navbar */}
    <div
      id='navbar'
      className={`bg-[#f8f8f8] shadow-gray-100`}>

          {/* Desktop: Logo centered */}
          <div className='hidden md:flex justify-center items-center py-1 border-b border-b-gray-200'>
            <div className="w-full max-w-6xl mx-auto flex items-center">

              {/* <div className="flex-1 flex justify-start">
                <div className="w-full max-w-xs">
                  <Search />
                </div>
              </div> */}

              <div className="flex-1 flex justify-center">
                <a href='/'>
                  <div id='nav-logo' className='flex justify-center items-center gap-2'>
                      <img src="/joybear-icononly.svg" alt="Joy Bear Logo" className="w-16 h-16 inline" />
                      <img src="/textonly-cropped.svg" alt="Joy Bear Text Logo" className="h-6 inline" />
                  </div>
                </a>
              </div>

              {/* <div className="flex-1 flex justify-end">
                <a
                  href="mailto:hello@joybear.com"
                  className="inline-block px-6 py-2 rounded-xl border border-Joybrown text-Joybrown font-medium transition-colors duration-200 hover:text-[#8b6f47] hover:border-[#8b6f47] whitespace-nowrap"
                >
                  Contact Us Now
                </a>
              </div> */}
            </div>
          </div>


          {/* Desktop: Menu with left, center, right layout */}
          <div id='menu' className='hidden md:flex items-center justify-between p-2 w-full max-w-6xl mx-auto'>
            {/* Search on left */}
            <div className="flex-1 flex justify-start">
              <div className="w-2/3 max-w-xs">
                <Search 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  onClear={handleSearchClear}
                />
              </div>
            </div>

            {/* Menu items centered */}
            <ul className='flex flex-row items-center gap-6 justify-center'>
              <li className="relative">
                <a href='/products' className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1">
                  EXPLORE ALL
                  <span className={spanClassName}></span>
                </a>
              </li>
              <li className="relative"
                  onMouseEnter={handleCategoryMouseEnter}
                  onMouseLeave={handleCategoryMouseLeave}>
                <a href='/categories' className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1">
                  CATEGORIES
                  <span className={spanClassName}></span>
                </a>
                {/* Dropdown positioned relative to this li */}
                {showDropdown && hoveredNavItem === 'CATEGORIES' && !isSearchFocused && !searchQuery && (
                  <NavDropDown 
                    text={hoveredNavItem} 
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  />
                )}
              </li>
            
              <li className="relative">
                <a href='/customize' className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1">
                  CUSTOMIZE-ODM
                  <span className={spanClassName}></span>
                </a>
              </li>
              <li className="relative">
                <a href='/about' className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1">
                  ABOUT
                  <span className={spanClassName}></span>
                </a>
              </li>
            </ul>

            {/* Contact us on right */}
            <div className="flex-1 flex justify-end">
              <a
                href="/contact"
                className="inline-block px-6 py-2 rounded-xl border border-Joybrown text-Joybrown font-medium transition-colors duration-200 hover:text-[#8b6f47] hover:border-[#8b6f47] whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile: Logo and Menu toggle side by side */}
          <div className='md:hidden p-4 flex justify-between'>
            <a href='/'>
              <div id='nav-logo' className='flex justify-center items-center gap-2'>
                  <img src="/joybear-icononly.svg" alt="Joy Bear Logo" className="w-7 h-7 inline" />
                  <img src="/textonly-cropped.svg" alt="Joy Bear Text Logo" className="h-3 inline" />
                  {/* <span>Joy Bear Toys</span> */}
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


  {/* Search Dropdown - appears when search is focused or has input */}
  {(isSearchFocused || searchQuery) && <SearchDropDown searchQuery={searchQuery} isVisible={true} />}

        {/* Dropdown - only visible on mobile */}
        <div
          className={`w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#f8f8f8] flex items-center justify-center text-black text-normal font-normal ${open ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        >
            <div className="w-full max-w-6xl mx-auto">
              {/* Top section: Search */}
              <div className="px-4 mb-4">
                <Search 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  onClear={handleSearchClear}
                />
              </div>

              {/* Menu items */}
              <ul className='w-full flex flex-col px-4 gap-3'>
                  <li>
                    <a href='/products' className="block py-2 text-[#2c362d] hover:text-txt-secondary transition-colors">EXPLORE ALL</a>
                  </li>
                  <li>
                    <a href='/categories' className="block py-2 text-[#2c362d] hover:text-txt-secondary transition-colors">CATEGORIES</a>
                  </li>
                  <li>
                    <a href='/customize' className="block py-2 text-[#2c362d] hover:text-txt-secondary transition-colors">CUSTOMIZE-ODM</a>
                  </li>
                  <li>
                    <a href='/about' className="block py-2 text-[#2c362d] hover:text-txt-secondary transition-colors">ABOUT</a>
                  </li>
              </ul>

              {/* Bottom section: Contact Us */}
              <div className="px-4 mt-4">
                <a
                  href="/contact"
                  className="inline-block w-full text-center px-6 py-2 rounded-xl border border-Joybrown text-Joybrown font-medium transition-colors duration-200 hover:text-[#8b6f47] hover:border-[#8b6f47]"
                >
                  Contact Us
                </a>
              </div>
            </div>
        </div>

    </nav>
    
  )
}

export default Navbar