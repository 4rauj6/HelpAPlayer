import LegoBatmanCard from "../components/LegoBatmanCard";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CarrionCard from "../components/CarrionCard";

function Homepage() {
  const slides = useMemo(() => {
    return [
      { to: "/lego-batman", element: <LegoBatmanCard /> },
      { to: "/carrion", element: <CarrionCard /> }
    ];
  }, []);

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  const prevSlide = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  return (
    <div>
      <h1 className="text-amber-500">Contents that you may like:</h1>

      <div className="flex flex-row items-center justify-center gap-10">
        <button onClick={nextSlide} className="text-black cursor-pointer transition delay-10 duration-200 ease-in-out hover:text-amber-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div id="slides">
          <Link to={slides[index].to}>
            {slides[index].element}
          </Link>
        </div>

        <button onClick={prevSlide} className="text-black cursor-pointer transition delay-10 duration-200 ease-in-out hover:text-amber-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
