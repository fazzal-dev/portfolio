import "./Hero.css";
import Typewriter from "../Typewriter";
import ContactInfo from "../ContactInfo/ContactInfo";

const Hero = () => {
  return (
    <div className="hero-container">
      <p className="hero-description">Hello, I'm</p>
      <h1 className="hero-title">
        <span className="gt"></span>
        <Typewriter text="fazzal." />
      </h1>
      <p className="hero-description">
        I'm a software developer based in pakistan,
        <br />i turn ideas into interactive and user-friendly experiences.
      </p>
      <div className="opportunity-status">
        <div className="ping-container">
          <span className="ping" />
        </div>
        <p>Available for new opportunities.</p>
      </div>
      <ContactInfo />
    </div>
  );
};

export default Hero;
