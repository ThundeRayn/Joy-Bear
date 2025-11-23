import { useState } from 'react'
import TagToys from './TagToys';
import Carousel from './Carousel';



const TagToyPresentation = () => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C'>('A');

  const options = {
    A: {
      title: 'Option A',
      description: 'This is the detailed description for Option A. It provides comprehensive information about this particular choice and its benefits.',
      buttonText: 'Choose A',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    B: {
      title: 'Option B',
      description: 'This is the detailed description for Option B. It highlights unique features and advantages that make this option stand out.',
      buttonText: 'Choose B',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    C: {
      title: 'Option C',
      description: 'This is the detailed description for Option C. It explains the specific characteristics and value proposition of this selection.',
      buttonText: 'Choose C',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  };

  const currentOption = options[selectedOption];

  return (
    <div className="bg-Joybrown pb-12 px-1">
        <div className="max-w-7xl mx-auto">
          {/* Option Tabs */}
          <div className="flex flex-wrap gap-0 sm:gap-4 mb-8 justify-center">
            <button
              onClick={() => setSelectedOption('A')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold transition-all duration-300 border-2 border-white ${
                selectedOption === 'A'
                  ? 'bg-Joyblue text-white scale-105'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Lattest
            </button>
            <button
              onClick={() => setSelectedOption('B')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold transition-all duration-300 border-2 border-white ${
                selectedOption === 'B'
                  ? 'bg-Joyblue text-white scale-105'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Hottest
            </button>
            <button
              onClick={() => setSelectedOption('C')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold transition-all duration-300 border-2 border-white ${
                selectedOption === 'C'
                  ? 'bg-Joyblue text-white scale-105'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Popular
            </button>
          </div>

          {/* Content Section */}
          <Carousel/>
          {/* <TagToys title='Hottest' tagName='Hottest' viewMoreLink='/tags/hottest'/> */}
          
          {/*options*/}
          {/* <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">{currentOption.title}</h3>
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