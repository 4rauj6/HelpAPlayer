import ScrollIntoView from "react-scroll-into-view";

function About() {
  return (
    <>
      <div id="about-content" className="text-black flex flex-col items-center">
        <h1 className="text-5xl h-15">Know more about HelpAPlayer</h1>
        <h1 className="text-4xl h-15">Made by gamers for gamers</h1>
        <ScrollIntoView selector="#areaToGo" smooth={true}>
          <button className="text-white bg-amber-500 cursor-pointer hover: rounded-sm ">
            Know More
          </button>
        </ScrollIntoView>

        <div id="areaToGo">
          <p id="about-p" className="text-lg text-start">
            Every player already get stuck in some level in their favorite game.
            Some players spend hours trying to solve what they have to do to go
            for the next area. The HelpAPlayer WebSite was developed thinking
            about that kind of players.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
