import "./Specialists.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import image1 from "../../assets/specialists/doctor 1.png";
import image2 from "../../assets/specialists/doctor 2.png";
import image3 from "../../assets/specialists/doctor 3.png";
import image4 from "../../assets/specialists/doctor 4.png";
import image5 from "../../assets/specialists/doctor 5.png";
import image6 from "../../assets/specialists/doctor 6.png";
import image7 from "../../assets/specialists/doctor 7.png";
import { settings } from "./SpecialistSettings";

const DOCTORS = [
  { name: "Dr. Hirak Mahata", profession: "Psychologist", image: image1 },
  { name: "Dr. Ankur Sharma", profession: "Medicine", image: image2 },
  { name: "Dr. Ahmad Khan", profession: "Neurologist", image: image3 },
  { name: "Dr. Bhumi Kaur", profession: "Gynecologist", image: image4 },
  { name: "Dr. Heena Sachdeva", profession: "Orthopadics", image: image5 },
  { name: "Dr. Pallavi Sen", profession: "Pediatrics", image: image6 },
  { name: "Dr. Akriti jain", profession: "Endocrinologist", image: image7 },
];

const Specialists = () => {
  return (
    <div className="specialist-container">
      <div className="doctor-heading">Our Medical Specialist</div>
      <Slider {...settings}>
        {DOCTORS.map((doctor, index) => (
          <div key={index + 1} className="single-specialist">
            <div className="doctor-image">
              <img src={doctor.image} alt={`image ${index + 1}`} />
            </div>
            <div className="doctor-detail">
              <p className="name">{doctor.name}</p>
              <p className="profession">{doctor.profession}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Specialists;
