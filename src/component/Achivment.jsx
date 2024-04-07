const Achivment = () => {
  return (
    <div className="bg-slate-100 py-16">
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-y-9 md:gap-y-5 lg:gap-x-5 px-5 lg:px-10 py-8 justify-between max-w-[80%] mx-auto items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">680K requests</h2>
          <p className="text-center">submitted in 2021</p>
        </div>

        
        <div className="hidden lg:block h-28 w-1 bg-slate-800"></div>
        <div className="block lg:hidden w-full h-1 bg-slate-800 my-5"></div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">195 countries</h2>
          <p className="text-center">access the Marketplace</p>
        </div>

        
        <div className="hidden lg:block h-28 w-1 bg-slate-800"></div>
        <div className="block lg:hidden w-full h-1 bg-slate-800 my-5"></div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">4.9/5 rating</h2>
          <p className="text-center">average client satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Achivment;
