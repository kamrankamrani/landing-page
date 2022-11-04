import { Typography } from "@mui/material";
import BoardImage from "../../../assets/images/smartset.png";
import "./Style/style.css";

export default function SolutionsTopPhoto() {
  return (
    <div className="solutions-photo-container">
      <div className="solutions-photo-wrapper">
        <img src={BoardImage} alt="smarset" className="photo" />
        <div>
          <Typography>حذف رفت و آمد</Typography>
        </div>
        <div>
          <Typography>صرفه جویی در زمان</Typography>
        </div>
      </div>
    </div>
  );
}
