import "./Bookings.css";
import { Suspense, lazy, useEffect } from "react";
import ad from "../../assets/ad/ad.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeExpiredBookings } from "../../redux/reducers/reducer";
import Skeleton from "../skeleton/Skeleton";
const BookingCard = lazy(() => import("../booking-card/BookingCard"));
const HospitalNotFound = lazy(() => import("../not-found/HospitalNotFound"));

const Bookings = () => {
  const dispatch = useDispatch();
  const myBookings = useSelector((state) => state.reducer.myBookings);

  useEffect(() => {
    dispatch(removeExpiredBookings());
  }, [dispatch]);

  return (
    <Suspense fallback={<Skeleton width="100vw" length={10} />}>
      <div className="bookings-container">
        {myBookings.length > 0 ? (
          <div className="bookings">
            {myBookings?.map((booking) => (
              <BookingCard
                key={booking.hospitalID}
                hospitalName={booking.hospitalName}
                hospitalAddress={booking.hospitalAddress}
                hospitalType={booking.hospitalType}
                hospitalRating={booking.hospitalRating}
                bookingDay={booking.bookingDay}
                bookingTime={booking.bookingTime}
              />
            ))}
          </div>
        ) : (
          <HospitalNotFound text="No Bookings Yet. Book Appointment to get Results" />
        )}
        <div className="booking-ad-section">
          <div className="booking-ad-card">
            <img src={ad} alt="ad" />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Bookings;
