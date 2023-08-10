import { useIntl } from "react-intl";

export default function GenerationError() {
  const { formatMessage } = useIntl();
  return (
    <div className="flex w-full h-full text-xl">
      {formatMessage({ id: "fetch-generation-error" })}
    </div>
  );
}
