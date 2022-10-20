import LightbulbIcon from "@mui/icons-material/Lightbulb";
import {
  setIsRain,
  setlampIsOn,
  setOnScreenFlowerClicked,
  setOnScreenLampIsOn,
} from "../../features/widgetSlice/widgetSlice";
import { useAppDispatch } from "../../hooks";
import Switch from "../Switch/Switch";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import "./Style/style.css";
import LittleNotifyForPhoneToolbar from "../LittleToolbar/LittleNotifyForPhoneToolbar";
import LittleSendSmsToolbar from "../LittleToolbar/LittleSendSmsToolbar";

export default function BigPhoneWidget() {
  const dispatch = useAppDispatch();

  const handleLampSwitchOnScreen = (value = false) => {
    setTimeout(() => {
      dispatch(setlampIsOn(value));
    }, 1400);
    dispatch(setOnScreenLampIsOn(value));
  };

  const handleFlowerSwitchOnScreen = (value = false) => {
    dispatch(setOnScreenFlowerClicked(value));
    setTimeout(() => {
      dispatch(setIsRain(value));
    }, 1400);
  };

  return (
    <div className="big-phone-container">
      <div className="toolbar-notify-container">
        <LittleNotifyForPhoneToolbar />
      </div>
      <div className="toolbar-sms-container">
        <LittleSendSmsToolbar />
      </div>
      <div className="big-phone">
        <div className="phone-header"></div>
        <div className="phone-mock-profile">
          <div>
            <AccountCircleIcon className="big-phone-icons profile" />
          </div>
        </div>
        <div className="widget-control-container">
          <div>
            <LightbulbIcon className="big-phone-icons" />
            <Switch onChange={handleLampSwitchOnScreen} />
          </div>
          <div>
            <LocalFloristIcon className="big-phone-icons" />
            <Switch onChange={handleFlowerSwitchOnScreen} />
          </div>
        </div>
      </div>
    </div>
  );
}
