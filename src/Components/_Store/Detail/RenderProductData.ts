import { productData } from "../../../Services/LocalDataBase";
import { ShopDetailPageType } from "../../../Services/Types";

type functionType = (id: number) => ShopDetailPageType | false;

const renderProductData: functionType = (id) => {
  let result: ShopDetailPageType | false = false;
  productData &&
    productData.forEach((value) => {
      if (value.id === id) {
        result = value;
      }
    });
  return result;
};

export default renderProductData;
