/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Grid, Typography, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { NumToPersian } from "../../../Services/ConvertNumber";
import { ShopItemsDataTypes } from "../../../Services/Types";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getShopBodyData } from "../../../Services/LocalApi";
import { setShopBodyItems } from "../../../features/shopSlice/shopSlice";
import "./Style/style.css";

export default function RenderShopBody() {
  const navigate = useNavigate();
  const shopBodyData: ShopItemsDataTypes[] = useAppSelector(
    (state) => state.shopSlice.shopBodyItems
  );
  const defaultImage = useAppSelector(
    (state) => state.shopSlice.defaultImageUrl
  );
  const dispatch = useAppDispatch();

  const handleDetailClick = (id: number) => {
    navigate("./detail", { state: { product_id: id || -1 } }); //default is -1
  };

  useEffect(() => {
    const shopData = getShopBodyData();
    if (shopData) {
      dispatch(setShopBodyItems(shopData));
    }
  }, []);

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
                    {Number(value.off) > 0 && (
                      <Typography variant="caption">
                        {NumToPersian(value.off)} %
                      </Typography>
                    )}
                  </div>
                </div>
                <div
                  className="img-container"
                  onClick={() => handleDetailClick(value.id)}
                >
                  <img src={value.imageUrl || defaultImage} alt="item-pic" />
                </div>
                <div className="description">
                  <Typography variant="caption">{value.description}</Typography>
                </div>
                <div className="price-container">
                  <div className="item-off">
                    {Number(value.off) > 0 && (
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
                      onClick={() => handleDetailClick(value.id)}
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
