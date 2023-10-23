import BoatVideo from "./BoatVideo";
import HeroText from "./HeroText";
import "./index.css";
function Home() {
  return (
    <div className="topsec">
      <HeroText/>
      <BoatVideo />

      <div className="mob">
        <video
          className="mobvideo"
          autoPlay
          muted
          loop
          controls
        >
          <source src="./OSD.mp4" type="video/mp4" />
        </video>
      </div>
      
    </div>
  );
}

export default Home;
