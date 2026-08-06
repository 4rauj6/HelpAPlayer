import LegoBatmanCard from "../components/LegoBatmanCard";

function Homepage() {
  return (
    <div>
      <h1 className="text-amber-500">Contents that you may like:</h1>

      <div className="flex flex-col items-center">
        <button>Botão</button>
        <LegoBatmanCard />
      </div>
    </div>
  );
}

export default Homepage;
