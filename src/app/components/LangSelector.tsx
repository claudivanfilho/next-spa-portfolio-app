import { LANGS } from "../config/constants";
import useLocale from "../hooks/useLocale";

export default function LangSelector() {
  const { locale, setLocale } = useLocale();
  return (
    <select
      data-testid="lang-select"
      className="px-2 bg-transparent"
      value={locale}
      onChange={(val) => setLocale(val.target.value)}
    >
      {LANGS.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
