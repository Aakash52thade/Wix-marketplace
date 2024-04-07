import { FaFacebook, FaYoutube, FaInstagram, FaPinterest, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-16 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start">

        <div className="flex flex-row flex-wrap justify-between w-full md:w-auto cursor-pointer pr-0 md:pr-12 gap-x-6 md:gap-x-12">

          {/* Product Section */}
          <div className="pb-4">
            <h2 className="font-semibold pb-3">Product</h2>
            <div className="flex flex-col gap-y-3 text-[14px]">
              <ul className="hover:text-blue-300 transition-all duration-200">Website Template</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Website Design</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Website Builder</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Wix Feature</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">App Market</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Web Hosting</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Domain Name</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Website Accessibility</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Mobile App Builder</ul>
            </div>
          </div>

          {/* Solution Section */}
          <div className="pb-4">
            <h2 className="font-semibold pb-3">Solution</h2>
            <div className="flex flex-col gap-y-3 text-[14px]">
              <ul className="hover:text-blue-300 transition-all duration-200">Online Store</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Online Booking</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Restaurant Website</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Blog Website</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Portfolio Website</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">eCommerce Website</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Wix Studio</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Enterprise Solution</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Student Website</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Professional Tools</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Logo Maker</ul>
            </div>
          </div>

          {/* Learn Section */}
          <div className="pb-4">
            <h2 className="font-semibold pb-3">Learn</h2>
            <div className="flex flex-col gap-y-3 text-[14px]">
              <ul className="hover:text-blue-300 transition-all duration-200">Wix Blog</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Privacy and Security Hub</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">SEO Learning Hub</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Wix Encyclopedia</ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="pb-4">
            <h2 className="font-semibold pb-3">Support</h2>
            <div className="flex flex-col gap-y-3 text-[14px]">
              <ul className="hover:text-blue-300 transition-all duration-200">Help Center</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Hire a Professional</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Report Abuse</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">System Status</ul>
            </div>
          </div>

          {/* Company Section */}
          <div className="pb-4">
            <h2 className="font-semibold pb-3">Company</h2>
            <div className="flex flex-col gap-y-3 text-[14px]">
              <ul className="hover:text-blue-300 transition-all duration-200">Press & Media</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Investor Relations</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Wix Capital</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Accessibility Statement</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Patent Notice</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Sitemap</ul>
              <ul className="hover:text-blue-300 transition-all duration-200">Careers</ul>
            </div>
          </div>

        </div>
         
        <div className="flex flex-col mt-8 md:mt-0 max-w-full md:max-w-[20%] space-y-4 cursor-pointer">
          <h1 className="text-4xl font-bold">WIX</h1>
          <p className="max-w-full md:max-w-[90%]">
            The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features
            to advanced SEO and marketing tools–enabling anyone to create and grow online.
          </p>
          <p className="font-semibold hover:text-blue-300 transition-all duration-200">About</p>
          <p className="font-semibold hover:text-blue-300 transition-all duration-200">Contact Us</p>
        </div>

      </div>

      {/* grey line  */}
      <div className="w-full">
        <div className="block w-full h-[2px] bg-gray-400 my-5"></div>
      </div>

{/* Social links */}
<div className="flex flex-col  lg:flex-row justify-between items-center sm:items-start">
  <div className="flex gap-x-7 mt-4 sm:mt-0">
  
    <FaFacebook className="hover:text-blue-300 transition-all duration-200 cursor-pointer text-2xl" />
    <FaYoutube className="hover:text-blue-300 transition-all duration-200 cursor-pointer text-2xl" />
    <FaInstagram className="hover:text-blue-300 transition-all duration-200 cursor-pointer text-2xl" />
    <FaPinterest className="hover:text-blue-300 transition-all duration-200 cursor-pointer text-2xl" />
    <FaLinkedin className="hover:text-blue-300 transition-all duration-200 cursor-pointer text-2xl"/>
    <FaTiktok className="hover:text-blue-300 transition-all duration-200 cursor-pointer text-2xl"/>
  </div>

  <div className='flex flex-row  justify-between gap-x-9 lg:mt-4 mt-[4rem] '>
    <p>Terms of Use</p>
    <p>Privacy Policy</p>
    <p>© 2006-2024 Wix.com, Inc</p>
  </div>
</div>


    </footer>
  );
};

export default Footer;
