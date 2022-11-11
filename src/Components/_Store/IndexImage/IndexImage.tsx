/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Grid } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useEffect, useState, MouseEvent } from "react";
import "./Style/style.css";
import { ShopDetailPageType } from "../../../Services/Types";

export default function IndexImage() {
  const defaultImage = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );
  const [imageEl, setImageEl] = useState<null | HTMLElement>(null);
  const [indexImageUrl, setIndexImageUrl] = useState<string>("");
  const shopItem: ShopDetailPageType = useAppSelector(
    (state) => state.shopSlice.shopDetailPage
  );

  useEffect(() => {
    if (shopItem.images_array.length) {
      shopItem.images_array.forEach((value) => {
        if (value.index) {
          setIndexImageUrl(value.url);
        }
      });
    }
  }, [shopItem]);

  useEffect(() => {
    const el_ = document.querySelector("#index-image") as HTMLElement;
    setImageEl(el_);
  }, []);

  const zoomImage = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageEl) return;
    const el_ = e.target as HTMLDivElement;
    const x = e.clientX - el_.offsetLeft;
    const y = e.clientY - el_.offsetTop;
    imageEl.style.transformOrigin = `${x}px ${y}px`;
    imageEl.style.transform = "scale(2)";
  };

  const offZoomImage = () => {
    if (!imageEl) return;
    imageEl.style.transformOrigin = `center center`;
    imageEl.style.transform = "scale(1)";
  };

  return (
    <Grid item xs={12} className="index-image-container">
      <div className="arrow">
        <ChevronLeftRoundedIcon />
      </div>
      <div
        className="image-wrapper"
        onMouseMove={zoomImage}
        //   onMouseOver={zoomImage}
        onMouseLeave={offZoomImage}
      >
        <img id="index-image" alt="main" src={indexImageUrl || defaultImage} />
      </div>
      <div className="arrow">
        <ChevronRightRoundedIcon />
      </div>
    </Grid>
  );
}
