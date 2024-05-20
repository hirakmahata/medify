import "./Faq.css";
import faqImage from "../../assets/faq-images/faq.png";
import happy from "../../assets/faq-images/happy.svg";
import support from "../../assets/faq-images/support.svg";
import { FaPlus } from "react-icons/fa";

const Faq = () => {
  const QUESTIONS = [
    "Why choose our medical for your family?",
    "Why we are different from others?",
    "Trusted & experience senior care & love",
    "How to get appointment for emergency cases?",
  ];
  return (
    <div className="faq-container">
      <div className="faq-heading">
        <p>Get Your Answer</p>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-images-questions">
        <div className="images">
          <img src={faqImage} alt="happy-image" />
          <div className="happy-patients-number">
            <div className="happy-image">
              <img src={happy} alt="happy-svg" />
            </div>
            <div className="happy-patients-number-text">
              <h1>84k+</h1>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className="support">
            <img src={support} alt="support-svg" />
          </div>
        </div>
        <div className="questions">
          {QUESTIONS.map((q, i) => (
            <div key={i + 1} className="question">
              <p>{q}</p>
              <FaPlus />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
