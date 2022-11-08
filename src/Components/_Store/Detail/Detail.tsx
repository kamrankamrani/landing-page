import { Grid } from "@mui/material";
import DetailDescription from "../DetailDescription/DetailDescription";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import IndexImage from "../IndexImage/IndexImage";
import "./Style/style.css";

export default function Detail() {
  return (
    <div className="detail-container">
      <Grid container className="upper-container">
        <Grid item md={8} xs={12} className="imgs-container">
          <IndexImage />
          <ImagesSlider />
        </Grid>
        <Grid item md={4} xs={12}>
          <DetailDescription />
        </Grid>
      </Grid>
    </div>
  );
}
