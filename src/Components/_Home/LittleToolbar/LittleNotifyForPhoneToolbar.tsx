import { Typography } from "@mui/material";
import { useState } from "react";
import "./Style/style.css";

export default function LittleNotifyForPhoneToolbar() {
  const text = "tab to start control ...!";
  const [isVisible] = useState(true);

  return (
    <div className="little-toolbar-container">
      <div className={`little-toolbar ${isVisible ? "visible" : "hidden"}`}>
        <Typography variant="body2">{text}</Typography>
      </div>
    </div>
  );
}
