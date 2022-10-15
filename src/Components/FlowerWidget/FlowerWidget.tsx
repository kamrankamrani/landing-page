import "./Style/style.css";

export default function FlowerWidget() {
  const isRain = false;
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
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
