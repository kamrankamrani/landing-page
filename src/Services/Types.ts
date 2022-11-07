export interface commentType {
  id: number;
  text: string;
  date: string;
}

export interface ShopDataType {
  defaultImageUrl: string;
  searchFromMenuValue: string;
  shopBodyItems: ShopItemsDataTypes[];
}

export interface screenSizeSliceType {
  isSmallScreen: boolean;
  isMiddleScreen: boolean;
}

export interface dailyOffDataType {
  description: string;
  off: string;
  rawPrice: string;
  imageUrl: string;
}

export interface ShopItemsDataTypes {
  id: number;
  description: string;
  off: string;
  rawPrice: string;
  imageUrl: string;
}
