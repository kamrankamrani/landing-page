import { Grid } from "@mui/material";
import DetailDescription from "../DetailDescription/DetailDescription";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import IndexImage from "../IndexImage/IndexImage";
import TabsMenu from "../TabsMenu/TabsMenu";
import { useEffect } from "react";
import "./Style/style.css";
import { useAppDispatch } from "../../../hooks";
import { renderShopDetailPage } from "../../../features/shopSlice/shopSlice";
import { smarsetData } from "../../../Services/LocalDataBase";

interface IProps {
  product_id?: number;
}

export default function Detail(props: IProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!props.product_id) {
      //mock data load
      dispatch(renderShopDetailPage(smarsetData));
    }
  }, [dispatch, props]);

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
