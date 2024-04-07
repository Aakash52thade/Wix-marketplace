import BackgroundImg from '../assets/2bgs.webp';
import sideimg from '../assets/sideimg2.webp';

const SubHero = () => {
  return (
    <div className='relative overflow-hidden'>
      {/* Background Image */}
      <img src={BackgroundImg} alt="Background" className='absolute inset-0 object-cover object-center h-full w-full z-0' />

      <div className='relative flex flex-col lg:flex-row justify-center items-center lg:items-stretch'>
        {/* Left side content */}
        <div className='lg:w-1/3 flex-shrink-0 md:w-3/5 md:pr-16 md:pl-8 py-8 md:py-16 p-6'>
          <div className='text-white max-w-lg'>
            <h3 className='text-5xl mb-6 font-bold'>Who are our pros?</h3>

            <div className='mb-6'>
              <h4 className='font-bold text-3xl py-3'>They’re industry leaders</h4>
              <p className='text-lg max-w-[90%]'>Wix Partners are the masterminds behind some of the most successful brands, businesses, and sites on Wix. Whether they’re designers, developers, or marketers, they’re all vetted, trusted leaders in their fields.</p>
            </div>

            <div className='mb-6'>
              <h4 className='font-bold text-3xl py-3'>They’re specially selected</h4>
              <p className='text-lg max-w-[90%]'>Each of our professionals has been pre-screened for quality. They’re not Wix employees, they’re just real people with real skills who want to help you reach your goals.</p>
            </div>

            <div>
              <h4 className='font-bold text-3xl py-3 max-w-[70%]'>They’re ready to do the heavy lifting</h4>
              <p className='text-lg max-w-[90%]'>From big projects to small tasks, no matter the brief, you can rest assured knowing that they’ll deliver.</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className='lg:w-1/2 md:w-2/5 h-[70vh] md:h-[120vh] flex-shrink-0'>
          <img src={sideimg} alt="Side Image" className='object-cover object-center w-full h-full' />
        </div>
      </div>
    </div>
  );
};

export default SubHero;
