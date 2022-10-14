import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import "./Style/style.css";

export default function LampWidget() {
  const lampIsOn = useAppSelector((state) => state.widgetSlice.lampIsOn);
  const [lampElement, setLampElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (lampIsOn) {
      if (lampElement) {
        lampElement.classList.add("lamp-on");
      }
    } else {
      if (lampElement) {
        lampElement.classList.remove("lamp-on");
      }
    }
  }, [lampIsOn]);

  useEffect(() => {
    const lampEl_: HTMLElement | null = document.querySelector(".lamp");
    if (lampEl_) {
      setLampElement(lampEl_);
    }
  }, []);

  return (
    <div className="lamp-container">
      <div className="lamp"></div>
      <div className="lamp-box"></div>
      {lampIsOn ? <div className="shadow"></div> : null}
    </div>
  );
}
