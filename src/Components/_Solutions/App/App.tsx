import PrefaceText from "../PrefaceText/PrefaceText";
import SolutionsTopPhoto from "../SolutionsTopPhoto/SolutionsTopPhoto";
import TitleText from "../TitleText/TitleText";
import "./Style/style.css";

export default function SolutionsApp() {
  return (
    <div className="solutions-container">
      <TitleText />
      <PrefaceText />
      <SolutionsTopPhoto />
    </div>
  );
}
