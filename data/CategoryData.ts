export enum productCategoriesID {
  min = -1,
  HairCream = 0,
  Shampoo,
  Conditioner,
  SkinCream,
  max,
}

export const productCategories = [
  {
    en: "Hair Cream",
    ar: "كريم شعر",
    id: productCategoriesID.HairCream,
  },
  {
    en: "Shampoo",
    ar: "شامبو",
    id: productCategoriesID.Shampoo,
  },
  {
    en: "Conditioner",
    ar: "مثبت شعر",
    id: productCategoriesID.Conditioner,
  },
  {
    en: "Skin Cream",
    ar: "كريم بشرة",
    id: productCategoriesID.SkinCream,
  },
];
