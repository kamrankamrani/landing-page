/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useEffect, useState, MouseEvent } from "react";
import { setIndexImageUrl } from "../../../features/shopSlice/shopSlice";
import { setOpenImageModal } from "../../../features/portalSlice/portalSlice";
import ImageModal from "../../_Portals/ImageModal/ImageModal";
import "./Style/style.css";

export default function IndexImage() {
  const defaultImage = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );
  const isMobileScreen = useAppSelector(
    (state) => state.screenSize.isSmallScreen
  );
  const [imageEl, setImageEl] = useState<null | HTMLElement>(null);
  const indexImageUrl = useAppSelector(
    (state) => state.shopSlice.shopDetailPage.index_image_url
  );
  const imagesArray = useAppSelector(
    (state) => state.shopSlice.shopDetailPage.images_array
  );
  const dispatch = useAppDispatch();

  const handleArrowClick = (increment = true) => {
    const arr_len = imagesArray.length;
    if (arr_len === 0) return;
    let index_image = 0;
    imagesArray.forEach((value, index) => {
      if (indexImageUrl === value.url) {
        index_image = index;
        return;
      }
    });
    if (increment) {
      index_image++; //increase index
      index_image = index_image % arr_len;
    } else {
      index_image--;
      index_image = (index_image + arr_len) % arr_len;
    }
    dispatch(setIndexImageUrl(imagesArray[index_image].url));
  };

  useEffect(() => {
    const el_ = document.querySelector("#index-image") as HTMLElement;
    setImageEl(el_);
  }, []);

  const zoomImage = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobileScreen) {
      return;
    }
    if (!imageEl) return;
    const el_ = e.target as HTMLDivElement;
    const x = e.clientX - el_.offsetLeft;
    const y = e.clientY - el_.offsetTop;
    imageEl.style.transformOrigin = `${x}px ${y}px`;
    imageEl.style.transform = "scale(2)";
  };

  const offZoomImage = () => {
    if (isMobileScreen) return;
    if (!imageEl) return;
    imageEl.style.transformOrigin = `center center`;
    imageEl.style.transform = "scale(1)";
  };

  const openImageModal = () => {
    dispatch(setOpenImageModal(true));
  };

  return (
    <Grid item xs={12} className="index-image-container">
      <div className="arrow">
        <ChevronLeftRoundedIcon onClick={() => handleArrowClick()} />
      </div>
      <div className="image-wrapper">
        <img
          onClick={openImageModal}
          onMouseMove={zoomImage}
          //   onMouseOver={zoomImage}
          onMouseLeave={offZoomImage}
          id="index-image"
          alt={indexImageUrl}
          src={indexImageUrl || defaultImage}
        />
      </div>
      <div className="arrow">
        <ChevronRightRoundedIcon onClick={() => handleArrowClick(false)} />
      </div>
      <ImageModal />
    </Grid>
  );
}
