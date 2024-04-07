import { useState } from 'react';
import Heroimg from '../assets/Heroimg.png';
import Sideimg from '../assets/HeroSide.png';
import Bottom from '../assets/BottomSide.svg';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    'Classics Website', 'Advanced Website', 'Redesign Website', "Graphic Design", 'Migrate Website', 'Mobile Website'
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
  };

  return (
    <div className="relative">

      <img src={Heroimg} className="w-full h-screen md:h-screen sm:h-screen object-cover" alt="Full Screen Image"/>

      <div className='absolute inset-0 flex flex-col md:flex-row items-center justify-between lg:px-20 md:pb-16 sm:pb-12'>
        
        {/* Left Side */}
        <div className='w-full md:w-1/2 p-4 md:p-10 text-center md:text-left'>
          <p className="text-white text-xl sm:text-3xl md:text-3xl lg:text-6xl font-bold py-6">
            Hire a professional agency or freelancer
          </p>
          <div className="relative">
            <div className="mt-4 px-4 md:px-[17%] py-7 bg-transparent text-black items-center rounded-full bg-white border border-white flex justify-between cursor-pointer" onClick={toggleDropdown}>

              <span className="absolute left-0 pl-4 text-[1.2rem] font-semibold hover:text-blue-600 overflow-hidden">{selectedOption || 'Browse Services'}</span>

              <img src={Bottom} alt="arrow" className={`absolute right-0 transition-all duration-300 w-4 h-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'} mr-4 transition-transform duration-300`} />
            </div>
            {isOpen && (
              <ul className="absolute left-0 right-0 mt-1 bg-white border border-white rounded-md">
                {options.map((option, index) => (
                  <li key={index} className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <p className='text-white mt-6 text-3xl mb-3 hidden sm:hidden md:hidden lg:block text-start font-semibold'>Top requested pros</p>

          
          <div className='hidden lg:block'>
            {options.map((option, index) => (
              <button
                key={index}
                className='text-white border border-white bg-transparent mb-3 mr-4 py-3 px-7 rounded-full hover:bg-white transition-all duration-300 hover:text-black font-semibold'>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className='w-full md:w-1/2 flex justify-center items-center p-4'>
          <img src={Sideimg} className="object-cover w-full max-w-[30rem] md:max-w-full lg:max-w-[35rem] h-auto md:h-[20vh] lg:h-[35rem]" alt="Side Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
