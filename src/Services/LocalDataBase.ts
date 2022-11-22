import { homeUrl, productImagePreUrl } from "./Config";
import { ShopDetailPageType } from "./Types";

export const smarsetData: ShopDetailPageType = {
  id: -1,
  off: "0",
  purchase_link: "",
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

export const productData: ShopDetailPageType[] = [
  {
    id: 0,
    off: "3",
    purchase_link: "",
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
        url: `${homeUrl}${productImagePreUrl}/smarset/1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/smarset/2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/smarset/3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/smarset/4.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/smarset/1.jpg`,
  },
  {
    id: 1,
    off: "0",
    purchase_link:
      "https://www.digikala.com/product/dkp-1550321/%D8%AA%D8%A7%DB%8C%D9%85%D8%B1-%D8%A2%D8%A8%DB%8C%D8%A7%D8%B1%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec01/",
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
    purchase_link:
      "https://www.digikala.com/product/dkp-1710875/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%87%D9%88%D8%B4%D9%85%D9%86%D8%AF-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec04/",
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
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_1.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_4.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_5.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/4/EC_1.jpg`,
  },
  {
    id: 3,
    off: "0",
    purchase_link:
      "https://www.digikala.com/product/dkp-1922723/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec05/",
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
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_1.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_4.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_5.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/5/EC_1.jpg`,
  },
  {
    id: 4,
    off: "0",
    purchase_link:
      "https://www.digikala.com/product/dkp-1928639/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec06/",
    price: "1660000",
    title: "مرکز کنترل شش خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/6/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/6/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/6/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_1.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_4.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_5.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/6/EC_1.jpg`,
  },
  {
    id: 5,
    off: "0",
    purchase_link:
      "https://www.digikala.com/product/dkp-1928726/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec07",
    price: "1850000",
    title: "مرکز کنترل هفت خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/7/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/7/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/7/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_1.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_4.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_5.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/7/EC_1.jpg`,
  },
  {
    id: 6,
    off: "0",
    purchase_link:
      "https://www.digikala.com/product/dkp-1922740/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec08",
    price: "1990000",
    title: "مرکز کنترل هشت خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/8/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/8/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/8/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_1.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_4.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_5.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/8/EC_1.jpg`,
  },
  {
    id: 7,
    off: "0",
    purchase_link:
      "https://www.digikala.com/product/dkp-1922740/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec08",
    price: "2150000",
    title: "مرکز کنترل نه خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/9/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/9/EC_2.png`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/9/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_1.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_4.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_5.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/9/EC_1.jpg`,
  },
  {
    id: 8,
    off: "5",
    purchase_link:
      "https://www.digikala.com/product/dkp-1922740/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec08",
    price: "2150000",
    title: "مرکز کنترل ده خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: "",
    },
    technical_text: ``,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/10/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/10/EC_2.png`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/10/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_1.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_2.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_3.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_4.jpg`,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/common/EC_5.jpg`,
      },
    ],
    index_image_url: `${homeUrl}${productImagePreUrl}/EC/10/EC_1.jpg`,
  },
];
