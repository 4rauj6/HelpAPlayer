const gameCover =
  "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg";

export default function LegoBatman() {
  return (
    <div>
      <img src={gameCover} alt="" />

      <h1>Lego Batman - The Videogame (Ultimate 100% Guide)</h1>
      <p>Made by (user.0001)</p>
      <p>{`"Lego Batman - The Videogame" was released in 23 september 2008. Developed by `}</p>
    </div>
  );
}
