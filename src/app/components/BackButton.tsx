import { ChevronLeft } from "@material-ui/icons";
import { useIntl } from "react-intl";

export default function BackButton() {
  const { formatMessage } = useIntl();

  if (window.location.pathname === "/") return null;

  return (
    <button
      className="flex items-center text-xl font-bold lg:hidden"
      onClick={() => window.history.back()}
    >
      <ChevronLeft fontSize="large" />
      {formatMessage({ id: "back-btn" })}
    </button>
  );
}
