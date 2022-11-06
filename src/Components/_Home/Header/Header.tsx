/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Grid, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LogoSvg from "../../../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  setScreenMiddleSize,
  setScreenSmallSize,
} from "../../../features/screenSizeSlice/screenSizeSlice";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { useNavigate } from "react-router-dom";
import "./Style/style.css";

export default function Header() {
  const smallScreen = useAppSelector((state) => state.screenSize.isSmallScreen);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const matchSmallScreen = useMediaQuery("(max-width:600px)");
  const matchMiddleScreen = useMediaQuery("(max-width:792px)");
  dispatch(setScreenSmallSize(matchSmallScreen));
  dispatch(setScreenMiddleSize(matchMiddleScreen));

  const handleHeaderClick = (value: string) => {
    switch (value) {
      case "solutions":
        navigate("/solutions");
        break;
      case "home":
        navigate("/");
        break;
      case "store":
        navigate("/store");
        break;
      default:
        break;
    }
  };

  return (
    <Grid container className="header-container">
      {!smallScreen ? (
        <React.Fragment>
          <div
            className="menu-container"
            onClick={() => handleHeaderClick("store")}
          >
            <Typography className="text">فروشگاه</Typography>
          </div>
          <div
            className="menu-container"
            onClick={() => handleHeaderClick("solutions")}
          >
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
          <div className="header-home-container">
            <div className="home" onClick={() => handleHeaderClick("home")}>
              <img src={LogoSvg} alt="header-logo" />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <DehazeRoundedIcon className="menu-container" />
      )}
    </Grid>
  );
}
