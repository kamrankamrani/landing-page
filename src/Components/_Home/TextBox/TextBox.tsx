import { Grid, Typography } from "@mui/material";
import BannerText from "../BannerText/BannerText";
import IconFeatures from "../IconFeatures/IconFeatures";
import "./Style/style.css";

export default function TextBox() {
  return (
    <Grid container className="banner-container">
      <Grid container className="text-box-container">
        <BannerText />
        <IconFeatures />
      </Grid>
      <Grid item xs={12} className="banner-explain-text">
        <Typography>
          گروه تولید و طراحی ویستو، فعال در زمینه طراحی و تولید سیستم های
          نگهداری و کنترل فضای سبز و سیستم های هوشمند خانه
        </Typography>
      </Grid>
    </Grid>
  );
}
