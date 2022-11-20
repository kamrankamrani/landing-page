export interface commentType {
  id: number;
  text: string;
  date: string;
}

export interface ShopItemsDataTypes {
  id: number;
  description: string;
  off: string;
  rawPrice: string;
  imageUrl: string;
}

export interface ShopDetailPageType {
  id: number;
  off: string;
  price: string;
  title: string;
  technical_text: string;
  Q_A: {
    question: string;
    answer: string;
  }[];
  images_array: {
    url: string;
    index?: boolean;
  }[];
  app_data: {
    webapp_link: string;
    android_link: string;
  };
  index_image_url: string;
}

export interface ShopDataType {
  defaultImageUrl: string;
  searchFromMenuValue: string;
  shopBodyItems: ShopItemsDataTypes[];
  shopDetailPage: ShopDetailPageType;
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

export interface productDataType {
  id: number;
  data: ShopDetailPageType;
}
