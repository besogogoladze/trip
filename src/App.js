/* eslint-disable react/jsx-pascal-case */
import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import HeaderNav from "./Components/Header/HeaderNav.js";
import ScrollTopButton from "./Tools/ScrollTopButton.js";
import Loading from "./Components/Loading/Loading.js";
import AirplaneLoading from "./Components/Loading/AirplaneLoading.js";
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
