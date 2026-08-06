import { Link } from "react-router-dom";
const cover =
  "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg";

function LegoBatmanCard() {
  return (
    <Link to="/lego-batman">
      <img
        src={cover}
        alt="Lego Batman The Videogame"
        className="w-200 items-center rounded-lg"
      />
    </Link>
  );
}

export default LegoBatmanCard;
