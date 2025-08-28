import React from 'react'

const Certification = () => {
  return (
            <div className="w-full py-16 px-10 lg:px-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h2>
                <p className="text-gray-600 mb-6">
                    At <span className="font-semibold">Joybear</span>, we take pride in our commitment to quality and safety. Our products meet and exceed international standards, ensuring a safe play environment for children everywhere.
                </p>
                {/* Carousel Section */}
                <div className="w-full max-w-6xl relative mx-auto">
                    {/* Carousel Buttons (not functional) */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10">
                        ←
                    </button>
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10">
                        →
                    </button>
                    <div className="overflow-x-auto scrollbar-hide">
                        <ul className="flex gap-4 py-4 px-2 min-w-full">
                            {/* Carousel Items */}
                            {[
                                { src: "https://picsum.photos/id/1015/600/400", label: "AWS Certified" },
                                { src: "https://picsum.photos/id/1025/600/400", label: "Google Cloud" },
                                { src: "https://picsum.photos/id/1035/600/400", label: "Azure Certified" },
                                { src: "https://picsum.photos/id/1045/600/400", label: "React Developer" },
                                { src: "https://picsum.photos/id/1055/600/400", label: "Kubernetes Admin" },
                            ].map((item, idx) => (
                                <li key={idx} className="flex-shrink-0 w-1/2 md:w-1/4 p-4">
                                    <div className="flex flex-col items-center">
                                        <img src={item.src} alt={item.label} className="w-40 h-40 object-cover rounded-xl shadow-md" />
                                        <p className="mt-2 text-center text-sm font-medium">{item.label}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default Certification