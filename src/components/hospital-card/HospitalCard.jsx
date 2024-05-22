import "./HospitalCard.css";
import PropTypes from "prop-types";
import hospitalLogo from "../../assets/hospital/hospital.svg";
import tickLogo from "../../assets/caring-images/tick.svg";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";
import Calender from "../calender/Calender";

const HospitalCard = ({
  hospitalID,
  hospitalName,
  hospitalAddress,
  hospitalType,
  hospitalRating,
}) => {
  const [openCalender, setOpenCalender] = useState(false);
  return (
    <div className="hospital-card-container">
      <div className="only-card">
        <div className="hospital-card-logo">
          <img src={hospitalLogo} alt="hospital" className="hos-logo" />
          <img src={tickLogo} alt="hospitalverified" className="tick" />
        </div>
        <div className="hospital-card-details">
          <h1>{hospitalName}</h1>
          <div className="address">
            <h3>{hospitalAddress}</h3>
            <p>{hospitalType}</p>
          </div>
          <div className="extra-class">
            <span className="free">FREE</span>
            <span className="rupee">₹500</span>
            <span className="free-clinic">Consultation fee at clinic</span>
          </div>
          <div className="ratings">
            <BiSolidLike size={20} />
            <span>{hospitalRating}</span>
          </div>
        </div>
        <div className="hospital-card-button">
          <p>Available today</p>
          <button onClick={() => setOpenCalender((prev) => !prev)}>
            Book FREE Center Visit
          </button>
        </div>
      </div>
      {openCalender && (
        <Calender
          hospitalID={hospitalID}
          hospitalName={hospitalName}
          hospitalAddress={hospitalAddress}
          hospitalType={hospitalType}
          hospitalRating={hospitalRating}
          onCalenderClose={() => setOpenCalender(false)}
        />
      )}
    </div>
  );
};

HospitalCard.propTypes = {
  hospitalID: PropTypes.string.isRequired,
  hospitalName: PropTypes.string.isRequired,
  hospitalAddress: PropTypes.string.isRequired,
  hospitalType: PropTypes.string.isRequired,
  hospitalRating: PropTypes.number.isRequired,
};

export default HospitalCard;
