import { Pathnames } from "@lib/types";

export const pathnames = {
  "/": {
    en: "/",
    lv: "/",
    no: "/",
  },
  "/about-us": {
    en: "/about-us",
    lv: "/par-mums",
    no: "/om-oss",
  },
} satisfies Pathnames;

export type Pathname = keyof typeof pathnames;
