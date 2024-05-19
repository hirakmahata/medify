import "./HospitalNotFound.css";
import PropTypes from "prop-types";

const HospitalNotFound = ({ text }) => {
  return <div className="hospital-notfound-container">{text}</div>;
};

HospitalNotFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HospitalNotFound;
