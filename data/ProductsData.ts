import { productCategoriesID } from "./CategoryData";

export interface ShopProduct {
  categoryId: number[];
  itemId: number;
  itemStr: string;
  name: { en: string; ar: string };
  images: string[];
  href: string;
  description: { en: string; ar: string };
}

export const productsData: ShopProduct[] = [
  {
    categoryId: [productCategoriesID.HairCream],
    itemId: 0,
    itemStr: "long_hair_cream",
    name: { en: "Long Hair Cream", ar: "كريم لونح هير" },
    images: [
      "/Products/long_hair_cream.png",
      "/Products/Long_Hair_Cream_Cover.png",
    ],
    href: "/shop/long_hair_cream",
    description: {
      en: "Indulge your long, luscious mane with our Long Hair Conditioner, meticulously crafted to revitalize and fortify your strands from root to tip. Enriched with a blend of natural botanical extracts and potent vitamins, this conditioner is tailored to meet the unique needs of long hair, providing essential hydration and nourishment for unparalleled softness and shine.",
      ar: "دلل شعرك الطويل والرائع مع بلسم الشعر الطويل، المصمم بدقة لتنشيط وتقوية خصلاتك من الجذور إلى الأطراف. تم تصميم هذا البلسم الغني بمزيج من المستخلصات النباتية الطبيعية والفيتامينات القوية لتلبية الاحتياجات الفريدة للشعر الطويل، مما يوفر الترطيب والتغذية الأساسية لنعومة ولمعان لا مثيل لهما.",
    },
  },
  {
    categoryId: [productCategoriesID.Conditioner],
    itemId: 1,
    itemStr: "long_hair_conditioner",
    name: { en: "Long Hair Conditioner", ar: "بلسم شعر لونح هير" },
    images: [
      "/Products/long_hair_conditioner.png",
      "/Products/long_hair_cover.png",
    ],
    href: "/shop/long_hair_conditioner",
    description: {
      en: "Indulge your long, luscious mane with our Long Hair Conditioner, meticulously crafted to revitalize and fortify your strands from root to tip. Enriched with a blend of natural botanical extracts and potent vitamins, this conditioner is tailored to meet the unique needs of long hair, providing essential hydration and nourishment for unparalleled softness and shine.",
      ar: "دلل شعرك الطويل والرائع مع بلسم الشعر الطويل، المصمم بدقة لتنشيط وتقوية خصلاتك من الجذور إلى الأطراف. تم تصميم هذا البلسم الغني بمزيج من المستخلصات النباتية الطبيعية والفيتامينات القوية لتلبية الاحتياجات الفريدة للشعر الطويل، مما يوفر الترطيب والتغذية الأساسية لنعومة ولمعان لا مثيل لهما.",
    },
  },
  {
    categoryId: [productCategoriesID.Shampoo],
    itemId: 2,
    itemStr: "long_hair_shampoo",
    name: { en: "Long Hair Shampoo", ar: "شامبو لونح هير" },
    images: [
      "/Products/long_hair_shampoo.png",
      "/Products/long_hair_cover.png",
    ],
    href: "/shop/long_hair_shampoo",
    description: {
      en: "Indulge your long, luscious mane with our Long Hair Conditioner, meticulously crafted to revitalize and fortify your strands from root to tip. Enriched with a blend of natural botanical extracts and potent vitamins, this conditioner is tailored to meet the unique needs of long hair, providing essential hydration and nourishment for unparalleled softness and shine.",
      ar: "دلل شعرك الطويل والرائع مع بلسم الشعر الطويل، المصمم بدقة لتنشيط وتقوية خصلاتك من الجذور إلى الأطراف. تم تصميم هذا البلسم الغني بمزيج من المستخلصات النباتية الطبيعية والفيتامينات القوية لتلبية الاحتياجات الفريدة للشعر الطويل، مما يوفر الترطيب والتغذية الأساسية لنعومة ولمعان لا مثيل لهما.",
    },
  },
  {
    categoryId: [productCategoriesID.HairCream],
    itemId: 3,
    itemStr: "long_kids_hair_cream",
    name: { en: "Long Hair Kids Cream", ar: "كريم لونح هير للاطفال" },
    images: ["/Products/long_kids_hair_cream.png"],
    href: "/shop/long_kids_hair_cream",
    description: {
      en: "Indulge your long, luscious mane with our Long Hair Conditioner, meticulously crafted to revitalize and fortify your strands from root to tip. Enriched with a blend of natural botanical extracts and potent vitamins, this conditioner is tailored to meet the unique needs of long hair, providing essential hydration and nourishment for unparalleled softness and shine.",
      ar: "دلل شعرك الطويل والرائع مع بلسم الشعر الطويل، المصمم بدقة لتنشيط وتقوية خصلاتك من الجذور إلى الأطراف. تم تصميم هذا البلسم الغني بمزيج من المستخلصات النباتية الطبيعية والفيتامينات القوية لتلبية الاحتياجات الفريدة للشعر الطويل، مما يوفر الترطيب والتغذية الأساسية لنعومة ولمعان لا مثيل لهما.",
    },
  },
  {
    categoryId: [productCategoriesID.HairCream],
    itemId: 4,
    itemStr: "white_to_black_cream",
    name: { en: "White To Black Cream", ar: "كريم وايت تو بلاك" },
    images: [
      "/Products/white_to_black_cream.png",
      "/Products/white_to_black_cream_cover.png",
    ],
    href: "/shop/white_to_black_cream",
    description: {
      en: "Indulge your long, luscious mane with our Long Hair Conditioner, meticulously crafted to revitalize and fortify your strands from root to tip. Enriched with a blend of natural botanical extracts and potent vitamins, this conditioner is tailored to meet the unique needs of long hair, providing essential hydration and nourishment for unparalleled softness and shine.",
      ar: "دلل شعرك الطويل والرائع مع بلسم الشعر الطويل، المصمم بدقة لتنشيط وتقوية خصلاتك من الجذور إلى الأطراف. تم تصميم هذا البلسم الغني بمزيج من المستخلصات النباتية الطبيعية والفيتامينات القوية لتلبية الاحتياجات الفريدة للشعر الطويل، مما يوفر الترطيب والتغذية الأساسية لنعومة ولمعان لا مثيل لهما.",
    },
  },
  {
    categoryId: [productCategoriesID.SkinCream],
    itemId: 5,
    itemStr: "uwhite_day_whitening_cream",
    name: { en: "uWhite Day Whitening Cream", ar: "يو وايت صباحي" },
    images: ["/Products/uwhite_day_whitening_cream.png"],
    href: "/shop/uwhite_day_whitening_cream",
    description: {
      en: "Indulge your long, luscious mane with our Long Hair Conditioner, meticulously crafted to revitalize and fortify your strands from root to tip. Enriched with a blend of natural botanical extracts and potent vitamins, this conditioner is tailored to meet the unique needs of long hair, providing essential hydration and nourishment for unparalleled softness and shine.",
      ar: "دلل شعرك الطويل والرائع مع بلسم الشعر الطويل، المصمم بدقة لتنشيط وتقوية خصلاتك من الجذور إلى الأطراف. تم تصميم هذا البلسم الغني بمزيج من المستخلصات النباتية الطبيعية والفيتامينات القوية لتلبية الاحتياجات الفريدة للشعر الطويل، مما يوفر الترطيب والتغذية الأساسية لنعومة ولمعان لا مثيل لهما.",
    },
  },
  {
    categoryId: [productCategoriesID.SkinCream],
    itemId: 6,
    itemStr: "uwhite_night_whitening_cream",
    name: { en: "uWhite Night Whitening Cream", ar: "يو وايت ليلي" },
    images: ["/Products/uwhite_night_whitening_cream.png"],
    href: "/shop/uwhite_night_whitening_cream",
    description: {
      en: "Indulge your long, luscious mane with our Long Hair Conditioner, meticulously crafted to revitalize and fortify your strands from root to tip. Enriched with a blend of natural botanical extracts and potent vitamins, this conditioner is tailored to meet the unique needs of long hair, providing essential hydration and nourishment for unparalleled softness and shine.",
      ar: "دلل شعرك الطويل والرائع مع بلسم الشعر الطويل، المصمم بدقة لتنشيط وتقوية خصلاتك من الجذور إلى الأطراف. تم تصميم هذا البلسم الغني بمزيج من المستخلصات النباتية الطبيعية والفيتامينات القوية لتلبية الاحتياجات الفريدة للشعر الطويل، مما يوفر الترطيب والتغذية الأساسية لنعومة ولمعان لا مثيل لهما.",
    },
  },
];

