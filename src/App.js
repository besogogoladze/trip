import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer.js";
const Home = lazy(() => import("./Pages/Home/Home"));
const About_Us = lazy(() => import("./Pages/About_Us/About_Us.js"));
const Trip = lazy(() => import("./Pages/Trip"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header />
      <Routes>
        <Route path="/trip" exact element={<Home />} />
        <Route path="/ABOUT_US" exact element={<About_Us />} />
        <Route path="/trip_page" exact element={<Trip />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
