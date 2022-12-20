/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Grid, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LogoSvg from "../../../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import React, { Fragment } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  setScreenMiddleSize,
  setScreenSmallSize,
} from "../../../features/screenSizeSlice/screenSizeSlice";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { useNavigate } from "react-router-dom";
import MobilMenu from "../../_Portals/MobileMenu/MobileMenu";
import { setOpenMobileMenu } from "../../../features/portalSlice/portalSlice";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import "./Style/style.css";

export default function Header() {
  const smallScreen = useAppSelector((state) => state.screenSize.isSmallScreen);
  const mobileMenuOpen = useAppSelector(
    (state) => state.portalSlice.openMobileMenu
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const matchSmallScreen = useMediaQuery("(max-width:600px)");
  const matchMiddleScreen = useMediaQuery("(max-width:792px)");
  dispatch(setScreenSmallSize(matchSmallScreen));
  dispatch(setScreenMiddleSize(matchMiddleScreen));

  const handleMobileMenuClick = () => {
    dispatch(setOpenMobileMenu(!mobileMenuOpen));
  };

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
      case "plus":
        window.open("https://plus.visto.ir", "_blank");
        break;
      case "iphone":
        window.open("https://app.visto.ir", "_blank");
        break;
      case "android":
        window.open("https://cafebazaar.ir/app/com.visto.Visto", "_blank");
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
                <p onClick={() => handleHeaderClick("android")}>اندروید</p>
                <hr />
                <p onClick={() => handleHeaderClick("iphone")}>وب اپلیکیشن</p>
              </div>
            </div>
          </div>
          <div className="menu-container plus-container">
            <div className="plus" onClick={() => handleHeaderClick("plus")}>
              <AutoAwesomeRoundedIcon fontSize="small" />
              <Typography className="text">ویستو پلاس</Typography>
            </div>
          </div>
          <div className="header-home-container">
            <div className="home" onClick={() => handleHeaderClick("home")}>
              <img src={LogoSvg} alt="header-logo" />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <Fragment>
          <DehazeRoundedIcon
            className="menu-container"
            onClick={handleMobileMenuClick}
          />
          <MobilMenu />
        </Fragment>
      )}
    </Grid>
  );
}
