import { Grid } from "@mui/material";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import IndexImage from "../IndexImage/IndexImage";
import "./Style/style.css";

export default function Detail() {
  return (
    <div className="detail-container">
      <Grid container className="upper-container">
        <Grid item md={8} xs={12}>
          <IndexImage />
          <ImagesSlider />
        </Grid>
        <Grid item md={4} xs={12}>
          <h1>this is button</h1>
        </Grid>
      </Grid>
    </div>
  );
}
