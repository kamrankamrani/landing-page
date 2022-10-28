import { Grid } from "@mui/material";
import BannerText from "../BannerText/BannerText";
import IconFeatures from "../IconFeatures/IconFeatures";
import "./Style/style.css";

export default function TextBox() {
  return (
    <Grid container className="text-box-container">
      <BannerText />
      <IconFeatures />
    </Grid>
  );
}
