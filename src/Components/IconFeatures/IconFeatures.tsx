import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { Typography } from "@mui/material";
import "./Style/style.css";

export default function IconFeatures() {
  return (
    <div className="icon-features-container">
      <div className="icons-container-grid">
        <div className="icon-item">
          <div className="icon-wrapper">
            <BoltRoundedIcon className="icon" />
          </div>
          <Typography>طراحی نوین</Typography>
        </div>
        <div className="icon-item">
          <div className="icon-wrapper">
            <SmartphoneRoundedIcon className="icon" />
          </div>
          <Typography>کنترل با تلفن همراه</Typography>
        </div>
        <div className="icon-item">
          <div className="icon-wrapper">
            <AutoAwesomeRoundedIcon className="icon" />
          </div>
          <Typography>تنظیم خودکار</Typography>
        </div>
        <div className="icon-item">
          <div className="icon-wrapper">
            <GridViewRoundedIcon className="icon" />
          </div>
          <Typography>دارای اپلیکیشن</Typography>
        </div>
      </div>
    </div>
  );
}
