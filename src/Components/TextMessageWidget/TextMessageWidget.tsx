import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import "./Style/style.css";

export default function TextMessageWidget() {
  const [textMessageEl, setTextMessageEl] = useState<HTMLElement | null>(null);
  const lampIsOn = useAppSelector(
    (state) => state.widgetSlice.onScreenLampIsOn
  );
  const isSmallScreen = useAppSelector(
    (state) => state.screenSize.isSmallScreen
  );

  useEffect(() => {
    if (!lampIsOn) {
      if (!isSmallScreen) {
        //just animate for big screens
        if (textMessageEl) {
          textMessageEl.classList.add("animate");
          setTimeout(() => {
            textMessageEl.classList.remove("animate");
          }, 1400);
        }
      }
    } else if (lampIsOn) {
      if (!isSmallScreen) {
        //just animate for big screens
        if (textMessageEl) {
          textMessageEl.classList.add("animate");
          setTimeout(() => {
            textMessageEl.classList.remove("animate");
          }, 1400);
        }
      }
    }
  }, [lampIsOn]);

  useEffect(() => {
    const textMEl_: HTMLElement | null =
      document.querySelector(".text-message");
    if (textMEl_) {
      setTextMessageEl(textMEl_);
    }
  }, []);

  return (
    <div className="message-container">
      <div className="text-message"></div>
    </div>
  );
}
