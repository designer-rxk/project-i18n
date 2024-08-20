import type { PropsWithChildren } from "react";

export type Locale = "en" | "lv" | "no";

export type Pathnames = {
  [path: string]: Record<Locale, string>;
};

export type PageProps = {
  params: { locale: Locale };
};

export type LayoutProps = PropsWithChildren & PageProps;
