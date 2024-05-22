import "./GetTheApp.css";

import mobileCover1 from "../../assets/get-app-images/cover1.png";
import mobileScreen1 from "../../assets/get-app-images/screen1.png";
import mobileCover2 from "../../assets/get-app-images/cover2.png";
import mobileScreen2 from "../../assets/get-app-images/screen2.png";
import arrow from "../../assets/get-app-images/arrow.svg";
import googlePlay from "../../assets/get-app-images/google_play.svg";
import appleStore from "../../assets/get-app-images/apple_store.svg";

const GetTheApp = () => {
  return (
    <div className="get-the-app-container">
      <div className="get-app-images">
        <img src={mobileCover1} alt="cover1" className="cover1 mobile" />
        <img src={mobileScreen1} alt="screen1" className="screen1 mobile" />
        <img src={mobileCover2} alt="cover2" className="cover2 mobile" />
        <img src={mobileScreen2} alt="screen2" className="screen2 mobile" />
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
      <div className="get-app-inputs">
        <h1>
          Download the <br /> <span>Medify </span>App
        </h1>
        <div className="link-container">
          <p>Get the link to download the app</p>
          <div className="sms-container">
            <span>+91</span>
            <input placeholder="Enter phone number" />
            <button>Send SMS</button>
          </div>
          <button className="mobile-button">Send SMS</button>
        </div>
        <div className="play-stores">
          <img src={googlePlay} alt="" />
          <img src={appleStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
