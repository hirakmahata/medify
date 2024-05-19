import { FaXRay } from "react-icons/fa";
import "./Specialisation.css";
import { LuStethoscope } from "react-icons/lu";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { GiBrain, GiCorkedTube } from "react-icons/gi";
import { PiFlask } from "react-icons/pi";
import { useState } from "react";
import { RiHospitalLine } from "react-icons/ri";

const Specialisation = () => {
  const [active, setActive] = useState(null);

  const ALL_SPECIALISATIONS = [
    { text: "Dentistry", icon: <RiHospitalLine size={80} /> },
    { text: "Primary Care", icon: <LuStethoscope size={80} /> },
    { text: "Cardiology", icon: <LiaHeartbeatSolid size={80} /> },
    { text: "MRI Resonance", icon: <TbDeviceHeartMonitor size={80} /> },
    { text: "Blood Test", icon: <GiCorkedTube size={80} /> },
    { text: "Psychologist", icon: <GiBrain size={80} /> },
    { text: "Laboratory", icon: <PiFlask size={80} /> },
    { text: "X-Ray", icon: <FaXRay size={80} /> },
  ];

  return (
    <div className="specialisation-container">
      <div className="specialisation-heading">Find By Specialisation</div>
      <div className="specialisation-grid">
        {ALL_SPECIALISATIONS.map((info, index) => (
          <div
            onClick={() => setActive(index)}
            key={index}
            className={`single-specialisation ${
              active === index ? "active" : ""
            }`}
          >
            {info.icon}
            <p>{info.text}</p>
          </div>
        ))}
      </div>
      <div className="specialisation-button">
        <button>View All</button>
      </div>
    </div>
  );
};

export default Specialisation;
