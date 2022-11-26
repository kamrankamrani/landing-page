/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import { NumToPersian } from "../../../Services/ConvertNumber";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { ShopItemsDataTypes } from "../../../Services/Types";
import { getSuggestionData } from "../../../Services/LocalApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/style.css";

export default function StoreSuggtion() {
  const defaultImage = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );
  const [dailyOffData, setDailyoffData] = useState<ShopItemsDataTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDailyoffData(getSuggestionData());
  }, []);

  const handleSuggetClick = (id: number) => {
    navigate("./detail", { state: { product_id: id } }); //default is -1
  };

  return (
    <div className="store-suggestion-container">
      <div className="title">
        <Typography>پیشنهاد های</Typography>
        <Typography>شگفت انگیز!</Typography>
        <button>
          مشاهده همه <KeyboardArrowLeftRoundedIcon fontSize="small" />
        </button>
      </div>
      <div className="cards-container">
        {dailyOffData.length &&
          dailyOffData.map((value_, index) => {
            return (
              <div key={index} className="card">
                <div className="off-container">
                  <Typography variant="caption">
                    {NumToPersian(value_.off)} %
                  </Typography>
                </div>
                <div
                  className="image-container"
                  onClick={() => handleSuggetClick(value_.id)}
                >
                  <img
                    src={value_.imageUrl || defaultImage}
                    alt="suggest-pic"
                  />
                </div>
                <div className="price-container">
                  <div
                    className="shop"
                    onClick={() => handleSuggetClick(value_.id)}
                  >
                    <ShoppingBagOutlinedIcon style={{ color: "#d2042d" }} />
                    <Typography>خرید آنلاین</Typography>
                  </div>
                  <div>
                    <Typography variant="body1" className="off-text">
                      {NumToPersian(Number(value_.rawPrice).toLocaleString())}{" "}
                      تومان
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: "medium" }}>
                      {NumToPersian(
                        (
                          Number(value_.rawPrice) *
                          (1 - Number(value_.off) / 100)
                        ).toLocaleString()
                      )}{" "}
                      تومان
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
