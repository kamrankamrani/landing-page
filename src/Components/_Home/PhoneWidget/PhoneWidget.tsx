/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from "@mui/material";
import {
  setlampIsOn,
  setOnScreenLampIsOn,
} from "../../../features/widgetSlice/widgetSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import "./Style/style.css";

export default function PhoneWidget() {
  const lampOn = useAppSelector((state) => state.widgetSlice.lampIsOn);
  const onScreenLampIsOn = useAppSelector(
    (state) => state.widgetSlice.onScreenLampIsOn
  );
  const isSmallScreen = useAppSelector(
    (state) => state.screenSize.isSmallScreen
  );
  const dispatch = useAppDispatch();

  const handlePhoneClick = () => {
    dispatch(setOnScreenLampIsOn(!onScreenLampIsOn));
    if (!lampOn) {
      if (!isSmallScreen) {
        setTimeout(() => {
          dispatch(setlampIsOn(true));
        }, 1400);
      } else if (isSmallScreen) {
        //for small screen
        dispatch(setlampIsOn(true));
      }
    } else if (lampOn) {
      if (!isSmallScreen) {
        setTimeout(() => {
          dispatch(setlampIsOn(false));
        }, 1400);
      } else if (isSmallScreen) {
        //for small screen
        dispatch(setlampIsOn(false));
      }
    }
  };

  return (
    <div className="phone-container">
      <div className="phone">
        <div></div>
        <div onClick={handlePhoneClick}>
          <Typography variant="caption">
            {onScreenLampIsOn ? "OFF" : "ON"}
          </Typography>
        </div>
        <div></div>
      </div>
    </div>
  );
}
