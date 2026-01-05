import { useEffect, useState } from "react";
import client from '../../Client'

const headingClass = "text-black font-semibold text-xl mb-4";
const columnClass = "";
const listClass = "space-y-2 text-black text-sm";
const linkClass = "hover:text-black hover:underline";
//const iconLinkClass = "text-black hover:text-black";
type FooterData = {
  hint: string
  slug: {
    _type: "slug";
    current: string;
  };
}

const Footer = () => {
    const [footerData, setFooterData] = useState<FooterData | null>(null)
    const{ slug } = footerData || { slug: { current: '' } };

    useEffect(() => {
    client
      .fetch(
        `*[_type == "activity" && isFeatured == true][0]{
          slug
        }`
      )
      .then(setFooterData)
      .catch(console.error)
  }, [])
  
    return (
    <footer className="bg-secondary text-black py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-9">
            {/* Line Above Section: Logo + About */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
                {/* Logo & Brand Story */}
                <div className="mb-8 lg:mb-0 lg:w-1/4">
                    <img src='/joybear-icononly.svg' alt="JoyBear Logo" className="w-full h-8 m-2" />
                    <p className="text-black text-sm w-full lg:pl-6">
                        JoyBear sells licensed IP toys worldwide, 
                        offering OEM and ODM services that bring 
                        joy and learning to every product.
                    </p>
                    
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:w-3/4 lg:pl-16">
                    {/* Column 1: About & Products */} 
                    <div className={columnClass}>
                        <h3 className={headingClass}>Product</h3>
                        <ul className={listClass}>
                            <li><a href="/products" className={linkClass}>Explore All</a></li>
                            <li><a href="/categories" className={linkClass}>IP Collection</a></li>
                            <li><a href="/customize" className={linkClass}>OEM Custom Made</a></li>
                            {/* <li><a href="/quality" className={linkClass}>Quality Standards</a></li> */}
                            {/* <li><a href="/story" className={linkClass}>Brand Story</a></li> */}
                            {/* <li><a href="#" className={linkClass}>Certifications</a></li> */}
                            {/* <li><a href="#" className={linkClass}>Trusted Clients</a></li> */}
                        </ul>
                    </div>

                    {/* Column 2: Products & Services */}
                    <div className={columnClass}>
                        <h3 className={headingClass}>Trend</h3>
                        <ul className={listClass}>
                            
                            <li><a href="/tags/hottest" className={linkClass}>Hottest</a></li>
                            <li><a href="/tags/latest" className={linkClass}>Latest</a></li>
                            <li><a href="/tags/popular" className={linkClass}>Popular</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className={columnClass}>
                        <h3 className={headingClass}>Connect</h3>
                        <ul className={listClass}>
                            <li><a href={`/activity/${slug.current}`}  className={linkClass}>Activity</a></li>
                            <li><a href="/about" className={linkClass}>About Us</a></li>
                            
                
                            <li><a href="/contact" className={linkClass}>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright & Social */}
            <div className="border-t border-black pt-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-black text-sm">
                    <p>&copy; 2025 JoyBear. All rights reserved.</p>
                    <a href="/disclaimer" className="invisible md:visible inline-block pl-4 font-semibold hover:underline hover:translate-x-2 transition-transform duration-300 ease-in-out">View Disclaimer &rarr;</a>
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <p className="text-black text-sm font-semibold mb-2">Follow Us</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
                                        <stop offset="0%" style={{stopColor: '#fdf497'}} />
                                        <stop offset="5%" style={{stopColor: '#fdf497'}} />
                                        <stop offset="45%" style={{stopColor: '#fd5949'}} />
                                        <stop offset="60%" style={{stopColor: '#d6249f'}} />
                                        <stop offset="90%" style={{stopColor: '#285AEB'}} />
                                    </radialGradient>
                                </defs>
                                <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path fill="#000000" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                <path fill="#00F2EA" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" opacity="0.15"/>
                                <path fill="#FF004F" d="M19.59 7.09a4.83 4.83 0 0 1-3.77-4.25V2.4h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.8a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.5a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" opacity="0.2"/>
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                                <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <a href="/disclaimer" className="md:invisible inline-block mt-4 font-semibold hover:translate-x-2 transition-transform duration-300 ease-in-out">View Disclaimer &rarr;</a>
            </div>
        </div>
    </footer>

  )
}

export default Footer