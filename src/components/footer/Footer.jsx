import "./Footer.css";
import logo from "../../assets/logo.svg";
import {
  FaChevronRight,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const footerIcons = [
    <FaFacebookF key={Date.now()} size={20} />,
    <FaTwitter key={Date.now()} size={20} />,
    <FaYoutube key={Date.now()} size={20} />,
    <FaPinterest key={Date.now()} size={20} />,
  ];
  let footerTexts = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
    "Orthology",
    "Neurology",
    "Dental Care",
    "Opthalmology",
    "Cardiology",
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ];
  return (
    <div className="footer-container">
      <div className="top-footer">
        <div className="footer-logo-container">
          <img src={logo} alt="footer-logo" />
          <div className="socials">
            {footerIcons.map((icon, index) => (
              <div key={index + 1} className="social-icon">
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="text-grid">
          {footerTexts.map((text, index) => (
            <div key={index + 1} className="arrow-text">
              <FaChevronRight />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-footer">
        Copyright &copy;2023 Surya Nursing Home.com. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
