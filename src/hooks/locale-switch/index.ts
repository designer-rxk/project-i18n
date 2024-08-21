import type { Locale } from "@lib/types";
import { useLocale } from "next-intl";
import { startTransition } from "react";
import { usePathname, useRouter } from "@lib/i18n";

export const useLocaleSwitch = () => {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: Locale) => {
    if (locale === currentLocale) {
      return;
    }

    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
  };

  return handleLocaleChange;
};
