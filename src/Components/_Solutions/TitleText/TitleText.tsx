import { Typography } from "@mui/material";
import "./Style/style.css";

export default function TitleText() {
  return (
    <>
      <Typography className="block-text" variant="h4">
        راه کار ها
      </Typography>
      <Typography className="block-text" variant="h5">
        مرکز کنترل پیامکی
      </Typography>
    </>
  );
}
