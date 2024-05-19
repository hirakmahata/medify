import { BiSolidLike } from "react-icons/bi";
import "./BookingCard.css";
import PropTypes from "prop-types";
import hospitalLogo from "../../assets/hospital/hospital.svg";
import tickLogo from "../../assets/caring-images/tick.svg";

const BookingCard = ({
  hospitalName,
  hospitalAddress,
  hospitalType,
  hospitalRating,
  bookingDay,
  bookingTime,
}) => {
  return (
    <div className="booking-card-container">
      <div className="booking-card-logo">
        <img src={hospitalLogo} alt="hospital" />
        <img src={tickLogo} alt="hospitalverified" className="logo-tick" />
      </div>
      <div className="booking-card-details">
        <h1>{hospitalName}</h1>
        <div className="booking-address">
          <h3>{hospitalAddress}</h3>
          <p>{hospitalType}</p>
        </div>
        <div className="hospital-ratings">
          <BiSolidLike size={20} />
          <span>{hospitalRating}</span>
        </div>
      </div>
      <div className="booking-date-time">
        <div className="booking-time">{bookingTime}</div>
        <div className="booking-date">{bookingDay}</div>
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  hospitalName: PropTypes.string.isRequired,
  hospitalAddress: PropTypes.string.isRequired,
  hospitalType: PropTypes.string.isRequired,
  hospitalRating: PropTypes.number.isRequired,
  bookingDay: PropTypes.string.isRequired,
  bookingTime: PropTypes.string.isRequired,
};

export default BookingCard;
