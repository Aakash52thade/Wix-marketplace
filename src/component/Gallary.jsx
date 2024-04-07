
import Gal1 from '../assets/Gal1.webp';
import Gal2 from '../assets/Gal2.webp';
import Gal3 from '../assets/Gal3.webp';
import Gal4 from '../assets/Gal4.webp';
import Gal5 from '../assets/Gal5.webp';
import Gal6 from '../assets/Gal6.webp';

const Gallery = () => {
  const Album = [
    {
      img: Gal1,
      title: "Web Design",
      desc: "New website, mobile site, site redesign and site migration.",
      Explore: "Explore now →"
    },
    {
      img: Gal2,
      title: "Marketing & Promoting",
      desc: "SEO, marketing and advertising, written content and more.",
      Explore: "Explore now →"
    },
    {
      img: Gal3,
      title: "Online Stores",
      desc: "Store optimizations and settings, shipping, payment capabilities and more.",
      Explore: "Explore now →"
    },
    {
      img: Gal4,
      title: "Small Tasks",
      desc: "Analytics, domains, web guidance, updates and more.",
      Explore: "Explore now →"
    },
    {
      img: Gal5,
      title: "Graphic Design",
      desc: "Custom logo, photography, image editing, brand development and more.",
      Explore: "Explore now →"
    },
    {
      img: Gal6,
      title: "Web Development",
      desc: "Database setup, integrations, custom functionalities, code advice and more.",
      Explore: "Explore now →"
    },
  ];

  return (
    <div className="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Album.map((item, index) => (
        <div key={index} className="flex flex-col gap-7 items-start text-start p-8 border border-gray-200">
          <img src={item.img} alt={item.title} className="mb-4 w-full h-auto object-cover"/>
          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
          <p className="mb-4 text-[20px]">{item.desc}</p>
          <a href="#" className="felx underline text-xl pb-[3rem] font-bold hover:text-blue-800 transition duration-300 ease-in-out">{item.Explore}</a>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
