import { Grid } from "@mui/material";
import RenderShopBody from "./RenderShopBody";
import "./Style/style.css";

export default function ShopBody() {
  return (
    <Grid container className="shop-body-container">
      <RenderShopBody />
    </Grid>
  );
}
