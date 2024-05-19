import { Suspense, lazy } from "react";
const BookingDetailHeader = lazy(() =>
  import("../../components/booking-detail-header/BookingDetailHeader")
);
const Bookings = lazy(() => import("../../components/bookings/Bookings"));
import Skeleton from "../../components/skeleton/Skeleton";

const MyBookings = () => {
  return (
    <Suspense fallback={<Skeleton width="100vw" length={10} />}>
      <BookingDetailHeader />
      <Bookings />
    </Suspense>
  );
};

export default MyBookings;
