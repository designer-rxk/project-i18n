import "../globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { LayoutProps } from "@lib/types";
 
export default async function LocaleLayout({
  children,
  params: { locale }
}: LayoutProps) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}