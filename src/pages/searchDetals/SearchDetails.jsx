import { Suspense, lazy, useState } from "react";
import Skeleton from "../../components/skeleton/Skeleton";
const SearchDetailHeader = lazy(() =>
  import("../../components/search-detail-header/SearchDetailHeader")
);
const SearchedHospitals = lazy(() =>
  import("../../components/searched-hospitals/SearchedHospitals")
);
const Faq = lazy(() => import("../../components/FAQ-section/Faq"));

const SearchDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Suspense fallback={<Skeleton width="100vw" length={10} />}>
      <SearchDetailHeader setIsLoading={setIsLoading} />
      {!isLoading ? (
        <SearchedHospitals />
      ) : (
        <Skeleton width="100vw" length={10} />
      )}
      <Faq />
    </Suspense>
  );
};

export default SearchDetails;
