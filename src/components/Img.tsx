
const Img = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <img 
        src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768334363/factory_dk5y9b.png"
        alt="Full width image"
        className="w-full h-auto max-h-[190px] md:max-h-[380px] lg:max-h-[550px] object-cover object-bottom"
      />
      <div className="absolute bottom-0 left-0 p-4 md:p-6 lg:p-8">
        <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">Our own factory</p>
        <p className="text-sm md:text-base lg:text-lg font-semibold text-white">High Efficiency · High Standards · High Quality</p>
      </div>
    </div>
  )
}

export default Img