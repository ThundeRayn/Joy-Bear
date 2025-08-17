import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#bcc5bc] p-2 flex justify-center'>
        <a 
          href="#" 
          className="
            font-normal text-[#2c362d] font-sm
            hover:pointer hover:text-[#617963]
            transition-colors duration-300 ease-in-out
            opacity-0 animate-[fadeIn_1s_ease-in_forwards]"
            >
            10% discount for new customer →
        </a>
    </div>
  )
}

export default Banner