import { Grid, Typography } from "@mui/material";
import ZarinPalLogo from "../../assets/zarinpal.svg";
import "./Style/style.css";

export default function FooterSymbols() {
  return (
    <Grid xs={12} md={4} item className="footer-symbols-container">
      <Typography className="symbols-title" variant="body2">
        نماد ها و لوگو ها
      </Typography>
      <Grid container className="symbols-wrapper">
        <div className="centered-container">
          <div className="footer-symbol-img-container zarinpal">
            <img src={ZarinPalLogo} alt="zarin-pal-logo" />
          </div>
          <Typography variant="body2">درگاه زرین پال</Typography>
        </div>
      </Grid>
    </Grid>
  );
}
