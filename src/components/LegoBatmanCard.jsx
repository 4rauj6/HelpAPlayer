import { Link } from "react-router-dom";
const cover =
  "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg";

function LegoBatmanCard() {
  return (
    <Link to="/lego-batman">
      <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-xl w-270 h-150">
        <img
          src={cover}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
        />
        <div class="absolute inset-0 pointer-events-none"></div>
        <h3 id="gameName" class="z-10 mt-3 text-4xl font-bold text-white  ">Lego Batman - The videogame</h3>
        <div id="gameName" class="z-10 overflow-hidden text-sm leading-10 text-white flex flex-row gap-3">
          <p>TT games</p>
          <p>Warner Bros.</p>
        </div>
      </article>
    </Link >
  );
}

export default LegoBatmanCard;
