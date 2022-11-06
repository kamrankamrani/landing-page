/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import "./Style/style.css";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks";

export default function SideMenu() {
  const [isHide, setIsHide] = useState(false);
  const [sideMenuEl, setSideMenuEl] = useState<HTMLElement | null>(null);
  const isSmallScreen = useAppSelector(
    (state) => state.screenSize.isMiddleScreen
  );

  useEffect(() => {
    if (!sideMenuEl) return;
    if (isSmallScreen) {
      setIsHide(true);
      sideMenuEl.classList.remove("show");
      sideMenuEl.classList.add("hide");
      sideMenuEl.classList.remove("hide-store-sidemenu");
    } else {
      setIsHide(false);
      sideMenuEl.classList.remove("hide");
      sideMenuEl.classList.add("show");
      sideMenuEl.classList.remove("show-store-sidemenu");
    }
  }, [isSmallScreen, sideMenuEl]);

  const handleToggleMenu = () => {
    if (sideMenuEl) {
      if (!isHide) {
        sideMenuEl.classList.add("show");
        sideMenuEl.classList.add("hide-store-sidemenu");
      } else {
        sideMenuEl.classList.remove("hide");
        sideMenuEl.classList.add("show-store-sidemenu");
      }
    }
  };

  useEffect(() => {
    const el_ = document.querySelector("#store-side-menu") as HTMLDivElement;
    setSideMenuEl(el_);
  }, []);

  const handleSideMenuAnimation = () => {
    if (!sideMenuEl) return;
    if (!isHide) {
      sideMenuEl.classList.remove("show");
      sideMenuEl.classList.add("hide");
      sideMenuEl.classList.remove("hide-store-sidemenu");
    } else {
      sideMenuEl.classList.remove("hide");
      sideMenuEl.classList.add("show");
      sideMenuEl.classList.remove("show-store-sidemenu");
    }
    setIsHide(!isHide);
  };

  return (
    <div className="store-sidemenu-container">
      <div className="toggle-menu" onClick={handleToggleMenu}>
        {!isHide ? <CloseIcon /> : <WidgetsOutlinedIcon />}
      </div>
      <div
        id="store-side-menu"
        onAnimationEnd={handleSideMenuAnimation}
        className="store-sidemenu-wrapper"
      >
        <div className="title">
          <CategoryIcon />
          <Typography>دسته بندی محصولات</Typography>
        </div>
        <div className="menu-detail">
          <Typography variant="body1">کنترل هوشمند</Typography>
          <optgroup>
            <option>
              <Typography className="detail" variant="body2">
                محصولات اسمارست
              </Typography>
            </option>
            <option>
              <Typography className="detail" variant="body2">
                محصولات ویستو
              </Typography>
            </option>
          </optgroup>
        </div>
        <hr />
        <div className="menu-detail">
          <Typography variant="body1">شیر برقی</Typography>
          <optgroup>
            <option>
              <Typography className="detail" variant="body2">
                شیر برقی آب
              </Typography>
            </option>
          </optgroup>
        </div>
      </div>
    </div>
  );
}
