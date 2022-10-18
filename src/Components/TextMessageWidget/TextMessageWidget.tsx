import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import "./Style/style.css";

export default function TextMessageWidget() {
  const [textMessageEl, setTextMessageEl] = useState<HTMLElement | null>(null);
  const onScreenLampClicked = useAppSelector(
    (state) => state.widgetSlice.onScreenLampIsOn
  );
  const onScreenFlowerClicked = useAppSelector(
    (state) => state.widgetSlice.onScreenFlowerClicked
  );
  const isSmallScreen = useAppSelector(
    (state) => state.screenSize.isSmallScreen
  );

  useEffect(() => {
    if (!onScreenLampClicked || !onScreenFlowerClicked) {
      if (!isSmallScreen) {
        //just animate for big screens
        if (textMessageEl) {
          textMessageEl.classList.add("animate");
          setTimeout(() => {
            textMessageEl.classList.remove("animate");
          }, 1400);
        }
      }
    } else if (onScreenLampClicked || onScreenFlowerClicked) {
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
  }, [onScreenLampClicked, onScreenFlowerClicked]);

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
