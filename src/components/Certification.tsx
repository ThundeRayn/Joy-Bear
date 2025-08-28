import React, { useState } from 'react'
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

const Certification = () => {
        // Carousel data
        const items = [
            { src: "https://picsum.photos/id/1015/600/400", label: "AWS Certified" },
            { src: "https://picsum.photos/id/1025/600/400", label: "Google Cloud" },
            { src: "https://picsum.photos/id/1035/600/400", label: "Azure Certified" },
            { src: "https://picsum.photos/id/1045/600/400", label: "React Developer" },
            { src: "https://picsum.photos/id/1055/600/400", label: "Kubernetes Admin" },
        ];

        // Modal state
        const [modalImg, setModalImg] = useState<null | { src: string; label: string }>(null);

    // Responsive: 2 on mobile, 4 on desktop
    const [visible, setVisible] = useState(0); // index of first visible item

    // Determine how many items to show based on screen width
    const getVisibleCount = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 768) return 4;
        }
        return 2;
    };

    const [visibleCount, setVisibleCount] = useState(getVisibleCount());

    React.useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, items.length - visibleCount);

    const handlePrev = () => setVisible((v) => Math.max(0, v - 1));
    const handleNext = () => setVisible((v) => Math.min(maxIndex, v + 1));

    return (
        <div className="w-full py-16 px-10 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-gray-600 mb-6">
                At <span className="font-semibold">Joybear</span>, we take pride in our commitment to quality and safety. Our products meet and exceed international standards, ensuring a safe play environment for children everywhere.
            </p>
            {/* Carousel Section */}
            <div className="w-full max-w-6xl relative mx-auto">
                {/*buttons*/}
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer transition"
                    onClick={handlePrev}
                    disabled={visible === 0}
                    style={{ opacity: visible === 0 ? 0.1 : 1 }}
                ><RiArrowLeftWideFill /></button>

                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-[#2c362d] bg-white rounded-full cursor-pointer transition"
                    onClick={handleNext}
                    disabled={visible === maxIndex}
                    style={{ opacity: visible === maxIndex ? 0.1 : 1 }}
                ><RiArrowRightWideFill /></button>

                <div className="overflow-hidden">
                    <ul
                        className="flex gap-4 py-4 px-2 min-w-full transition-transform duration-500"
                        style={{ transform: `translateX(-${visible * (100 / visibleCount)}%)` }}
                    >
                        {items.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex-shrink-0 w-1/2 md:w-1/4 p-4"
                                style={{ minWidth: visibleCount === 2 ? '50%' : '25%' }}
                            >
                                                <div className="flex flex-col items-center">
                                                    <img
                                                        src={item.src}
                                                        alt={item.label}
                                                        className="w-40 h-40 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
                                                        onClick={() => setModalImg(item)}
                                                    />
                                                    <p className="mt-2 text-center text-sm font-medium">{item.label}</p>
                                                </div>
                            </li>
                        ))}
                    </ul>
                        {/* Modal for full image view */}
                        {modalImg && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                                onClick={() => setModalImg(null)}
                            >
                                <div
                                    className="relative max-w-full max-h-full flex items-center justify-center"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2 pb-1 hover:bg-opacity-80 z-10 cursor-pointer"
                                        onClick={() => setModalImg(null)}
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                    <img
                                        src={modalImg.src}
                                        alt={modalImg.label}
                                        className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
            </div>
        </div>
  )
}

export default Certification