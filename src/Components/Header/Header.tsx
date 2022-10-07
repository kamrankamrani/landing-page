import { Grid, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./Style/style.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setScreenSmallSize } from "../../features/screenSizeSlice/screenSizeSlice";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";

export default function Header() {
  const smallScreen = useAppSelector((state) => state.screenSize.isSmallScreen);
  const dispatch = useAppDispatch();
  const matchScreen = useMediaQuery("(max-width:600px)");
  dispatch(setScreenSmallSize(matchScreen));

  return (
    <Grid container className="header-container">
      {!smallScreen ? (
        <React.Fragment>
          <div className="menu-container">
            <Typography className="text">فروشگاه</Typography>
          </div>
          <div className="menu-container">
            <Typography className="text">راه کار ها</Typography>
          </div>
          <div className="menu-container dropdown-menu">
            <div className="has-arrow-menu">
              <KeyboardArrowDownRoundedIcon fontSize="small" />
              <Typography>اپلیکیشن</Typography>
            </div>
            <div className="dropdown-content">
              <div>
                <p>اندروید</p>
                <hr />
                <p>آیفون</p>
              </div>
            </div>
          </div>
          <div className="menu-container">
            <Typography className="text">ویستو پلاس</Typography>
          </div>
        </React.Fragment>
      ) : (
        <DehazeRoundedIcon className="menu-container" />
      )}
    </Grid>
  );
}
