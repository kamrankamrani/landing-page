import { homeUrl, productImagePreUrl } from "./Config";
import { ShopDetailPageType } from "./Types";

const commonTechnicalText = `با نصب دستگاه پیامکی ویستو مدل چند خروجی، می‌توانید بدون نیاز به حضور در محل، از راه دور و با تلفن‌همراه خود، انواع وسایل الکتریکی را کنترل نمایید. این سیستم، دارای چند رله خروجی برای اتصال به دو وسیله الکتریکی به صورت مجزا می‌باشد. این دستگاه را میتوانید به راحتی به موتور پمپ های آبیاری، پکیج های گرمایشی، شیربرقی های با ولتاژ کاری مختلف، کولر های اسپلیت، انواع کنتاکتور و سایر ادوات کشاورزی، گلخانه ای و خانگی متصل نمایید. 
حداکثر توان وسایل الکتریکی که میتوانید به هر خروجی از دستگاه متصل کنید، 3 کیلووات یا حدودا 4 اسب بخار میباشد. محدوده جریان (آمپری) که میتوانید از هر خروجی دستگاه عبور دهید، حدود 18 تا 20 آمپر پیوسته و حداکثر 30 آمپر لحظه ای میباشد.
رله های مورد استفاده در دستگاه، رله از نوع کولری میباشد. این نوع رله ها دارای توان بالاتری نسبت به رله های موجود در بازار میباشند. در وسایلی مانند محافظ های برق نیز از همین نوع رله معمولا استفاده میشود.
از هر خروجی دو سیم معمولا به رنگ های آبی و قرمز خارج شده و شماره سیم، سیم 5/2 میباشد. این دو سیم بصورت یک کلید عمل کرده و با وصل کردن سیم ها مطابق دفترچه راهنما، میتوانید فاز یا نول وسیله خود را قطع و وصل نمایید. به عبارت کامل تر سیم ها بصورت رفت و برگشتی یا ورودی - خروجی عمل میکنند.
شما با این دستگاه میتوانید به 3 روش وسیله مورد نظر خود را کنترل کنید. خروجی ها از یکدیگر مجزا میباشند و هر خروجی را بصورت جداگانه میتوانید کنترل کنید. در روش اول میتوانید خروجی را بصورت دائم روشن کنید. یعنی با ارسال پیامک، خروجی شما روشن شده و آنقدر روشن میماند تا با پیامک شما، خاموش شود. فقط در این حالت، خروجی بصورت حافظه دار روشن میشود. یعنی با خاموش روشن شدن دستگاه، خروجی هایی که بصورت دائم روشن بوده اند، مجددا روشن میشوند.
حالت دوم، شما میتوانید خروجی دلخواه خود را بصورت زماندار روشن کنید. کافیست در هر لحظه، پیامک زماندار را ارسال کنید. خروجی در همان لحظه روشن میشود، به مدیر دستگاه گزارش میدهد و سپس بعد از زمانی که مشخص کرده اید، خاموش شده و گزارش را به شما ارسال میکند. خروجی را میتوانید از 1 دقیقه به بالا تا هر زمانی که مد نظر بود روشن کنید. مثلا 20 دقیقه، 2 ساعت، 10 ساعت و ... . دقت کنید روشن شدن این خروجی ها بصورت حافظه دار نیست.
حالت سوم نیز میتوانید یک برنامه منظم را برای دستگاه ارسال کنید. یعنی به عنوان مثال خروجی 1 را میتوانید هر 6 ساعت 10 دقیقه روشن کنید. دقت کنید زمان شروع برنامه منظم، زمان ارسال پیامک میباشد. حداقل زمانی که برای خروجی میتوانید تنظیم کنید، در این مدل، هر 1 ساعت 1 دقیقه میباشد.
دستگاه حداکثر دارای 5 مدیر میباشد. برای ارسال گزارشات خاموش و روشن، به هر 5 نفر گزارش ارسال میکند. نکته دیگر شما میتوانید خاموش و روشن را برای هر خروجی بصورت مجزا یا مشترکا برای تعدادی از خروجی ها تنظیم کنید.
از دیگر امکانات دستگاه میتوان به امکان گزارش گیری از وضعیت خروجی ها، امکان دریافت و تنظیم ساعت و همچنین به سرعت بالای اجرای دستورات اشاره کرد.
`;

