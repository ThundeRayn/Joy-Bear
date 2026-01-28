import { useState } from 'react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

const Certification = () => {
    const animationStyle = `
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        .animate-fadeIn {
            animation: fadeIn 0.4s ease-in-out;
        }
    `;
        // Pagination data
        const itemsBase = [
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert3_lvewgm.jpg", label: "Recycled Materials" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert1_imtkwd.png", label: "Sedex" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert6_iccjux.png", label: "FSC" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205580/cert4_nx3rm9.png", label: "BSCI" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205583/cert7_tayiok.png", label: "ISO" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205581/cert8_y7mjg3.png", label: "Walmart" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert5_jfyfzf.png", label: "Recycled Blended" }
        ];

        // Mobile only (< 768px): move Walmart to last; iPad and Desktop: keep original order
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const items = isMobile ? [
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert3_lvewgm.jpg", label: "Recycled Materials" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1765112061/cert1_imtkwd.png", label: "Sedex" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert6_iccjux.png", label: "FSC" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205580/cert4_nx3rm9.png", label: "BSCI" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205583/cert7_tayiok.png", label: "ISO" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205579/cert5_jfyfzf.png", label: "Recycled Blended" },
            { src: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769205581/cert8_y7mjg3.png", label: "Walmart" }
        ] : itemsBase;

        const [currentPage, setCurrentPage] = useState(0);

        // Responsive items per page: 4 for mobile and iPad, all items for desktop
        const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
        const itemsPerPage = isDesktop ? items.length : 4;
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const startIndex = currentPage * itemsPerPage;
        const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

        const handlePrev = () => setCurrentPage((p) => Math.max(0, p - 1));
        const handleNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

    return (
        <div className="w-full py-16 px-5 lg:px-20 md:px-10">
            <style>{animationStyle}</style>
            {/* Text Section */}
            <div className="px-5 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Our Factory Certifications</h2>
                <p className="text-gray-600 mb-6">
                    At <span className="font-semibold">Joybear</span>, we take pride in our commitment to quality and safety. 
                </p>
            </div>
            {/* Pagination Section */}
            <div className="w-full max-w-6xl relative mx-auto px-5">
                {/* Certification Grid */}
                <div className="py-8 flex justify-center">
                    <div key={currentPage} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-fit animate-fadeIn" style={{ gridAutoFlow: 'row', justifyItems: 'center' }}>
                        {currentItems.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="flex flex-col items-center"
                                style={item.label === 'Walmart' ? { gridColumn: 'span 2' } : {}}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className={item.label === 'Walmart' ? "w-56 h-24 md:w-72 md:h-40 object-contain rounded-xl hover:scale-105 transition-transform" 
                                        : item.label === 'ISO' ? "w-24 h-24 md:w-32 md:h-42 object-contain rounded-xl hover:scale-105 transition-transform" : "w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl hover:scale-105 transition-transform"}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 py-8">
                        <button
                            className="p-2 text-Joyblue bg-white rounded-full cursor-pointer transition hover:bg-gray-100 disabled:opacity-30"
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            aria-label="Previous page"
                        >
                            <RiArrowLeftWideFill size={24} />
                        </button>
                        
                        <span className="text-sm font-medium text-gray-600">
                            Page {currentPage + 1} of {totalPages}
                        </span>

                        <button
                            className="p-2 text-Joyblue bg-white rounded-full cursor-pointer transition hover:bg-gray-100 disabled:opacity-30"
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            aria-label="Next page"
                        >
                            <RiArrowRightWideFill size={24} />
                        </button>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Certification