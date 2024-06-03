/* eslint-disable react/jsx-pascal-case */
import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import HeaderNav from "./Components/Header/HeaderNav.js";
import ScrollTopButton from "./Tools/ScrollTopButton.js";
import Loading from "./Components/Loading/Loading.js";
import AirplaneLoading from "./Components/Loading/AirplaneLoading.js";
import TripFlightDay from "./Pages/Trip/Trip_days_pages/TripFlightDay.js";
import TripDay1 from "./Pages/Trip/Trip_days_pages/TripDay1.js";
import TripDay2 from "./Pages/Trip/Trip_days_pages/TripDay2.js";
import TripDay3 from "./Pages/Trip/Trip_days_pages/TripDay3.js";
import TripDay4 from "./Pages/Trip/Trip_days_pages/TripDay4.js";
import TripDay5 from "./Pages/Trip/Trip_days_pages/TripDay5.js";
import TripDay7 from "./Pages/Trip/Trip_days_pages/TripDay7.js";
import TripDay8 from "./Pages/Trip/Trip_days_pages/TripDay8.js";
import TripDay9 from "./Pages/Trip/Trip_days_pages/TripDay9.js";
import TripArrivalDay from "./Pages/Trip/Trip_days_pages/TripArrivalDay.js";
const Home = lazy(() => import("./Pages/Home/Home"));
const About_Us = lazy(() => import("./Pages/About_Us/About_Us.js"));
const Trip = lazy(() => import("./Pages/Trip/Trip.js"));
const IPI = lazy(() => import("./Pages/IPI/IPI.js"));
const Food = lazy(() => import("./Pages/Food/Food.js"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage/ErrorPage.js"));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <AirplaneLoading />
      ) : (
        <Suspense fallback={<Loading />}>
          <HeaderNav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about_us" exact element={<About_Us />} />
            <Route path="/trip_page" exact element={<Trip />} />
            <Route path="/ipi" exact element={<IPI />} />
            <Route path="/food" exact element={<Food />} />
            <Route path="/departure_day" exact element={<TripFlightDay />} />
            <Route path="/day1" exact element={<TripDay1 />} />
            <Route path="/day2" exact element={<TripDay2 />} />
            <Route path="/day3" exact element={<TripDay3 />} />
            <Route path="/day4" exact element={<TripDay4 />} />
            <Route path="/day5" exact element={<TripDay5 />} />
            <Route path="/day7" exact element={<TripDay7 />} />
            <Route path="/day8" exact element={<TripDay8 />} />
            <Route path="/day9" exact element={<TripDay9 />} />
            <Route path="/arrival_day" exact element={<TripArrivalDay />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
          <ScrollTopButton />
        </Suspense>
      )}
    </>
  );
}

export default App;
