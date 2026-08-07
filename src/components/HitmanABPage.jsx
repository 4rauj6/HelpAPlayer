const cover =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpZLCp5VHtNY%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=72b46428b440b52535f2be35333d3ab42ad87ed2330c7fa1fe142dea26f166d6";

function HitmanABPage() {
  return (
    <div>
      <img src={cover} alt="Hitman Absolution" />

      <h1>Hitman Absolution</h1>
      <p>Guide made by (user)</p>
      <p>{`"Hitman Absolution" `}</p>
    </div>
  );
}

export default HitmanABPage;
