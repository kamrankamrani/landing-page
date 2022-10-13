import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { createRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Switch from "../Switch/Switch";
import "./Style/style.css";

export default function BigPhoneWidget() {
  const lampElSwitch = createRef<HTMLInputElement>();

  const dispatch = useAppDispatch();
  const onScreenLampIsOn = useAppSelector(
    (state) => state.widgetSlice.onScreenLampIsOn
  );

  const handleChangeSwitch = (e: boolean) => {
    console.log("switch chenged", e);
  };

  useEffect(() => {
    console.log(lampElSwitch.current);
  }, [lampElSwitch.current]);

  return (
    <div className="big-phone-container">
      <div className="big-phone">
        <div className="phone-header"></div>
        <div className="phone-mock-profile">
          <div></div>
        </div>
        <div className="widget-control-container">
          <div>
            <LightbulbIcon className="big-phone-icons" />
            <Switch onChange={handleChangeSwitch} ref={lampElSwitch} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
