/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import Comments from "../Comments/Comments";
import "./Style/style.css";

export default function Home() {
  const [lampOn, setLampOn] = useState(false);
  const [ignite, setIgnite] = useState(false);
  const isSmallScreen = useAppSelector(
    (state) => state.screenSize.isSmallScreen
  );
  const handlePhoneClick = () => {
    const textMessageEl = document.querySelector(".text-message");
    const lampEl = document.querySelector(".lamp");
    if (!lampOn) {
      if (!isSmallScreen) {
        //for small screen don't show the text message animation
        if (textMessageEl) {
          textMessageEl.classList.add("animate");
        }
        if (lampEl) {
          setTimeout(() => {
            lampEl.classList.add("lamp-on");
            setIgnite(true);
            if (textMessageEl) {
              textMessageEl.classList.remove("animate");
            }
          }, 1400);
        }
      } else if (isSmallScreen) {
        //for small screen
        if (lampEl) {
          lampEl.classList.add("lamp-on");
          setIgnite(true);
        }
      }
    } else if (lampOn) {
      if (!isSmallScreen) {
        //for small screen don't show the text message animation
        if (textMessageEl) {
          textMessageEl.classList.add("animate");
        }
        if (lampEl) {
          setTimeout(() => {
            lampEl.classList.remove("lamp-on");
            setIgnite(false);
            if (textMessageEl) {
              textMessageEl.classList.remove("animate");
            }
          }, 1400);
        }
      } else if (isSmallScreen) {
        //for small screen
        if (lampEl) {
          lampEl.classList.remove("lamp-on");
          setIgnite(false);
        }
      }
    }
    setLampOn(!lampOn);
  };

  return (
    <Grid container className="home-main-container">
      <Grid container className="main-gadget-container">
        <div className="lamp-container">
          <div className="lamp"></div>
          {ignite ? <div className="shadow"></div> : null}
        </div>
        <div className="message-container">
          <div className="text-message"></div>
        </div>
        <div className="phone-container">
          <div className="phone">
            <div></div>
            <div onClick={handlePhoneClick}>
              <Typography unselectable="on" variant="caption">
                {lampOn ? "OFF" : "ON"}
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
      <Comments />
    </Grid>
  );
}
