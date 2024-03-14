/* eslint-disable react/jsx-pascal-case */
import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import HeaderNav from "./Components/Header/HeaderNav.js";
const Home = lazy(() => import("./Pages/Home/Home"));
const About_Us = lazy(() => import("./Pages/About_Us/About_Us.js"));
const Trip = lazy(() => import("./Pages/Trip"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HeaderNav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ABOUT_US" exact element={<About_Us />} />
        <Route path="/trip_page" exact element={<Trip />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
