import { Grid, Typography, Button } from "@mui/material";
import { NumToPersian } from "../../../Services/ConvertNumber";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import "./Style/style.css";

export default function DetailDescription() {
  const mockExist = true;

  const mockPrice = "1550000";

  return (
    <Grid item xs={12} className="desc-container">
      <Grid container className="title-container">
        <Typography variant="h4">محصول کنترل پیامکی</Typography>
      </Grid>
      <Grid container className="price-container">
        <Typography>
          {NumToPersian(Number(mockPrice).toLocaleString())} تومان
        </Typography>
      </Grid>
      <Grid container className="button-container">
        <Button className="button">
          <Typography>خرید از دیجیکالا</Typography>
        </Button>
      </Grid>
      <Grid container className="exist-container">
        <div className={`${mockExist ? "green" : "red"}`}></div>
        <Typography variant="caption">{`${
          mockExist ? "موجود در انبار" : "نا موجود"
        }`}</Typography>
      </Grid>
      <hr />
      <Grid container className="icons-container">
        <div className="icon">
          <PhoneIphoneRoundedIcon fontSize="small" />
          <Typography variant="caption">اپلیکیشن فارسی</Typography>
        </div>
        <div className="icon">
          <LocalShippingRoundedIcon />
          <Typography variant="caption">ارسال رایگان</Typography>
        </div>
        <div className="icon right">
          <BuildRoundedIcon />
          <Typography variant="caption"> ۲ سال گارانتی</Typography>
        </div>
      </Grid>
    </Grid>
  );
}
