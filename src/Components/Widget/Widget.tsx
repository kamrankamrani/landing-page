import { Grid } from "@mui/material";
import BigPhoneWidget from "../BigPhoneWidget/BigPhoneWidget";
import LampWidget from "../LampWidget/LampWidget";
import PhoneWidget from "../PhoneWidget/PhoneWidget";
import TextMessageWidget from "../TextMessageWidget/TextMessageWidget";
import "./Style/style.css";

export default function Widget() {
  return (
    <Grid container className="main-gadget-container">
      <LampWidget />
      <TextMessageWidget />
      {/* <PhoneWidget /> */}
      <BigPhoneWidget />
    </Grid>
  );
}
