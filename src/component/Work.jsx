const Work = () => {
    const steps = [
      {
        number: "01",
        title: "Find a professional",
        description: "Browse services, portfolios, and client reviews and then connect with agencies and freelancers you’d like to work with. You can also fill out a form and get matched with providers that fit your needs."
      },
      {
        number: "02",
        title: "Discuss your needs",
        description: "Once connected, ask any questions you have to potential providers, outline your project goals and expectations, get feedback and price quotes, and review your options."
      },
      {
        number: "03",
        title: "Get your project done",
        description: "Start working with your pro, set a timeline, payment plan and project details that will help bring your ideas to life."
      }
    ];
  
    return (
      <div className="bg-black text-white lg:h-[95%] w-full h-auto md:h-screen">
        <div className="max-w-[90%] mx-auto flex flex-col items-start py-[2rem] px-[2.4rem] md:px-8 pb-[2rem]  md:pb-8">
          <div className="my-12 "> 
            <p className="text-4xl text-semibold leading-snug md:text-6xl pb-[3rem] md:leading-normal">How it works</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {steps.map((step, index) => (
              <div key={index} className="pr-[2rem]">
                <p className="text-3xl font-bold">{step.number}</p>
                <div className="w-[80%] h-[2px] bg-white my-4 mb-[2rem]"></div>
                <h3 className="text-2xl font-bold pb-4">{step.title}</h3>
                <p className="text-lg  leading-[2.3rem]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center w-full mt-8">
          <button
            className='md:inline-block lg:hidden text-black bg-white mb-3 py-3 px-7 rounded-full hover:bg-blue-400 transition-all duration-300 hover:text-black font-semibold'>
             Web Designer
          </button>
          </div>
        </div> 
      </div>
    );
};
  
export default Work;
