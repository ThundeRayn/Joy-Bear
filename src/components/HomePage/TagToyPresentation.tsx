import { useState } from 'react'
//import TagToys from './TagToys';
//import Carousel from './Carousel';
//import NewToys from '../NewToys';
import TagToys from './TagToys2';



const TagToyPresentation = () => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C'>('A');

  return (
    <div className="bg-tertiary pt-1">
        <div className="max-w-7xl mx-auto">
          {/* Option Tabs */}
          <div className="flex flex-wrap gap-0 sm:gap-8 mb-2 justify-center">
            
            <button
              onClick={() => setSelectedOption('B')}
              className={`group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold transition-all duration-300 ${
                selectedOption === 'B'
                  ? 'text-Joyblue'
                  : 'text-gray-200 hover:text-gray-400'
              }`}
            >
              HOTTEST
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-Joyblue transition-transform duration-300 origin-left ${
                selectedOption === 'B' ? 'scale-x-100' : 'scale-x-0'
              }`}></span>
            </button>
            <button
              onClick={() => setSelectedOption('A')}
              className={`group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold transition-all duration-300 ${
                selectedOption === 'A'
                  ? 'text-Joyblue'
                  : 'text-gray-200 hover:text-gray-400'
              }`}
            >
              LATEST
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-Joyblue transition-transform duration-300 origin-left ${
                selectedOption === 'A' ? 'scale-x-100' : 'scale-x-0'
              }`}></span>
            </button>
            <button
              onClick={() => setSelectedOption('C')}
              className={`group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold transition-all duration-300 ${
                selectedOption === 'C'
                  ? 'text-Joyblue'
                  : 'text-gray-200 hover:text-gray-400'
              }`}
            >
              POPULAR
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-Joyblue transition-transform duration-300 origin-left ${
                selectedOption === 'C' ? 'scale-x-100' : 'scale-x-0'
              }`}></span>
            </button>
          </div>

          {/* Content Section */}
          {/* <Carousel/> */}
          {selectedOption === 'A' && <TagToys title='Latest' tagName='Latest' viewMoreLink='/tags/latest'/>}
          {selectedOption === 'B' && <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/>}
          {selectedOption === 'C' && <TagToys title='Popular' tagName='Popular' viewMoreLink='/tags/popular'/>}
          
 
          {/*options*/}
          {/* <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4 text-black">{currentOption.title}</h3>
            <p className="text-gray-600 mb-6 text-lg">
              {currentOption.description}
            </p>
            <button className={`w-full border-2 ${currentOption.buttonColor} font-semibold py-3 px-6 transition-colors duration-300`}>
              {currentOption.buttonText}
            </button>
          </div> */}
        </div>
    </div>
  )
}

export default TagToyPresentation