import { Grid, Typography } from "@mui/material";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";
import "./Style/style.css";

export default function AppTab() {
  return (
    <Grid container className="app-tab-container">
      <Grid xs={12} md={6} className="link-container">
        <PhoneIphoneRoundedIcon />
        <Typography>لینک وب اپلیکیشن مخصوص آیفون و اندروید</Typography>
      </Grid>
      <Grid xs={12} md={6} className="link-container android">
        <AdbRoundedIcon />
        <Typography>اپلیکیشن مخصوص اندروید</Typography>
      </Grid>
    </Grid>
  );
}
