import { useState, useEffect } from 'react';
import reactLogo from '../assets/logo.svg';
import hamburgerIcon from '../assets/burger.svg'; 
import earth from '../assets/earth.svg';
import Greater from '../assets/Greater.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const checkWindowSizeAndCloseMenu = () => {
    
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowSizeAndCloseMenu);

    
    return () => {
      window.removeEventListener('resize', checkWindowSizeAndCloseMenu);
    };
  }, []);

  return (
    <div>
      <div className="container mx-auto flex justify-between items-center max-w-[95%] p-1 leading-4">
        {/* Left side */}
        <div className="flex items-center space-x-8 lg:flex lg:relative">
          <img src={reactLogo} className="w-[25%] h-16 leading-[80px] md:leading-[80px]" alt="React logo" />
          <div className="flex items-center">
            <p className="flex text-gray-800 font-semibold hidden md:block">All Services</p>
            <img src={Greater} alt="arrow" className="w-6 h-6 transform rotate-90 ml-1 hidden md:block" />
          </div>
          <p className="text-gray-800 font-semibold hidden md:block">Get Hired</p>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-8 lg:flex lg:relative">
          <div className="flex items-center space-x-3 hidden md:flex">
            <img src={earth} className="w-6 h-6" alt="Earth" />
            <p className="text-sm ml-1">English</p>
            <img src={Greater} alt="arrow" className="w-6 h-6 transform rotate-90 ml-1" />
          </div>
          <button className="rounded-full hover:bg-black border border-black hover:text-white font-semibold py-2 px-4 transition-all duration-300 hidden md:flex">Login</button>
          <img src={hamburgerIcon} className="w-6 h-6 md:hidden" alt="Hamburger" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {/* Responsive menu */}
      <div className="flex justify-start md:pl-10 ">
  {menuOpen && (
    <div className="flex flex-col ml-4 pb-4"> 
      <p className="text-gray-800 font-semibold mb-4">All Services</p>
      <p className="text-gray-800 font-semibold mb-4">Get Hired</p>
      <div className="flex items-center space-x-3 mb-4">
        <p className="text-sm font-semibold">English</p>
      </div>
      <button className="rounded-full hover:bg-black border bg-blue-400 border-black hover:text-white font-semibold py-2 px-4 transition-all duration-300 ">Login</button>
    </div>
  )}
</div>

    </div>
  );
};

export default Navbar;
