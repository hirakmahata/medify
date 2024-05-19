import { IoMdSearch } from "react-icons/io";
import "./BookingDetailHeader.css";

const BookingDetailHeader = () => {
  return (
    <div className="booking-header-container">
      <div className="booking-blue-border">
        <h1>My Bookings</h1>
      </div>
      <div className="booking-input-container">
        <input type="text" placeholder="Search By Hospital" />
        <div className="booking-search-button">
          <IoMdSearch size={20} />
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailHeader;
