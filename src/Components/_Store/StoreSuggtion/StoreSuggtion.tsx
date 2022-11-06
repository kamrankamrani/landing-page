import { Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import { NumToPersian } from "../../../Services/ConvertNumber";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./Style/style.css";

export default function StoreSuggtion() {
  const defaultImage = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );

  interface dailyOffDataType {
    description: string;
    off: string;
    rawPrice: string;
    imageUrl: string;
  }

  const dailyOffData: dailyOffDataType[] = [
    {
      description: "مرکز کنترل اسمارست چهار خروجی",
      off: "10",
      rawPrice: "1750000",
      imageUrl: "",
    },
    {
      description: "شیر برقی 1/2 اینچ",
      off: "15",
      rawPrice: "460000",
      imageUrl: "",
    },
  ];

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
        {dailyOffData.map((value, index) => {
          return (
            <div key={index} className="card">
              <div className="off-container">
                <Typography variant="caption">
                  {NumToPersian(value.off)} %
                </Typography>
              </div>
              <div className="image-container">
                <img src={value.imageUrl || defaultImage} alt="suggest-pic" />
              </div>
              <div className="price-container">
                <div className="shop">
                  <ShoppingBagOutlinedIcon style={{ color: "#d2042d" }} />
                  <Typography>خرید آنلاین</Typography>
                </div>
                <div>
                  <Typography variant="body1" className="off-text">
                    {NumToPersian(Number(value.rawPrice).toLocaleString())}{" "}
                    تومان
                  </Typography>
                  <Typography variant="body1" style={{ fontSize: "medium" }}>
                    {NumToPersian(
                      (
                        Number(value.rawPrice) *
                        (1 - Number(value.off) / 100)
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
