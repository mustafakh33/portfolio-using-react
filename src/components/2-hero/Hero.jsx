import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../src/animation/dev.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container" id="about">
        <section className="hero flex">
          <div className="left-section">
            <div className="parent-avatar flex">
              <img src="./me.jpg" className="avatar" alt="" />
              <div className="icon-verified"></div>
            </div>
            <h1 className="title">Frontend Developer</h1>
            <p className="sub-title">
              I’m Mustafa Khaled, a front-end developer with entry-level
              experience specializing in web, I will help you create beautiful
              websites that your users will love.
            </p>
            <div className="all-icons flex">
              <Link to="https://twitter.com/Mustafa39151170">
                <div className="icon icon-twitter"></div>
              </Link>
              <Link to="https://www.instagram.com/mustafakhaled33/">
                <div className="icon icon-instagram"></div>
              </Link>
              <Link to="https://github.com/mustafakh33">
                <div className="icon icon-github"></div>
              </Link>
              <Link to="https://www.linkedin.com/in/mustafa-khaled-88b111307/">
                <div className="icon icon-linkedin"></div>
              </Link>
            </div>
          </div>
          <div className="right-section animation">
            <Lottie animationData={devAnimation} />
          </div>
        </section>
      </div>
      <div className="divider" />
    </>
  );
};

export default Hero;
