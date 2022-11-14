/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setIndexImageUrl } from "../../../features/shopSlice/shopSlice";
import "./Style/style.css";

export default function ImagesSlider() {
  const defaultImgUrl = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );
  const imagesArray = useAppSelector(
    (state) => state.shopSlice.shopDetailPage.images_array
  );
  const indexImageUrl = useAppSelector(
    (state) => state.shopSlice.shopDetailPage.index_image_url
  );
  const dispatch = useAppDispatch();

  const handleImagesClick = (url: string) => {
    dispatch(setIndexImageUrl(url));
  };

  return (
    <Grid item xs={12} className="images-slider-container">
      {imagesArray.map((val, ind) => {
        return (
          <img
            onClick={() => handleImagesClick(val.url)}
            key={ind}
            src={val.url || defaultImgUrl}
            alt={`product-${val.url}`}
            className={`${val.url === indexImageUrl ? "selected" : ""}`}
          />
        );
      })}
    </Grid>
  );
}
