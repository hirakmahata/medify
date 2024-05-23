import { FaHospitalAlt, FaUserMd } from "react-icons/fa";
import "./SearchBox.css";
import { useNavigate } from "react-router-dom";
import { PiAmbulance, PiFlask } from "react-icons/pi";
import { BiCapsule } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useSnackbar } from "notistack";
import {
  useFetchStatesQuery,
  useFetchCitiesQuery,
  useFetchMedicalCentersQuery,
} from "../../redux/api/apiSlice";

import { useSelector, useDispatch } from "react-redux";
import {
  setStates,
  setCities,
  setSelectedState,
  setSelectedCity,
  setMedicalCenters,
} from "../../redux/reducers/reducer";
import { getOptionByVarient } from "../../utils/DateFunctions";
import Loader from "../loader/Loader";

const SearchBox = () => {
  const MORE_INFO = [
    { text: "Doctors", icon: <FaUserMd size={50} /> },
    { text: "Labs", icon: <PiFlask size={50} /> },
    { text: "Hospitals", icon: <FaHospitalAlt size={50} /> },
    { text: "Medical Store", icon: <BiCapsule size={50} /> },
    { text: "Ambulance", icon: <PiAmbulance size={50} /> },
  ];

  const STYLES = {
    dropdownIndicator: () => ({
      display: "none",
    }),
    control: (provided, state) => ({
      ...provided,
      fontSize: "medium",
      backgroundColor: "#fafbfe",
      paddingLeft: "1.7rem",
      paddingTop: "0.2rem",
      paddingBottom: "0.2rem",
      outline: "none",
      cursor: "pointer",
      borderRadius: "2px",
      border: state.isFocused ? "none" : "1px solid #f0f0f0",
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
  };

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [active, setActive] = useState(null);

  const dispatch = useDispatch();
  const { data: states, error: statesError } = useFetchStatesQuery();

  const [searchClicked, setSearchClicked] = useState(false);
  const selectedState = useSelector((state) => state.S.selectedState);
  const selectedCity = useSelector((state) => state.S.selectedCity);

  const { data: cities, error: citiesError } = useFetchCitiesQuery(
    selectedState?.value,
    {
      skip: !selectedState,
      refetchOnMountOrArgChange: true,
    }
  );
  const {
    data: medicalCenters,
    isLoading: medicalCentersLoading,
    error: medicalCentersError,
  } = useFetchMedicalCentersQuery(
    { state: selectedState?.value, city: selectedCity?.value },
    {
      skip: !selectedCity || !searchClicked,
      refetchOnMountOrArgChange: true,
    }
  );

  const handleStateChange = (selectedOption) => {
    dispatch(setSelectedState(selectedOption));
    dispatch(setSelectedCity(null));
  };

  const handleCityChange = (selectedOption) => {
    setSearchClicked(false);
    dispatch(setSelectedCity(selectedOption));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedCity) {
      enqueueSnackbar(
        "Please Select State and City Both to get results",
        getOptionByVarient("error")
      );
      return;
    }
    setSearchClicked(true);
  };

  useEffect(() => {
    dispatch(setStates(states));
  }, [dispatch, states]);

  useEffect(() => {
    dispatch(setCities(cities));
  }, [dispatch, cities]);

  useEffect(() => {
    dispatch(setMedicalCenters(medicalCenters));
    if (medicalCenters) {
      navigate("/search");
    }
  }, [dispatch, medicalCenters, navigate]);

  useEffect(() => {
    if (statesError || citiesError || medicalCentersError) {
      enqueueSnackbar("Internal Server Error", getOptionByVarient("error"));
    }
  }, [citiesError, enqueueSnackbar, medicalCentersError, statesError]);

  return (
    <div className="search-box-container">
      <div className="inputs-button">
        <div className="inputs">
          <div className="state">
            <IoMdSearch size={20} />
            <Select
              id="states"
              value={selectedState}
              onChange={handleStateChange}
              options={states?.map((state) => ({ value: state, label: state }))}
              placeholder="State"
              isClearable
              isSearchable
              noOptionsMessage={() => "No State Found"}
              styles={STYLES}
            />
          </div>
          <div className="city">
            <IoMdSearch size={20} />
            <Select
              id="cities"
              value={selectedCity}
              onChange={handleCityChange}
              options={cities?.map((city) => ({ value: city, label: city }))}
              placeholder="City"
              isClearable
              isSearchable
              noOptionsMessage={() => "No City Found"}
              styles={STYLES}
              isDisabled={!selectedState}
            />
          </div>
        </div>
        <div onClick={handleSearch} className="search-button">
          <IoMdSearch size={20} />
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="more-section">
        <div className="search-box-heading">You may be looking for</div>
        <div className="more">
          {MORE_INFO.map((info, index) => (
            <div
              onClick={() => setActive(index)}
              key={index}
              className={`myIcon ${active === index ? "active" : ""}`}
            >
              {info.icon}
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
      {medicalCentersLoading && <Loader />}
    </div>
  );
};

export default SearchBox;
