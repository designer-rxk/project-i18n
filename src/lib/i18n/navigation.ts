import { locales } from "@i18n";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

import { pathnames } from "./pathnames";

export const {
  Link: NextLink,
  redirect,
  usePathname,
  useRouter,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
});
