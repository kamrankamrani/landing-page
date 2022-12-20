import { Grid, Typography } from "@mui/material";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";
import "./Style/style.css";
import { useAppSelector } from "../../../hooks";
import { ShopDetailPageType } from "../../../Services/Types";

export default function AppTab() {
  const shopItem: ShopDetailPageType = useAppSelector(
    (state) => state.shopSlice.shopDetailPage
  );

  const handleClickLink = (value: string) => {
    if (value === "iphone") {
      if (shopItem.app_data.webapp_link) {
        window.open(shopItem.app_data.webapp_link, "_blank");
      }
    } else if (value === "android") {
      if (shopItem.app_data.android_link) {
        window.open(shopItem.app_data.android_link, "_blank");
      }
    }
  };

  return (
    <Grid container className="app-tab-container">
      <Grid
        xs={12}
        md={6}
        className="link-container"
        onClick={() => handleClickLink("iphone")}
      >
        <div className="wrapper">
          <PhoneIphoneRoundedIcon />
          <Typography>لینک وب اپلیکیشن مخصوص آیفون و اندروید</Typography>
        </div>
      </Grid>
      <Grid
        xs={12}
        md={6}
        className="link-container android"
        onClick={() => handleClickLink("android")}
      >
        <div className="wrapper">
          <AdbRoundedIcon />
          <Typography>اپلیکیشن مخصوص اندروید</Typography>
        </div>
      </Grid>
    </Grid>
  );
}
