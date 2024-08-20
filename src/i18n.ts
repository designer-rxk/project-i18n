import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { Locale } from "@lib/types";

export const locales: Locale[] = ["en", "lv", "no"];
export const defaultLocale = locales[0];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    notFound();
  };

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
