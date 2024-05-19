import { PiPhoneCallFill } from "react-icons/pi";
import "./Caring.css";
import topImage from "../../assets/caring-images/top-image.png";
import bottomImage from "../../assets/caring-images/bottom-image.png";
import Tick from "../../assets/caring-images/tick.svg";

const Caring = () => {
  const Texts = [
    "Stay Updated About Your Health",
    "Check Your Results Online",
    "Manage Your Appointments",
  ];
  return (
    <div className="caring-container">
      <div className="caring-images">
        <div className="consultation-container">
          <div className="free-consultation">
            <PiPhoneCallFill size={30} />
            <p>Free Consultation</p>
          </div>
          <div className="free-consultation-bottom">
            <p>Consultation with the best</p>
          </div>
        </div>
        <img src={topImage} alt="top image" className="top-image" />
        <img src={bottomImage} alt="bottom image" className="bottom-image" />
      </div>
      <div className="caring-texts">
        <div className="sub-heading">
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </div>
        <div className="main-heading">
          <span className="patient">Patient</span>
          <span className="caring"> Caring</span>
        </div>
        <div className="caring-para">
          <p>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
        </div>
        {Texts.map((text, index) => (
          <div key={index + 1} className="points">
            <img src={Tick} alt="tick" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caring;
