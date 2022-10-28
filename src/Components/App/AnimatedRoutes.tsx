import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../_Home/Home/Home";
import SolutionsApp from "../_Solutions/App/App";
import { useState, useEffect } from "react";
import "./Style/style.css";

export default function AnimatedRoutes() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname)
      setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  const changeTransitionState = () => {
    if (transitionStage === "fadeOut") {
      setTransistionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={changeTransitionState}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsApp />} />
      </Routes>
    </div>
  );
}
