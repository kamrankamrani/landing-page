import { productData } from "./LocalDataBase";
import { ShopDetailPageType, ShopItemsDataTypes } from "./Types";

type getShopBodyDataType = () => ShopItemsDataTypes[];

export const getShopBodyData: getShopBodyDataType = () => {
  const rawProductData: ShopDetailPageType[] = productData;
  const shopData: ShopItemsDataTypes[] = rawProductData.map((value) => {
    const data_: ShopItemsDataTypes = {
      description: value.title,
      id: value.id,
      imageUrl: value.index_image_url,
      off: value.off,
      rawPrice: value.price,
    };
    return data_;
  });

  return shopData;
};
