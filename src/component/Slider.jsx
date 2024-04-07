import { useState } from 'react';
import stars from '../assets/stars.png';

import img2 from '../assets/2nda.webp';
import img3 from '../assets/3rda.webp';
import img4 from '../assets/4tha.webp';
import img5 from '../assets/5tha.webp';
import img6 from '../assets/6tha.webp';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      desc: "“Olya clearly understood our requirements and responded with an effective action plan. The result was a super intuitive and professional website we’re extremely proud of.”",
      star: stars,
      name: "Zaher Iyaso",
      quote: "Website redesign by Wix Partner Olya Black",
      img: img5
    },
    {
      desc: "“Fantastic service! Great website! The website was very professional. I would highly recommend. After initial payment, everything was completed within a week.”",
      star: stars,
      name: "Lisa White",
      quote: "Advanced website by Wix Partner Sara Michelle Design",
      img: img2
    },
    {
      desc: "“Galaxy is the best. They were super punctual, communicated very well … I recommend if you need some work done these are definitely the guys to do it, the site they made for me is outstanding.”",
      star: stars,
      name: "Isaiah Christopher Thomas",
      quote: "eCommerce Website by Wix Partner Galaxy Visual Media",
      img: img3
    },
    {
      desc: "“I loved working with Dave and Bethany. They were great listeners and communicated with me regularly throughout the process. It was a real collaboration and I could not be happier with the final product.”",
      star: stars,
      name: "Rosanna Maria Salcedo",
      quote: "Website redesign by Wix Partner Let’s Design Your Site",
      img: img4
    },
    {
      desc: "“Olya clearly understood our requirements and responded with an effective action plan. The result was a super intuitive and professional website we’re extremely proud of.”",
      star: stars,
      name: "Zaher Iyaso",
      quote: "Website redesign by Wix Partner Olya Black",
      img: img5
    },
    {
      desc: "“Fantastic service! Great website! The website was very professional. I would highly recommend. After initial payment, everything was completed within a week.”",
      star: stars,
      name: "Lisa White",
      quote: "Advanced website by Wix Partner Sara Michelle Design",
      img: img6
    },
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center py-[8rem] md:mt-12">
      <div className="relative w-full md:w-3/4 flex flex-col justify-center sm:text-center pt-[4rem]">

        <h2 className='flex text-5xl font-bold space-x-5 mx-auto  text-center'>Wix MarketPlace user Review</h2>

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
          <button onClick={handlePrev} className="bg-gray-800 text-white px-4 py-2 rounded-l-md">
            &lt;
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
          <button onClick={handleNext} className="bg-gray-800 text-white px-4 py-2 rounded-r-md">
            &gt;
          </button>
        </div>

        {/* Content section */}
        <div className="text-center mt-4 py-8 flex flex-col justify-center pb-[1rem] items-center">
          <p className="text-gray-800 max-w-[80%] pb-[1rem] text-[20px]">{items[currentIndex].desc}</p>
          <img src={items[currentIndex].star} alt="Stars" className="w-3 h-5 mx-auto mt-4" />
          <p className="text-[22px] font-semibold mt-2 pb-[1.5rem]">{items[currentIndex].name}</p>
          <p className="text-[20px] pb-[3rem]  mt-1">{items[currentIndex].quote}</p>
        </div>

        <div className="relative md:w-full sm:w-full overflow-hidden lg:pb-[2rem] flex justify-center">
          <img
            src={items[currentIndex].img}
            alt=""
            className="lg:w-[60%] lg:h-[40%] object-cover transition-transform duration-500 transform scale-100 "
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
