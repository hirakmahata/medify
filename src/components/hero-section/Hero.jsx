import "./Hero.css";
import heroImage from "../../assets/hero-images/heroImage.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-button">
        <div className="top-hero-text">Skip the travel! Find Online</div>
        <div className="middle-hero-text">
          <span className="medical">Medical</span>
          <span className="center"> Centers</span>
        </div>
        <div className="bottom-hero-text">
          Connect instantly with a 24x7 specialist or choose to <br /> video
          visit a particular doctor.
        </div>
        <div className="hero-button">
          <button>Find Centers</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
