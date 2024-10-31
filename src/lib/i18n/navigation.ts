import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

import { pathnames } from "./pathnames";
import { locales } from "./i18n";

export const {
  Link: LocalizedLink,
  redirect,
  usePathname,
  useRouter,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
});
