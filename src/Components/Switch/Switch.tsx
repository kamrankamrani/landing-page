/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import "./Style/style.css";

interface IPorps {
  ref?: React.RefObject<HTMLInputElement>;
  onChange?: (e: boolean) => void;
}

export default function Switch({ ref, onChange }: IPorps) {
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  const handleSwitchClick = () => {
    setSwitchValue(!switchValue);
  };

  useEffect(() => {
    onChange && onChange(switchValue);
  }, [switchValue]);

  return (
    <div onClick={handleSwitchClick} className="switch">
      <input
        // onChange={(e) => onChange && onChange(e)}
        // onChange={handleChange}
        ref={ref || null}
        type="checkbox"
        checked={switchValue}
      ></input>
      <div className="slider"></div>
    </div>
  );
}
