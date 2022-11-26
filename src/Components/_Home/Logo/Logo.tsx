import LogoSvg from "../../../assets/logo.svg";
import "./Style/style.css";

export default function Logo() {
  return (
    <div className="visto-logo-container">
      <div className="logo-wrapper">
        <img src={LogoSvg} alt="logo" />
      </div>
    </div>
  );
}
