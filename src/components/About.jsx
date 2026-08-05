import ScrollIntoView from "react-scroll-into-view";

function About() {
  return (
    <>
      <div className="text-black">
        <h1 className="text-4xl">Know more about HelpAPlayer</h1>
        <h1 className="text-3xl">Made by gamers for gamers</h1>
        <p className="">
          Every player already get stuck in some level in their favorite game.
          Some players spend hours trying to solve what they have to do to go
          for the next area. The HelpAPlayer WebSite was developed thinking
          about that kind of players.
        </p>

        <ScrollIntoView selector="#areaToGo" smooth={true}>
          <button className="text-blue-900 bg-amber-600 cursor-pointer">Know More</button>
        </ScrollIntoView>

        <div id="areaToGo">
          <h1>kajdkjasd</h1>
        </div>
      </div>
    </>
  );
}
export default About;
