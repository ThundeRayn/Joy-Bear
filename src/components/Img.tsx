
const Img = () => {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768334363/factory_dk5y9b.png" 
        alt="Full width image" 
        className="w-full h-[23vh] md:h-[33vh] lg:h-[70vh] object-cover md:scale-100 scale-125"
        style={{ objectPosition: 'center bottom' }}
      />
    </div>
  )
}

export default Img