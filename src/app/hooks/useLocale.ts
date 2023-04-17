import { useContext } from "react";

import { LocaleContext } from "../context/LocaleContext";

export default function useLocale() {
  return useContext(LocaleContext);
}
