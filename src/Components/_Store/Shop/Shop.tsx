import ShopBody from "../ShopBody/ShopBody";
import ShopMenu from "../ShopMenu/ShopMenu";
import "./Style/style.css";

export default function Shop() {
  return (
    <div className="shop-container">
      <ShopMenu />
      <ShopBody />
    </div>
  );
}
