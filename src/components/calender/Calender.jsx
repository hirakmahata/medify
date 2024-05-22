import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Calender.css";
import { useSnackbar } from "notistack";
import {
  addMyBookingToLocalStorage,
  generateTimeArray,
  getDateFromString,
  getNextSevenDays,
  getOptionByVarient,
  isTimeExpired,
} from "../../utils/DateFunctions";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addBooking } from "../../redux/reducers/reducer";

const Calender = ({
  hospitalID,
  hospitalName,
  hospitalAddress,
  hospitalType,
  hospitalRating,
  onCalenderClose,
}) => {
  const allDates = getNextSevenDays();
  const morningSlots = generateTimeArray("morning");
  const afternoonSlots = generateTimeArray("afternoon");
  const eveningSlots = generateTimeArray("evening");

  const scrollContainerRef = useRef(null);
  const [activeDate, setActiveDate] = useState(0);
  const [morningActive, setMorningActive] = useState(null);
  const [afterNoonActive, setAfterNoonActive] = useState(null);
  const [eveningActive, setEveningActive] = useState(null);

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const scrollDistance = 300;

  const handleButtonClick = (direction) => {
    if (scrollContainerRef.current) {
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -= scrollDistance;
      } else {
        scrollContainerRef.current.scrollLeft += scrollDistance;
      }
    }
  };

  const handleBookingTime = (slot, index) => {
    if (slot === "morning") {
      setAfterNoonActive(null);
      setEveningActive(null);
      setMorningActive(index);
    } else if (slot === "afternoon") {
      setEveningActive(null);
      setMorningActive(null);
      setAfterNoonActive(index);
    }
    if (slot === "evening") {
      setAfterNoonActive(null);
      setMorningActive(null);
      setEveningActive(index);
    }
  };

  const getBookingTime = () => {
    if (morningActive !== null) return morningSlots[morningActive];
    if (afterNoonActive !== null) return afternoonSlots[afterNoonActive];
    if (eveningActive !== null) return eveningSlots[eveningActive];
    return null;
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingDay =
      allDates[activeDate] === "Today" || allDates[activeDate] === "Tomorrow"
        ? getDateFromString(allDates[activeDate])
        : allDates[activeDate];

    const bookingTime = getBookingTime();

    if (bookingTime === null) {
      enqueueSnackbar(
        "Please Select any Time Slot to Book the Appointment",
        getOptionByVarient("error")
      );
      return;
    }

    if (isTimeExpired(`${bookingDay} ${bookingTime}`)) {
      enqueueSnackbar(
        "Your Selected Slot is already Expired. Please Select Future Slot",
        getOptionByVarient("error")
      );
      return;
    }

    const newBooking = {
      hospitalID,
      hospitalName,
      hospitalAddress,
      hospitalType,
      hospitalRating,
      bookingDay,
      bookingTime,
    };

    dispatch(addBooking(newBooking));
    addMyBookingToLocalStorage("my-bookings", newBooking);

    enqueueSnackbar(
      "Your Appointment is Booked Successfully. Check MyBookings for more Details",
      getOptionByVarient("success")
    );

    onCalenderClose();
  };

  return (
    <div className="calender-container">
      <div className="top-border"></div>
      <div className="dates">
        <div className="left-arrow" onClick={() => handleButtonClick("left")}>
          <MdChevronLeft size={30} />
        </div>
        <ul ref={scrollContainerRef} className="date-tabs">
          {allDates.map((eachDate, index) => (
            <div
              key={`${eachDate + (index + 1)}`}
              className={`tabs ${activeDate === index ? "active-date" : ""}`}
              onClick={() => setActiveDate(index)}
            >
              <li>{eachDate}</li>
              <p>15 Slots Available</p>
            </div>
          ))}
        </ul>
        <div className="right-arrow" onClick={() => handleButtonClick("right")}>
          <MdChevronRight size={30} />
        </div>
      </div>
      <div className="slots-container">
        <div className="morning-slots-container">
          <p>Morning</p>
          <div className="morning-slots">
            {morningSlots.map((time, index) => (
              <div
                key={time}
                className={`single-slot ${
                  morningActive === index ? "booking-active" : ""
                }`}
                onClick={() => handleBookingTime("morning", index)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <div className="afternoon-slots-container">
          <p>Afternoon</p>
          <div className="afternoon-slots">
            {afternoonSlots.map((time, index) => (
              <div
                key={time}
                className={`single-slot ${
                  afterNoonActive === index ? "booking-active" : ""
                }`}
                onClick={() => handleBookingTime("afternoon", index)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <div className="evening-slots-container">
          <p>Evenning</p>
          <div className="evening-slots">
            {eveningSlots.map((time, index) => (
              <div
                key={time}
                className={`single-slot ${
                  eveningActive === index ? "booking-active" : ""
                }`}
                onClick={() => handleBookingTime("evening", index)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="booking-submit"
          onClick={handleBooking}
        >
          CONFIRM BOOKING
        </button>
      </div>
    </div>
  );
};

Calender.propTypes = {
  hospitalID: PropTypes.string.isRequired,
  hospitalName: PropTypes.string.isRequired,
  hospitalAddress: PropTypes.string.isRequired,
  hospitalType: PropTypes.string.isRequired,
  hospitalRating: PropTypes.number.isRequired,
  onCalenderClose: PropTypes.func.isRequired,
};

export default Calender;
