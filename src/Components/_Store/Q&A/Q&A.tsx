import { Typography } from "@mui/material";
import { NumToPersian } from "../../../Services/ConvertNumber";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import "./Style/style.css";

export default function QandA() {
  return (
    <div className="q-and-a">
      <div className="phone-call">
        <PhoneInTalkRoundedIcon />
        <Typography>شماره تماس</Typography>
        <Typography>{NumToPersian("02177204313")}</Typography>
      </div>
    </div>
  );
}