export const shopData = [
  {
    image: "/Products/long_hair_shampoo.png",
    textTitle: productsData[2].name,
    textSubTitle: {
      en: "Dive into the realm of transformation with our cream products, crafted to unveil your skin's natural brilliance. Our innovative formula lavishes your skin with nourishment and rejuvenation, ensuring a luminous complexion that exudes confidence.",
      ar: "انغمس في عالم التحول مع منتجاتنا من الكريم، المصممة لكشف تألق بشرتك الطبيعي. تركيبتنا المبتكرة تغمر بشرتك بالتغذية والتجديد، مضمونة إطلالة متوهجة تنبعث منها الثقة.",
    },
    para1: {
      en: "Indulge in the profound hydration and revitalization offered by our cream products, bestowing upon you a revitalized, youthful appearance.",
      ar: "استمتع بترطيب عميق وتجديد مقدم من منتجاتنا من الكريم، مما يمنحك مظهراً شاباً ومتجدداً.",
    },
    para2: {
      en: "Prepare for a metamorphosis as you embrace the radiant results of our cream products, igniting your confidence and unveiling your inner glow.",
      ar: "استعد للتحول أثناء استقبال نتائج متألقة من منتجاتنا الكريمية، مما يشعل ثقتك ويكشف عن بريقك الداخلي.",
    },
    href: "/shop/long_hair_shampoo",
  },
  {
    image: "/Products/long_hair_conditioner.png",
    textTitle: productsData[1].name,
    textSubTitle: {
      en: "Dive into the realm of transformation with our cream products, crafted to unveil your skin's natural brilliance. Our innovative formula lavishes your skin with nourishment and rejuvenation, ensuring a luminous complexion that exudes confidence.",
      ar: "انغمس في عالم التحول مع منتجاتنا من الكريم، المصممة لكشف تألق بشرتك الطبيعي. تركيبتنا المبتكرة تغمر بشرتك بالتغذية والتجديد، مضمونة إطلالة متوهجة تنبعث منها الثقة.",
    },
    para1: {
      en: "Indulge in the profound hydration and revitalization offered by our cream products, bestowing upon you a revitalized, youthful appearance.",
      ar: "استمتع بترطيب عميق وتجديد مقدم من منتجاتنا من الكريم، مما يمنحك مظهراً شاباً ومتجدداً.",
    },
    para2: {
      en: "Prepare for a metamorphosis as you embrace the radiant results of our cream products, igniting your confidence and unveiling your inner glow.",
      ar: "استعد للتحول أثناء استقبال نتائج متألقة من منتجاتنا الكريمية، مما يشعل ثقتك ويكشف عن بريقك الداخلي.",
    },
    href: "/shop/long_hair_conditioner",
  },
  {
    image: "/Products/long_hair_cream.png",
    textTitle: productsData[0].name,
    textSubTitle: {
      en: "Dive into the realm of transformation with our cream products, crafted to unveil your skin's natural brilliance. Our innovative formula lavishes your skin with nourishment and rejuvenation, ensuring a luminous complexion that exudes confidence.",
      ar: "انغمس في عالم التحول مع منتجاتنا من الكريم، المصممة لكشف تألق بشرتك الطبيعي. تركيبتنا المبتكرة تغمر بشرتك بالتغذية والتجديد، مضمونة إطلالة متوهجة تنبعث منها الثقة.",
    },
    para1: {
      en: "Indulge in the profound hydration and revitalization offered by our cream products, bestowing upon you a revitalized, youthful appearance.",
      ar: "استمتع بترطيب عميق وتجديد مقدم من منتجاتنا من الكريم، مما يمنحك مظهراً شاباً ومتجدداً.",
    },
    para2: {
      en: "Prepare for a metamorphosis as you embrace the radiant results of our cream products, igniting your confidence and unveiling your inner glow.",
      ar: "استعد للتحول أثناء استقبال نتائج متألقة من منتجاتنا الكريمية، مما يشعل ثقتك ويكشف عن بريقك الداخلي.",
    },
    href: "/shop/long_hair_cream",
  },
  {
    image: "/Products/long_kids_hair_cream.png",
    textTitle: productsData[3].name,
    textSubTitle: {
      en: "Dive into the realm of transformation with our cream products, crafted to unveil your skin's natural brilliance. Our innovative formula lavishes your skin with nourishment and rejuvenation, ensuring a luminous complexion that exudes confidence.",
      ar: "انغمس في عالم التحول مع منتجاتنا من الكريم، المصممة لكشف تألق بشرتك الطبيعي. تركيبتنا المبتكرة تغمر بشرتك بالتغذية والتجديد، مضمونة إطلالة متوهجة تنبعث منها الثقة.",
    },
    para1: {
      en: "Indulge in the profound hydration and revitalization offered by our cream products, bestowing upon you a revitalized, youthful appearance.",
      ar: "استمتع بترطيب عميق وتجديد مقدم من منتجاتنا من الكريم، مما يمنحك مظهراً شاباً ومتجدداً.",
    },
    para2: {
      en: "Prepare for a metamorphosis as you embrace the radiant results of our cream products, igniting your confidence and unveiling your inner glow.",
      ar: "استعد للتحول أثناء استقبال نتائج متألقة من منتجاتنا الكريمية، مما يشعل ثقتك ويكشف عن بريقك الداخلي.",
    },
    href: "/shop/long_kids_hair_cream",
  },
  {
    image: "/Products/uwhite_day_whitening_cream.png",
    textTitle: productsData[5].name,
    textSubTitle: {
      en: "Dive into the realm of transformation with our cream products, crafted to unveil your skin's natural brilliance. Our innovative formula lavishes your skin with nourishment and rejuvenation, ensuring a luminous complexion that exudes confidence.",
      ar: "انغمس في عالم التحول مع منتجاتنا من الكريم، المصممة لكشف تألق بشرتك الطبيعي. تركيبتنا المبتكرة تغمر بشرتك بالتغذية والتجديد، مضمونة إطلالة متوهجة تنبعث منها الثقة.",
    },
    para1: {
      en: "Indulge in the profound hydration and revitalization offered by our cream products, bestowing upon you a revitalized, youthful appearance.",
      ar: "استمتع بترطيب عميق وتجديد مقدم من منتجاتنا من الكريم، مما يمنحك مظهراً شاباً ومتجدداً.",
    },
    para2: {
      en: "Prepare for a metamorphosis as you embrace the radiant results of our cream products, igniting your confidence and unveiling your inner glow.",
      ar: "استعد للتحول أثناء استقبال نتائج متألقة من منتجاتنا الكريمية، مما يشعل ثقتك ويكشف عن بريقك الداخلي.",
    },
    href: "/shop/uwhite_day_whitening_cream",
  },
  {
    image: "/Products/uwhite_night_whitening_cream.png",
    textTitle: productsData[6].name,
    textSubTitle: {
      en: "Dive into the realm of transformation with our cream products, crafted to unveil your skin's natural brilliance. Our innovative formula lavishes your skin with nourishment and rejuvenation, ensuring a luminous complexion that exudes confidence.",
      ar: "انغمس في عالم التحول مع منتجاتنا من الكريم، المصممة لكشف تألق بشرتك الطبيعي. تركيبتنا المبتكرة تغمر بشرتك بالتغذية والتجديد، مضمونة إطلالة متوهجة تنبعث منها الثقة.",
    },
    para1: {
      en: "Indulge in the profound hydration and revitalization offered by our cream products, bestowing upon you a revitalized, youthful appearance.",
      ar: "استمتع بترطيب عميق وتجديد مقدم من منتجاتنا من الكريم، مما يمنحك مظهراً شاباً ومتجدداً.",
    },
    para2: {
      en: "Prepare for a metamorphosis as you embrace the radiant results of our cream products, igniting your confidence and unveiling your inner glow.",
      ar: "استعد للتحول أثناء استقبال نتائج متألقة من منتجاتنا الكريمية، مما يشعل ثقتك ويكشف عن بريقك الداخلي.",
    },
    href: "/shop/uwhite_night_whitening_cream",
  },
  {
    image: "/Products/white_to_black_cream.png",
    textTitle: productsData[4].name,
    textSubTitle: {
      en: "Dive into the realm of transformation with our cream products, crafted to unveil your skin's natural brilliance. Our innovative formula lavishes your skin with nourishment and rejuvenation, ensuring a luminous complexion that exudes confidence.",
      ar: "انغمس في عالم التحول مع منتجاتنا من الكريم، المصممة لكشف تألق بشرتك الطبيعي. تركيبتنا المبتكرة تغمر بشرتك بالتغذية والتجديد، مضمونة إطلالة متوهجة تنبعث منها الثقة.",
    },
    para1: {
      en: "Indulge in the profound hydration and revitalization offered by our cream products, bestowing upon you a revitalized, youthful appearance.",
      ar: "استمتع بترطيب عميق وتجديد مقدم من منتجاتنا من الكريم، مما يمنحك مظهراً شاباً ومتجدداً.",
    },
    para2: {
      en: "Prepare for a metamorphosis as you embrace the radiant results of our cream products, igniting your confidence and unveiling your inner glow.",
      ar: "استعد للتحول أثناء استقبال نتائج متألقة من منتجاتنا الكريمية، مما يشعل ثقتك ويكشف عن بريقك الداخلي.",
    },
    href: "/shop/white_to_black_cream",
  },
];
