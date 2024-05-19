import { Suspense, lazy } from "react";
import "./App.css";
const Footer = lazy(() => import("./components/footer/Footer"));
const GetTheApp = lazy(() => import("./components/get-the-app/GetTheApp"));
const NavBar = lazy(() => import("./components/nav-bar/NavBar"));
const Home = lazy(() => import("./pages/home/Home"));
const SearchDetails = lazy(() => import("./pages/searchDetals/SearchDetails"));
const MyBookings = lazy(() => import("./pages/myBookings/MyBookings"));

import TopBar from "./components/top-bar/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skeleton from "./components/skeleton/Skeleton";
const App = () => {
  return (
    <BrowserRouter>
      <div className="top-container">
        <TopBar />
        <NavBar />
        <Suspense fallback={<Skeleton width="100vw" length={10} />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<SearchDetails />} />
            <Route path="/bookings" element={<MyBookings />} />
          </Routes>
        </Suspense>
        <GetTheApp />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
