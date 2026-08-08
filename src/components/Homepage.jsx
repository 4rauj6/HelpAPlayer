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

  const nextSlide = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  const prevSlide = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  return (
    <div id="hero">
      <h1 id="hp-h1" className="text-amber-500 text-4xl">
        Guides you may like:
      </h1>

      <div className="flex flex-row items-center justify-center gap-3 h-170">
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

      <div className="flex mx-auto w-full justify-center">
        <div
          id="moreGuidesGrid"
          className="bg-amber-500 rounded-2xl flex flex-col items-center h-130 w-full max-w-6xl mx-auto"
        >
          <h1 id="guidesTitle" className="text-gray-100 text-3xl self-start">
            More guides:
          </h1>

          <article className="grid grid-cols-3 gap-x-4  gap-y-2 w-260">
            <Link to="/hitman-blood-money">
              <img
                id="gridCover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s-jfXQF-46zFdNeuBPD8eDEUGxaoaDCsZG8hgfO9vrkHe3imJJo7yek&s=10"
                alt="Hitman: Absolution"
                className=" rounded transform hover:scale-120 transition duration-100"
              />
            </Link>

            <Link to="/lego-batman">
              <img
                id="gridCover"
                src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg"
                alt="Lego Batman - The Videogame"
                className=" rounded bg-transparent transform hover:scale-120 transition duration-100"
              />
            </Link>

            <Link to="/carrion">
              <img
                id="gridCover"
                src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
                alt="Carrion"
                className="rounded transform hover:scale-120 transition duration-100"
              />
            </Link>
            <Link to="/carrion">
              <img
                id="gridCover"
                src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
                alt="Carrion"
                className="rounded transform hover:scale-120 transition duration-100"
              />
            </Link>
            <Link to="/carrion">
              <img
                id="gridCover"
                src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
                alt="Carrion"
                className="rounded transform hover:scale-120 transition duration-100"
              />
            </Link>
            <Link to="/carrion">
              <img
                id="gridCover"
                src="https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg"
                alt="Carrion"
                className="rounded transform hover:scale-120 transition duration-100"
              />
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
