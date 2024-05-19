import { PiFlaskDuotone } from "react-icons/pi";
import Board from "./Board";
import "./Families.css";
import { FaHandHoldingHeart, FaHospitalAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Families = () => {
  return (
    <div className="families-container">
      <div className="family-text-section">
        <div className="family-heading">
          <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
          <h1>Our Families</h1>
        </div>
        <div className="family-para">
          <p>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
      </div>
      <div className="board-section">
        <Board
          addPosition="top-left"
          number={5000}
          text="Happy Patients"
          icon={<FaHandHoldingHeart size={40} />}
          color="add-blue"
        />
        <Board
          addPosition="top-right"
          number={200}
          text="Hospitals"
          icon={<FaHospitalAlt size={40} />}
          color="add-red"
        />
        <Board
          addPosition="bottom-left"
          number={1000}
          text="Laboratories"
          icon={<PiFlaskDuotone size={40} />}
          color="add-yellow"
        />
        <Board
          addPosition="bottom-right"
          number={700}
          text="Expert Doctors"
          icon={<FaUserDoctor size={40} />}
          color="add-green"
        />
      </div>
    </div>
  );
};

export default Families;
