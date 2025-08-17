import React from 'react'
import Bear1 from '../assets/imgs/bear1.webp'
import Bear2 from '../assets/imgs/bear2.webp'
import Bear3 from '../assets/imgs/bear3.webp'

const ITEMS = [
  { id: 1, image: Bear2, title: 'Item 1' },
  { id: 2, image: Bear1, title: 'Item 2' },
  { id: 3, image: Bear3, title: 'Item 3' },
]

const Carousel = () => {
  return (
    <div className="flex">
      {ITEMS.map((item, index) => (
        <div 
          key={index}
          className="w-screen min-w-screen h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover object-center"/>
        </div>
      ))}
    </div>
  )
}

export default Carousel;