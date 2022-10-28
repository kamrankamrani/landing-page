import Logo from "../Logo/Logo";
import "./Style/style.css";

export default function BannerText() {
  return (
    <div className="banner-text-container">
      <Logo />
      <div className="banner-text-container">
        <span>
          سبک <span className="blue">هوشمند</span> زندگی
        </span>
        <div className="underline"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}
