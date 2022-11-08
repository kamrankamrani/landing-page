/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Grid } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import { useState } from "react";
import "./Style/style.css";
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

export default function ImagesSlider() {
  const defaultImgUrl = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );
  const [select, setSelect] = useState(0);

  const handleImagesClick = (value: number) => {
    setSelect(value);
  };

  return (
    <Grid item xs={12} className="images-slider-container">
      {mockImgs.map((value, index) => {
        return (
          <img
            onClick={() => handleImagesClick(index)}
            key={index}
            src={value.url || defaultImgUrl}
            alt="product"
            className={`${select === index ? "selected" : ""}`}
          />
        );
      })}
    </Grid>
  );
}
