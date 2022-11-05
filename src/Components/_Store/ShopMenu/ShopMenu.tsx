/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from "@mui/material";
import { useState } from "react";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Style/style.css";

export default function ShopMenu() {
  const [chipIndex, setChipIndex] = useState<number>(0);
  const handleFilterClick = (value: number) => {
    setChipIndex(value);
  };
  return (
    <div className="shop-menu-container">
      <div
        className={`icon-container ${chipIndex === 0 && "selected"} `}
        onClick={() => handleFilterClick(0)}
      >
        <Typography variant="caption">جدید ترین ها</Typography>
        <QueryBuilderRoundedIcon fontSize="small" />
      </div>
      <div
        className={`icon-container ${chipIndex === 1 && "selected"} `}
        onClick={() => handleFilterClick(1)}
      >
        <Typography variant="caption">محبوب ترین ها</Typography>
        <LoyaltyRoundedIcon fontSize="small" />
      </div>
      <div
        className={`icon-container ${chipIndex === 2 && "selected"} `}
        onClick={() => handleFilterClick(2)}
      >
        <Typography variant="caption">پر فروش ترین ها</Typography>
        <AttachMoneyRoundedIcon fontSize="small" />
      </div>
      <div className="search-container">
        <input placeholder="⌕"></input>
      </div>
    </div>
  );
}
