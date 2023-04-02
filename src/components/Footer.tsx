import { useIntl } from "react-intl";

const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <footer className="fixed bottom-0 w-full py-2 text-sm font-bold text-center text-white bg-purple-700">
      {formatMessage({ id: "created-by" })}
    </footer>
  );
};

export default Footer;
