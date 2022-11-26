import { Grid } from "@mui/material";
import BigPhoneWidget from "../BigPhoneWidget/BigPhoneWidget";
import FlowerWidget from "../FlowerWidget/FlowerWidget";
import LampWidget from "../LampWidget/LampWidget";
import TextMessageWidget from "../TextMessageWidget/TextMessageWidget";
import WidgetHeader from "../WidgetHeader/WidgetHeader";
import "./Style/style.css";

export default function Widget() {
  return (
    <Grid container className="main-gadget-container">
      <WidgetHeader />
      <Grid container>
        <div className="lamp-flower-parent-container">
          <LampWidget />
          <FlowerWidget />
        </div>
        <TextMessageWidget />
        <BigPhoneWidget />
      </Grid>
    </Grid>
  );
}
