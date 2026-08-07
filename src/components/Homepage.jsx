import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LegoBatmanCard from "../components/LegoBatmanCard";
import CarrionCard from "../components/CarrionCard";
import HitmanABCard from "./HitmanABCard";

function Homepage() {
  const slides = useMemo(() => {
    return [
      { to: "/lego-batman", element: <LegoBatmanCard /> },
      { to: "/carrion", element: <CarrionCard /> },
      { to: "/hitman-absolution", element: <HitmanABCard /> },
    ];
  }, []);

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  const prevSlide = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  return (
    <div>
      <h1 className="text-amber-500 text-4xl">Guides you may like:</h1>

      <div className="flex flex-row items-center justify-center gap-3 h-180">
        <button
          onClick={nextSlide}
          className="text-black cursor-pointer transition delay-10 duration-200 ease-in-out hover:text-amber-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-15"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div id="slides">
          <Link to={slides[index].to}>{slides[index].element}</Link>
        </div>

        <button
          onClick={prevSlide}
          className="text-black cursor-pointer transition delay-10 duration-200 ease-in-out hover:text-amber-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-15"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div id="moreGuidesGrid" className="bg-amber-500 rounded-xl">
        <h1 className="text-start text-gray-100 text-3xl">More guides:</h1>
        <article className="grid grid-cols-3 gap-2 w-340 h-140 content-center justify-items-center items-center">
          <Link to="/hitman-absolution">
            <img
              id="gridCover"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpZLCp5VHtNY%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=72b46428b440b52535f2be35333d3ab42ad87ed2330c7fa1fe142dea26f166d6"
              alt="Hitman: Absolution"
              className="w-109 rounded transform hover:scale-110 transition duration-100"
            />
          </Link>

          <Link to="/lego-batman">
            <img
              id="gridCover"
              src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg"
              alt="Lego Batman - The Videogame"
              className=" relative w-109 rounded bg-transparent transform hover:scale-110 transition duration-100"
            />
          </Link>

          <Link to="/carrion">
            <img
              id="gridCover"
              src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
              alt="Carrion"
              className="w-109 rounded transform hover:scale-110 transition duration-100"
            />
          </Link>
          <Link to="/carrion">
            <img
              id="gridCover"
              src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
              alt="Carrion"
              className="w-109 rounded transform hover:scale-110 transition duration-100"
            />
          </Link>
          <Link to="/carrion">
            <img
              id="gridCover"
              src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
              alt="Carrion"
              className="w-109 rounded transform hover:scale-110 transition duration-100"
            />
          </Link>
          <Link to="/carrion">
            <img
              id="gridCover"
              src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
              alt="Carrion"
              className="w-109 rounded transform hover:scale-110 transition duration-100"
            />
          </Link>
        </article>
      </div>
    </div>
  );
}

export default Homepage;
