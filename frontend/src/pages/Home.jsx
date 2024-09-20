import img1 from "../assets/istockphoto-1699434392-612x612.webp";
import img2 from "../assets/pexels-ahmedmuntasir-912050.jpg";
import img3 from "../assets/pexels-captainsopon-3402846.jpg";
import img4 from "../assets/pexels-pixabay-45230.jpg";
import img5 from "../assets/pexels-pixabay-87011.jpg";
import img6 from "../assets/pexels-pixabay-358220.jpg";
import img7 from "../assets/pexels-pixabay-433283.jpg";
import img8 from "../assets/pexels-pixabay-459402.jpg";
import img9 from "../assets/pexels-rafael-cosquiere-1059286-2064123.jpg";
import img10 from "../assets/pexels-soumya-ranjan-205042-1098745.jpg";
import img11 from "../assets/pexels-brett-sayles-3140204.jpg";

const Home = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-x-5 md:px-10 px-5 py-5">
        <div className="overflow-hidden relative">
          <img src={img1} alt="image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center"></div>
        </div>
        <div className="flex flex-col gap-y-5 md:w-[40rem]">
          <h1 className="text-4xl">
            The Future of Aviation: Innovative Aircraft Designs
          </h1>
          <p className="text-lg text-gray-500 md:w-[35rem]">
            Aviation is evolving rapidly with the introduction of groundbreaking
            aircraft designs. From electric planes to hybrid jets, these
            innovations aim to make flying more efficient and environmentally
            friendly. The future of aviation promises quieter, more
            fuel-efficient aircraft that could revolutionize air travel as we
            know it.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-x-7 md:px-10 px-5 py-5">
        <div className="flex flex-col md:gap-y-7 gap-y-5 md:pb-0 pb-5">
          <img src={img2} alt="" />
          <img src={img5} alt="" />
          <img src={img8} alt="" />
        </div>
        <div className="flex flex-col md:gap-y-7 gap-y-5 md:pb-0 pb-5">
          <img src={img3} alt="" />
          <img src={img6} alt="" />
          <img src={img9} alt="" />
        </div>
        <div className="flex flex-col md:gap-y-7 gap-y-5 md:pb-0 pb-5">
          <img src={img4} alt="" />
          <img src={img7} alt="" />
          <img src={img10} alt="" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-x-5 md:px-10 px-5 py-5">
        <div className="overflow-hidden relative">
          <img className="h-[27rem] w-[39rem] object-cover" src={img11} alt="image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center"></div>
        </div>
        <div className="flex flex-col gap-y-5 md:w-[40rem]">
          <h1 className="text-4xl">Airports: The Gateway to Adventure</h1>
          <p className="text-lg text-gray-500 md:w-[35rem]">
            Airports are the starting point of many exciting journeys. As hubs
            of activity, they handle everything from passenger services to
            aircraft maintenance, ensuring smooth operations. For many, stepping
            into an airport signals the beginning of an adventure, whether it’s
            a vacation, a business trip, or a visit to loved ones.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
