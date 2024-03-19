/* eslint-disable react/jsx-pascal-case */
import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import HeaderNav from "./Components/Header/HeaderNav.js";
import ScrollTopButton from "./Tools/ScrollTopButton.js";
const Home = lazy(() => import("./Pages/Home/Home"));
const About_Us = lazy(() => import("./Pages/About_Us/About_Us.js"));
const Trip = lazy(() => import("./Pages/Trip/Trip.js"));
const IPI = lazy(() => import("./Pages/IPI/IPI.js"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HeaderNav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about_us" exact element={<About_Us />} />
        <Route path="/trip_page" exact element={<Trip />} />
        <Route path="/ipi" exact element={<IPI />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </Suspense>
  );
}

export default App;
