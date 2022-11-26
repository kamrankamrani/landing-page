/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { Typography } from "@mui/material";
import "./Style/style.css";
import { useNavigate } from "react-router-dom";

export default function Links() {
  const navigate = useNavigate();

  const handleClickIcons = (value: string) => {
    switch (value) {
      case "store":
        navigate("/store");
        break;
      case "plus":
        navigate("/solutions#");
        break;
      case "call":
        navigate("/solutions#");
        break;
      default:
        break;
    }
  };

  return (
    <div className="solutions-link-container">
      <div className="links-container">
        <div
          className="icon-container"
          onClick={() => handleClickIcons("store")}
        >
          <LocalGroceryStoreRoundedIcon fontSize="large" />
          <Typography variant="caption">فروشگاه</Typography>
        </div>
        <div
          className="icon-container"
          onClick={() => handleClickIcons("plus")}
        >
          <AutoFixHighRoundedIcon fontSize="large" />
          <Typography variant="caption">ویستو پلاس!</Typography>
        </div>
        <div
          className="icon-container"
          onClick={() => handleClickIcons("call")}
        >
          <CallRoundedIcon fontSize="large" />
          <Typography variant="caption">تماس با ما</Typography>
        </div>
      </div>
    </div>
  );
}
