import { Typography } from "@mui/material";
import { useState } from "react";
import "./Style/style.css";

export default function LittleSendSmsToolbar() {
  const text = "sendig sms";
  const [isVisible] = useState(true);
  return (
    <div className="little-toolbar-container">
      <div
        className={`little-sms-toolbar ${
          isVisible ? "sms-visible" : "sms-hidden"
        }`}
      >
        <Typography variant="body2">{text}</Typography>
      </div>
    </div>
  );
}
