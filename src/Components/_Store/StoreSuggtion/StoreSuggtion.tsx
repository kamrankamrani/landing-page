import { Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import { NumToPersian } from "../../../Services/ConvertNumber";
import "./Style/style.css";

export default function StoreSuggtion() {
  const defaultImage = useAppSelector(
    (state) => state.storeSlice.defaultImageUrl
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
  ];

  return (
    <div className="store-suggtion-container">
      <div>
        <Typography>شگفت انگیز!</Typography>
        <button>مشاهده همه</button>
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
                <div>
                  <Typography variant="body1" className="off-text">
                    {NumToPersian(value.rawPrice)}
                  </Typography>
                  <Typography variant="body1" style={{ fontSize: "medium" }}>
                    {NumToPersian(
                      Number(value.rawPrice) * (1 - Number(value.off) / 100)
                    )}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">قیمت :</Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
