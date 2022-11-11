import { Grid, Typography, Button } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import { NumToPersian } from "../../../Services/ConvertNumber";
import { ShopItemsDataTypes } from "../../../Services/Types";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import "./Style/style.css";
import { useNavigate } from "react-router-dom";

export default function RenderShopBody() {
  const navigate = useNavigate();
  const shopBodyData: ShopItemsDataTypes[] = useAppSelector(
    (state) => state.shopSlice.shopBodyItems
  );
  const defaultImage = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );

  const handleDetailClick = () => {
    navigate("./detail", { state: { product_id: -1 } });
  };

  return (
    <Grid container className="items-wrapper">
      {shopBodyData.length ? (
        shopBodyData.map((value) => {
          return (
            <Grid
              key={value.id}
              item
              xs={12}
              sm={6}
              lg={3}
              className="item-container"
            >
              <Grid container className="item">
                <div className="off-container">
                  <div className="off">
                    {value.off && (
                      <Typography variant="caption">
                        {NumToPersian(value.off)} %
                      </Typography>
                    )}
                  </div>
                </div>
                <div className="img-container">
                  <img src={value.imageUrl || defaultImage} alt="item-pic" />
                </div>
                <div className="description">
                  <Typography variant="caption">{value.description}</Typography>
                </div>
                <div className="price-container">
                  <div className="item-off">
                    {value.off && (
                      <Typography variant="caption">
                        {NumToPersian(Number(value.rawPrice).toLocaleString())}{" "}
                        تومان
                      </Typography>
                    )}
                  </div>
                  <div className="price">
                    <Typography>
                      {NumToPersian(
                        (
                          Number(value.rawPrice) *
                          (1 - Number(value.off) / 100)
                        ).toLocaleString()
                      )}{" "}
                      تومان
                    </Typography>
                    <Button
                      onClick={handleDetailClick}
                      className="product-detail-button"
                    >
                      <Typography variant="caption">جزئیات بیشتر</Typography>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <Grid container className="no-product">
          <ErrorOutlineRoundedIcon />
          <Typography>محصولی یافت نشد!</Typography>
        </Grid>
      )}
    </Grid>
  );
}
