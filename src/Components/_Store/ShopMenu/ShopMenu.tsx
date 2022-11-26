/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from "@mui/material";
import { useState } from "react";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import "./Style/style.css";
import { setSearchValueFromMenu } from "../../../features/shopSlice/shopSlice";

export default function ShopMenu() {
  const [chipIndex, setChipIndex] = useState<number>(0);
  const isMiddleScreen = useAppSelector(
    (state) => state.screenSize.isMiddleScreen
  );
  const searchValue = useAppSelector(
    (state) => state.shopSlice.searchFromMenuValue
  );

  const dispatch = useAppDispatch();

  const handleFilterClick = (value: number) => {
    setChipIndex(value);
  };

  const handleSearchButton = () => {
    console.log("searched");
  };

  const handleSearchMenu = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValueFromMenu(event.target.value));
  };

  return (
    <div className="shop-menu-container">
      <div
        className={`icon-container ${chipIndex === 0 && "selected"} `}
        onClick={() => handleFilterClick(0)}
      >
        {!isMiddleScreen && (
          <Typography variant="caption">جدید ترین ها</Typography>
        )}
        <QueryBuilderRoundedIcon fontSize="small" />
      </div>
      <div
        className={`icon-container ${chipIndex === 1 && "selected"} `}
        onClick={() => handleFilterClick(1)}
      >
        {!isMiddleScreen && (
          <Typography variant="caption">محبوب ترین ها</Typography>
        )}
        <LoyaltyRoundedIcon fontSize="small" />
      </div>
      <div
        className={`icon-container ${chipIndex === 2 && "selected"} `}
        onClick={() => handleFilterClick(2)}
      >
        {!isMiddleScreen && (
          <Typography variant="caption">پر فروش ترین ها</Typography>
        )}
        <AttachMoneyRoundedIcon fontSize="small" />
      </div>
      <div className="search-container">
        <div className="wrapper">
          <SearchRoundedIcon fontSize="small" onClick={handleSearchButton} />
          <input
            placeholder="مرکز کنترل"
            value={searchValue}
            onChange={(event) => handleSearchMenu(event)}
          />
        </div>
      </div>
    </div>
  );
}
