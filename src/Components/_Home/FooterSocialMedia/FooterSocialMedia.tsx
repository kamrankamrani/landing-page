import { Grid, Typography } from "@mui/material";
import { NumToPersian } from "../../../Services/ConvertNumber";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Style/style.css";

export default function FooterSocialMedia() {
  return (
    <Grid item xs={12} md={4} className="footer-social-container">
      <Typography className="footer-social-title" variant="body2">
        ارتباط با ما
      </Typography>
      <Grid container className="footer-social-wrapper">
        <div className="social-item-container">
          <Typography variant="body2">
            آدرس: تهران - میدان رسالت - خیابان فرجام غربی - حد فاصل حیدرخانی و
            محمد باقری
          </Typography>
        </div>
        <hr></hr>
        <div className="social-item-container">
          <Typography variant="body2">
            شماره تماس: {NumToPersian("02177204313")} - شنبه تا چهارشنبه ساعت{" "}
            {NumToPersian("9 ")}
            الی {NumToPersian("5")} بعد ظهر
          </Typography>
        </div>
        <hr></hr>
        <div className="social-item-container media">
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </Grid>
    </Grid>
  );
}
