import SideMenu from "../SideMenu/SideMenu";
import StoreContainer from "../StoreContainer/StoreContainer";
import "./Style/style.css";

export default function StoreApp() {
  return (
    <div className="store-app-container">
      <SideMenu />
      <StoreContainer />
    </div>
  );
}
