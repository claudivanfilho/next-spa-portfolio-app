import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

import GenerationListing from "./GenerationListing";

const GenerationsPage = () => {
  const { formatMessage } = useIntl();
  const { generationId } = useParams();

  return (
    <div className={`col-span-2 mt-4 lg:mt-0 ${generationId ? "hidden lg:block" : "block"}`}>
      <h3 className="mb-3 text-3xl font-bold text-gray-700">
        {formatMessage({ id: "generations" })}
      </h3>
      <GenerationListing />
    </div>
  );
};

export default GenerationsPage;
