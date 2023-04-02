import { useIntl } from "react-intl";

import useGenerationsSWR from "../../hooks/useGenerationsSWR";
import GenerationListing from "./GenerationListing";

const GenerationsSection = () => {
  const { generations, error } = useGenerationsSWR();
  const { formatMessage } = useIntl();

  if (error) {
    return <div>{formatMessage({ id: "fetch-generations-error" })}</div>;
  }

  if (!generations) {
    return <div>{formatMessage({ id: "fetch-generations-loading" })}</div>;
  }

  return (
    <>
      <h3 className="mb-3 text-3xl font-bold text-gray-700">
        {formatMessage({ id: "generations" })}
      </h3>
      <GenerationListing generations={generations} />
    </>
  );
};

export default GenerationsSection;
