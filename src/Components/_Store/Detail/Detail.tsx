import { Grid } from "@mui/material";
import DetailDescription from "../DetailDescription/DetailDescription";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import IndexImage from "../IndexImage/IndexImage";
import TabsMenu from "../TabsMenu/TabsMenu";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { renderShopDetailPage } from "../../../features/shopSlice/shopSlice";
import { smarsetData } from "../../../Services/LocalDataBase";
import { useLocation } from "react-router-dom";
import "./Style/style.css";

export default function Detail() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      if (location.state.product_id) {
        if (location.state.product_id === -1) {
          dispatch(renderShopDetailPage(smarsetData));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // useEffect(() => {
  //   console.log("hree ", location);
  // }, []);

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
      <TabsMenu />
    </div>
  );
}
