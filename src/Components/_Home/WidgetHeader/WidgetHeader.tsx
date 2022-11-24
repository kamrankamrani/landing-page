import { Typography, Grid } from "@mui/material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import "./Style/style.css";

export default function WidgetHeader() {
  return (
    <Grid container className="widget-header-container">
      <Typography>
        <WidgetsRoundedIcon fontSize="small" />
        در قسمت زیر میتوانید از طریق تلفن همراهی که در تصویر است، آبیاری گلدان
        یا لامپ خود را از راه دور کنترل کنید!
      </Typography>
    </Grid>
  );
}
