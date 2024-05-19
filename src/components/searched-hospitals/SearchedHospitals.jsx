import "./SearchedHospitals.css";
import { Suspense, lazy } from "react";
import { SiTicktick } from "react-icons/si";
import { useSelector } from "react-redux";
import ad from "../../assets/ad/ad.svg";
const HospitalCard = lazy(() => import("../hospital-card/HospitalCard"));
const HospitalNotFound = lazy(() => import("../not-found/HospitalNotFound"));
import Skeleton from "../skeleton/Skeleton";

const SearchedHospitals = () => {
  const medicalCenters = useSelector((state) => state.reducer.medicalCenters);
  const selectedState = useSelector((state) => state.reducer.selectedState);
  const selectedCity = useSelector((state) => state.reducer.selectedCity);

  return (
    <Suspense fallback={<Skeleton width="100vw" length={10} />}>
      <div className="hospitals-container">
        <div className="hospitals-text">
          {medicalCenters && medicalCenters?.length > 0 ? (
            <h1>{`${medicalCenters?.length} medical centers available in ${selectedCity?.value}, ${selectedState?.value}`}</h1>
          ) : (
            <h1 className="not-found-class">
              No Medical Center found. Search to get Results
            </h1>
          )}
          <div className="bottom-text">
            <SiTicktick />
            <p>
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
        </div>
        <div className="hospitals-boxes">
          {medicalCenters && medicalCenters?.length > 0 ? (
            <div className="hospitals">
              {medicalCenters?.map((hospital) => (
                <HospitalCard
                  key={hospital["Provider ID"]}
                  hospitalID={hospital["Provider ID"]}
                  hospitalName={hospital["Hospital Name"]}
                  hospitalAddress={`${hospital["Address"]}, ${hospital["City"]}, ${hospital["State"]}, ${hospital["ZIP Code"]}`}
                  hospitalType={hospital["Hospital Type"]}
                  hospitalRating={
                    typeof hospital["Hospital overall rating"] === "number"
                      ? hospital["Hospital overall rating"]
                      : 0
                  }
                />
              ))}
            </div>
          ) : (
            <HospitalNotFound text="No Hospital Found. Search to get Results" />
          )}
          <div className="ad-section">
            <div className="ad-card">
              <img src={ad} alt="ad" />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SearchedHospitals;
