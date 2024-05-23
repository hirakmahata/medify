import { GrLocation } from "react-icons/gr";
import "./SearchDetailHeader.css";
import { IoMdSearch } from "react-icons/io";
import Select from "react-select";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

import {
  useFetchCitiesQuery,
  useFetchMedicalCentersQuery,
  useFetchStatesQuery,
} from "../../redux/api/apiSlice";

import { useSelector, useDispatch } from "react-redux";
import {
  setCities,
  setSelectedState,
  setSelectedCity,
  setMedicalCenters,
  setStates,
} from "../../redux/reducers/reducer";
import { useEffect, useRef, useState } from "react";
import { getOptionByVarient } from "../../utils/DateFunctions";

const SearchDetailHeader = ({ setIsLoading, setAlreadySearched }) => {
  const STYLES = {
    dropdownIndicator: () => ({
      display: "none",
    }),
    control: (provided, state) => ({
      ...provided,
      fontSize: "medium",
      backgroundColor: "#fafbfe",
      paddingLeft: "1.9rem",
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

  const isFirstRender = useRef(true);

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { data: states, error: statesError } = useFetchStatesQuery();

  const [searchClicked, setSearchClicked] = useState(false);
  const selectedState = useSelector((state) => state.S.selectedState);
  const selectedCity = useSelector((state) => state.S.selectedCity);

  const allState = useSelector((state) => state.S);
  console.log("checking the reducer location..", allState);

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
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(setMedicalCenters(medicalCenters));
  }, [dispatch, medicalCenters]);

  useEffect(() => {
    if (statesError || citiesError || medicalCentersError) {
      enqueueSnackbar("Internal Server Error", getOptionByVarient("error"));
    }
  }, [citiesError, enqueueSnackbar, medicalCentersError, statesError]);

  useEffect(() => {
    setIsLoading(medicalCentersLoading);
  }, [medicalCentersLoading, setIsLoading]);

  useEffect(() => {
    setAlreadySearched(searchClicked);
  }, [searchClicked, setAlreadySearched]);

  return (
    <div className="search-header-cotainer">
      <div className="blue-border"></div>
      <div className="search-inputs-container">
        <div className="search-state">
          <GrLocation size={20} />
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
        <div className="search-city">
          <GrLocation size={20} />
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
        <div onClick={handleSearch} className="search-button-details">
          <IoMdSearch size={20} />
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
  );
};

SearchDetailHeader.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
  setAlreadySearched: PropTypes.func.isRequired,
};

export default SearchDetailHeader;
