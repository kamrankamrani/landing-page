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

type getSuggestionDataType = () => ShopItemsDataTypes[];

export const getSuggestionData: getSuggestionDataType = () => {
  const rawProductData: ShopDetailPageType[] = productData;
  const suggestData: ShopItemsDataTypes[] = [];
  rawProductData.forEach((value) => {
    if (Number(value.off) > 0) {
      const data_: ShopItemsDataTypes = {
        description: value.title,
        id: value.id,
        imageUrl: value.index_image_url,
        off: value.off,
        rawPrice: value.price,
      };
      suggestData.push(data_);
    }
  });
  return suggestData;
};
