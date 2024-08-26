import { defaultLocale, locales, pathnames } from "@lib/i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  localePrefix: "always",
  localeDetection: false,
  defaultLocale,
  pathnames,
  locales,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
