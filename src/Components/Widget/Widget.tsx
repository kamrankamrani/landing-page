import { Grid } from "@mui/material";
import BigPhoneWidget from "../BigPhoneWidget/BigPhoneWidget";
import FlowerWidget from "../FlowerWidget/FlowerWidget";
import LampWidget from "../LampWidget/LampWidget";
import TextMessageWidget from "../TextMessageWidget/TextMessageWidget";
import "./Style/style.css";

export default function Widget() {
  return (
    <Grid container className="main-gadget-container">
      <div className="lamp-flower-parent-container">
        <LampWidget />
        <FlowerWidget />
      </div>
      <TextMessageWidget />
      <BigPhoneWidget />
    </Grid>
  );
}