const commonAndroidApp = "https://cafebazaar.ir/app/com.visto.Visto";

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
    price: "1050000",
    title: "مرکز کنترل تک خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: `با نصب دستگاه پیامکی ویستو مدل EC01، می‌توانید بدون نیاز به حضور در محل، از راه دور و با تلفن‌همراه خود، انواع وسایل الکتریکی را کنترل نمایید. این سیستم، دارای یک رله خروجی می‌باشد. این دستگاه را میتوانید به راحتی به موتور پمپ های آبیاری، پکیج های گرمایشی، شیربرقی های با ولتاژ کاری مختلف، کولر های اسپلیت، انواع کنتاکتور و سایر ادوات کشاورزی، گلخانه ای و خانگی متصل نمایید. 
    حداکثر توان وسایل الکتریکی که میتوانید به خروجی دستگاه متصل کنید، 3 کیلووات یا حدودا 4 اسب بخار میباشد. محدوده جریان (آمپری) که میتوانید از خروجی دستگاه عبور دهید، حدود 18 تا 20 آمپر پیوسته و حداکثر 30 آمپر لحظه ای میباشد.
    رله های مورد استفاده در دستگاه، رله از نوع کولری میباشد. این نوع رله ها دارای توان بالاتری نسبت به رله های موجود در بازار میباشند. در وسایلی مانند محافظ های برق نیز از همین نوع رله معمولا استفاده میشود.
    از خروجی دو سیم، معمولا به رنگ های آبی و قرمز خارج شده و شماره سیم، سیم 5/2 میباشد. این دو سیم بصورت یک کلید عمل کرده و با وصل کردن سیم ها مطابق دفترچه راهنما، میتوانید فاز یا نول وسیله خود را قطع و وصل نمایید. به عبارت کامل تر سیم ها بصورت رفت و برگشتی یا ورودی - خروجی عمل میکنند.
    شما با این دستگاه میتوانید به 3 روش وسیله مورد نظر خود را کنترل کنید. در روش اول میتوانید خروجی را بصورت دائم روشن کنید. یعنی با ارسال پیامک، خروجی شما روشن شده و آنقدر روشن میماند تا با پیامک شما، خاموش شود. فقط در این حالت، خروجی بصورت حافظه دار روشن میشود. یعنی با خاموش روشن شدن دستگاه، اگر خروجی دائم روشن باشد، مجددا روشن میشود.
    حالت دوم، شما میتوانید خروجی خود را بصورت زماندار روشن کنید. کافیست در هر لحظه، پیامک زماندار را ارسال کنید. خروجی در همان لحظه روشن میشود، به مدیر دستگاه گزارش میدهد و سپس بعد از زمانی که مشخص کرده اید، خاموش شده و گزارش را به شما ارسال میکند. خروجی را میتوانید از 1 دقیقه به بالا تا هر زمانی که مد نظر بود روشن کنید. مثلا 20 دقیقه، 2 ساعت، 10 ساعت و ... . دقت کنید روشن شدن خروجی، در این حالت بصورت حافظه دار نیست.
    حالت سوم نیز میتوانید یک برنامه منظم را برای دستگاه ارسال کنید. یعنی به عنوان مثال خروجی 1 را میتوانید هر 6 ساعت 10 دقیقه روشن کنید. دقت کنید زمان شروع برنامه منظم، زمان ارسال پیامک میباشد. حداقل زمانی که برای خروجی میتوانید تنظیم کنید، در این مدل، هر 1 ساعت 1 دقیقه میباشد.
    دقت کنید این مدل دستگاه، بر خلاف مدل های خروجی بالاتر دارای 1 ادمین میباشد.
    از دیگر امکانات دستگاه میتوان به امکان گزارش گیری از وضعیت خروجی ها، امکان دریافت و تنظیم ساعت و همچنین به سرعت بالای اجرای دستورات اشاره کرد.
    `,
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
    price: "1450000",
    title: "مرکز کنترل چهار خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: commonTechnicalText,
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
    price: "1600000",
    title: "مرکز کنترل پنج خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: commonTechnicalText,
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
    price: "1750000",
    title: "مرکز کنترل شش خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: commonTechnicalText,
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
    price: "1900000",
    title: "مرکز کنترل هفت خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: commonTechnicalText,
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
    price: "2050000",
    title: "مرکز کنترل هشت خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: commonTechnicalText,
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
    price: "2200000",
    title: "مرکز کنترل نه خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: commonTechnicalText,
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
    off: "3",
    purchase_link:
      "https://www.digikala.com/product/dkp-1922740/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9%DB%8C-%D9%88%DB%8C%D8%B3%D8%AA%D9%88-%D9%85%D8%AF%D9%84-ec08",
    price: "2350000",
    title: "مرکز کنترل ده خروجی",
    app_data: {
      webapp_link: "https://app.visto.ir",
      android_link: commonAndroidApp,
    },
    technical_text: commonTechnicalText,
    Q_A: [],
    images_array: [
      {
        url: `${homeUrl}${productImagePreUrl}/EC/10/EC_1.jpg`,
        index: true,
      },
      {
        url: `${homeUrl}${productImagePreUrl}/EC/10/EC_2.jpg`,
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
