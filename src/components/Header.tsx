import { ChevronLeft } from "@material-ui/icons";
import { useIntl } from "react-intl";
import { useLocation, useNavigate } from "react-router-dom";

import { LANGS } from "@/src/config/constants";
import useLocale from "@/src/hooks/useLocale";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { locale, setLocale } = useLocale();
  const { formatMessage } = useIntl();

  return (
    <div className="fixed top-0 z-10 w-full py-3 text-white bg-purple-700">
      <div className="flex justify-between max-w-screen-xl px-5 mx-auto 2xl:px-0">
        <h1 className="text-2xl font-bold">
          <span className="hidden md:block">PokeSearch</span>
          <span className="block md:hidden">PSearch</span>
        </h1>
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
        {pathname !== "/" && (
          <button
            className="flex items-center text-xl font-bold lg:hidden"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft fontSize="large" />
            {formatMessage({ id: "back-btn" })}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
