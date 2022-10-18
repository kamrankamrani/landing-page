import { useAppSelector } from "../../hooks";
import "./Style/style.css";

export default function FlowerWidget() {
  const isRain = useAppSelector((state) => state.widgetSlice.isRain);
  return (
    <div className="flower-widget-container">
      <div className="flower-box">
        <div className={`flower-rain ${isRain ? "visible" : "hidden"}`}>
          <span className={`${isRain ? "flower-rain-animation" : ""}`}></span>
          <span className={`${isRain ? "flower-rain-animation" : ""}`}></span>
          <span className={`${isRain ? "flower-rain-animation" : ""}`}></span>
          <span className={`${isRain ? "flower-rain-animation" : ""}`}></span>
          <span className={`${isRain ? "flower-rain-animation" : ""}`}></span>
          <span className={`${isRain ? "flower-rain-animation" : ""}`}></span>
        </div>
        <div className="flower-pot"></div>
        <div className="flower">
          <div className={`${isRain ? "flower-rotate-animation" : ""}`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
