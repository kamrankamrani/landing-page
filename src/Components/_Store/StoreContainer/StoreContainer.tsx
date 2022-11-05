import Shop from "../Shop/Shop";
import StoreSuggtion from "../StoreSuggtion/StoreSuggtion";
import "./Style/style.css";

export default function StoreContainer() {
  return (
    <div className="store-container">
      <StoreSuggtion />
      <Shop />
    </div>
  );
}
