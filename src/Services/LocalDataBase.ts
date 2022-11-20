import { homeUrl, productImagePreUrl } from "./Config";
import { ShopDetailPageType, ShopItemsDataTypes } from "./Types";

export const smarsetData: ShopDetailPageType = {
  id: -1,
  off: "0",
  price: "1500000",
  title: "دیتای پیش فرض",
  technical_text: `
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    `,
  app_data: {
    webapp_link: "https://app.visto.ir",
    android_link: "",
  },
  Q_A: [],
  images_array: [
    {
      url: "img100",
      index: true,
    },
    {
      url: "img101",
    },
    {
      url: "img102",
    },
  ],
  index_image_url: "image103",
};

export const mockDataForShopBody: ShopItemsDataTypes[] = [
  {
    id: 0,
    description: "سیستم چهار خروجی مدل اسمارست",
    imageUrl: "",
    off: "0",
    rawPrice: "1850000",
  },
  {
    id: 1,
    description: "مرکز کنترل تک خروجی",
    imageUrl: "",
    off: "4",
    rawPrice: "995000",
  },
  {
    id: 2,
    description: "مرکز کنترل چهار خروجی",
    imageUrl: "",
    off: "5",
    rawPrice: "1340000",
  },
  {
    id: 3,
    description: "مرکز کنترل پنج خروجی",
    imageUrl: "",
    off: "4",
    rawPrice: "1550000",
  },
];

export const productData: ShopDetailPageType[] = [
  {
    id: 0,
    off: "0",
    price: "1850000",
    title: "سیستم چهار خروجی مدل اسمارست",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: "img100",
        index: true,
      },
      {
        url: "img101",
      },
      {
        url: "img102",
      },
    ],
    index_image_url: "",
  },
  {
    id: 1,
    off: "0",
    price: "995000",
    title: "مرکز کنترل تک خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/1/MG_1.png`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/1/MG_2.png`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/1/MG_3.png`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/1/MG_4.png`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/1/MG_5.png`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/1/MG_6.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/1/MG_7.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/1/MG_1.png`,
  },
  {
    id: 2,
    off: "0",
    price: "1340000",
    title: "مرکز کنترل چهار خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/4/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/4/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/4/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/4/EC_4.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/4/EC_1.jpg`,
  },
  {
    id: 3,
    off: "0",
    price: "1550000",
    title: "مرکز کنترل پنج خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/5/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/5/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/5/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/5/EC_4.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/5/EC_1.jpg`,
  },
];
