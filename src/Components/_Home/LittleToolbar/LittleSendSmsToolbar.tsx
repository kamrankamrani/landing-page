import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks";
import "./Style/style.css";

export default function LittleSendSmsToolbar() {
  const text = "sendig sms";
  const [smsElement, setSmsElement] = useState<Element | null>(null);

  const onScreenLampClicked = useAppSelector(
    (state) => state.widgetSlice.onScreenLampIsOn
  );
  const onScreenFlowerClicked = useAppSelector(
    (state) => state.widgetSlice.onScreenFlowerClicked
  );

  useEffect(() => {
    if (!smsElement) {
      return;
    }
    smsElement.classList.add("sms-visible");
    setTimeout(() => {
      smsElement.classList.remove("sms-visible");
    }, 1500);
  }, [onScreenLampClicked, onScreenFlowerClicked]);

  useEffect(() => {
    const el_ = document.querySelector(".little-sms-toolbar");
    if (el_) {
      setSmsElement(el_);
    }
  }, []);

  return (
    <div className="little-toolbar-container">
      <div className="little-sms-toolbar">
        <Typography variant="body2">{text}</Typography>
      </div>
    </div>
  );
}
