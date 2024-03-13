import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales: string[] = ["en", "ar"];
export const localesFullName: string[] = ["English", "Arabic"];
export const localesFullNameArabic: string[] = ["الإنجليزية", "العربية"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export function MapLocaleToFullName(locale: string): string {
  let idx = -1;
  const loc = useLocale();

  let element = locales.find((loc, i) => {
    if (loc === locale) {
      idx = i;
      return true;
    }
  });

  if (element === undefined) {
    return `Not supported locale: ${locale}`;
  }

  if (loc == "en") return localesFullName[idx];
  else return localesFullNameArabic[idx];
}
