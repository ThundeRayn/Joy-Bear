

const headingClass = "text-black font-semibold mb-4";
const listClass = "space-y-2 text-black text-sm";
const linkClass = "hover:text-black hover:underline";
const iconLinkClass = "text-black hover:text-black";

const Footer = () => {
    return (
        <footer className="bg-[#86A788] text-black py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Top Section: Logo + About */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
                {/* Logo & Brand Story */}
                <div className="mb-8 lg:mb-0 lg:w-1/4">
                    <span>logo</span>
                    <p className="text-black text-sm">ToyCo has been creating innovative and safe toys for children worldwide. Our mission is to bring joy and learning together in every product.</p>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:w-3/4">
                    {/* Column 1: About & Products */}
                    <div>
                        <h3 className={headingClass}>About</h3>
                        <ul className={listClass}>
                            <li><a href="#" className={linkClass}>Our Story</a></li>
                            <li><a href="#" className={linkClass}>Brand Story</a></li>
                            <li><a href="#" className={linkClass}>Company Capability</a></li>
                            <li><a href="#" className={linkClass}>Quality Standards</a></li>
                            <li><a href="#" className={linkClass}>Certifications</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Products & Services */}
                    <div>
                        <h3 className={headingClass}>Products & Services</h3>
                        <ul className={listClass}>
                            <li><a href="#" className={linkClass}>Product Display</a></li>
                            <li><a href="#" className={linkClass}>OEM Custom Made</a></li>
                            <li><a href="#" className={linkClass}>Successful Examples</a></li>
                            <li><a href="#" className={linkClass}>Trusted Clients</a></li>
                            <li><a href="#" className={linkClass}>Cooperators</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Careers */}
                    <div>
                        <h3 className={headingClass}>Connect</h3>
                        <ul className={listClass}>
                            <li><a href="#" className={linkClass}>Contact Us</a></li>
                            <li><a href="#" className={linkClass}>Join Us</a></li>
                            <li><a href="#" className={linkClass}>News</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright & Social */}
            <div className="border-t border-black pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-black text-sm">&copy; 2025 ToyCo. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className={iconLinkClass} aria-label="LinkedIn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.1h.1c.67-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-5v-6.9c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z" />
                        </svg>
                    </a>
                    <a href="#" className={iconLinkClass} aria-label="Twitter">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.5 2.1-2.6-.9.6-1.9 1-3 1.2-.9-.9-2.2-1.5-3.6-1.5-2.7 0-4.8 2.2-4.8 4.8 0 .4 0 .8.1 1.1-4-.2-7.6-2.1-10-5-.4.6-.6 1.3-.6 2 0 1.3.6 2.5 1.5 3.2-.6 0-1.1-.2-1.6-.5v.1c0 2.3 1.6 4.2 3.7 4.6-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3-1.7 1.3-3.9 2-6.3 2-.4 0-.7 0-1-.1 2.3 1.5 5.1 2.4 8 2.4 9.6 0 14.9-8 14.9-14.9v-.7c1-.7 1.8-1.5 2.4-2.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer