import { createContext, FC, ReactNode, useState } from "react";

import { DEFAULT_LANG, LANGS } from "../config/constants";

type LocaleContextType = {
  locale: string;
  setLocale: (arg: string) => void;
};

export const LocaleContext = createContext<LocaleContextType>({} as LocaleContextType);

export const LocaleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const browserLanguage =
    LANGS.find((l) => new RegExp(`^${l}`).test(navigator.language)) || DEFAULT_LANG;
  const [locale, setLocale] = useState(browserLanguage);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
