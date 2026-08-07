import { Link } from "react-router-dom";
const cover =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpZLCp5VHtNY%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=72b46428b440b52535f2be35333d3ab42ad87ed2330c7fa1fe142dea26f166d6";

function HitmanABCard() {
  return (
    <Link to="/hitman-absolution">
      <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-xl w-270 h-150">
        <img
          src={cover}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
        />
        <div className="absolute inset-0 pointer-events-none"></div>
        <h3
          id="gameName"
          className="z-10 mt-3 text-4xl font-bold text-gray-100  "
        >
          Hitman: Absolution
        </h3>
        <div
          id="gameName"
          className="z-10 overflow-hidden text-sm leading-10 text-gray-100 flex flex-row gap-3"
        >
          <p>Io-Interactive A/S</p>
        </div>
      </article>
    </Link>
  );
}

export default HitmanABCard;
