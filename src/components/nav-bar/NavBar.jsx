import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TfiMenu } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const MENU_ITEMS = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
    "My Bookings",
  ];

  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);

  const handleNavClick = (text, index) => {
    if (text === "Find Doctors" || text === "Hospitals") {
      navigate("/search");
    }
    setActive(index);
  };

  const openMenuBar = () => {
    setIsOpenMenuBar(true);
  };
  const closeMenuBar = () => {
    setIsOpenMenuBar(false);
  };

  const handleMobileButtonClick = () => {
    setIsOpenMenuBar(false);
    navigate("/bookings");
  };

  return (
    <div className="navbar-container">
      <div onClick={() => navigate("/")} className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-menu">
        <ul className="menu">
          {MENU_ITEMS.map((text, index) =>
            text === "My Bookings" ? (
              <button key={index} onClick={() => navigate("/bookings")}>
                {text}
              </button>
            ) : (
              <a
                key={index}
                onClick={() => handleNavClick(text, index)}
                className={`${active === index ? "menu-active" : ""}`}
              >
                <li>{text}</li>
              </a>
            )
          )}
        </ul>
      </div>
      <div className="sidebar">
        <TfiMenu
          size={30}
          className={`${isOpenMenuBar ? "close" : ""}`}
          onClick={openMenuBar}
        />
        <div
          className={`side-bar-menu-container ${!isOpenMenuBar ? "close" : ""}`}
        >
          <div className="close-sidebar">
            <RxCross1 size={30} onClick={closeMenuBar} />
          </div>
          <ul className="side-bar-menu">
            {MENU_ITEMS.map((text, index) =>
              text === "My Bookings" ? (
                <button key={index} onClick={handleMobileButtonClick}>
                  {text}
                </button>
              ) : (
                <a
                  key={index}
                  onClick={() => handleNavClick(text, index)}
                  className={`${
                    active === index ? "close-bar-menu-active" : ""
                  }`}
                >
                  <li>{text}</li>
                </a>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
