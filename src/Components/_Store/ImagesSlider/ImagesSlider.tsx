import { Grid } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import "./Style/style.css";

export default function ImagesSlider() {
  const mockImgs = [
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ];
  const defaultImgUrl = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );
  return (
    <Grid item xs={12} className="images-slider-container">
      {mockImgs.map((value, index) => {
        return (
          <img key={index} src={value.url || defaultImgUrl} alt="product" />
        );
      })}
    </Grid>
  );
}
