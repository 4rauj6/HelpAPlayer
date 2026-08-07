import { Link } from "react-router-dom";

const cover =
  "https://cdn1.epicgames.com/7c6d889f36124ae4b6269f8e1698a547/offer/EGS_CARRION_PhobiaGameStudio_S3-2560x1440-790cef9b876a79f75582490ebd1e6ee4.jpg";

function CarrionCard() {
  return (
    <Link to="/carrion">
      <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-xl w-270 h-150">
        <img
          src={cover}
          alt="Carrion"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
        <div className="absolute inset-0 pointer-events-none"></div>
        <h3
          id="gameName"
          className="z-10 mt-3 text-4xl font-bold text-gray-100  "
        >
          Carrion
        </h3>
        <div
          id="gameName"
          className="z-10 overflow-hidden text-sm leading-10 text-gray-100 flex flex-row gap-3"
        >
          <p>Devolver</p>
          <p>Phobia Game Studio</p>
        </div>
      </article>
    </Link>
  );
}

export default CarrionCard;
