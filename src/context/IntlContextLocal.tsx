import { FC, ReactNode } from "react";
import { IntlProvider } from "react-intl";

import useLocale from "../hooks/useLocale";
import deMessages from "../lang/de.json";
import enMessages from "../lang/en.json";
import esMessages from "../lang/es.json";
import frMessages from "../lang/fr.json";
import jaMessages from "../lang/ja.json";
import koMessages from "../lang/ko.json";
import ptMessages from "../lang/pt.json";

const messages: { [key: string]: Record<string, string> } = {
  de: deMessages,
  ja: jaMessages,
  fr: frMessages,
  pt: ptMessages,
  en: enMessages,
  es: esMessages,
  ko: koMessages,
};

export const IntlProviderLocal: FC<{ children: ReactNode }> = ({ children }) => {
  const { locale } = useLocale();

  return (
    <IntlProvider locale={locale} messages={messages[locale] || messages.en}>
      {children}
    </IntlProvider>
  );
};
