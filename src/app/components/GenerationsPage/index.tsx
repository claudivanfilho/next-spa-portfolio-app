import { useIntl } from "react-intl";
import { Outlet, useParams } from "react-router-dom";

import useGenerationsSWR from "@/app/hooks/useGenerationsSWR";
import GenerationListing from "./GenerationListing";

const GenerationsPage = () => {
  const { generations, error } = useGenerationsSWR();
  const { formatMessage } = useIntl();
  const { generationId } = useParams();

  if (error) {
    return <div>{formatMessage({ id: "fetch-generations-error" })}</div>;
  }

  if (!generations) {
    return <div>{formatMessage({ id: "fetch-generations-loading" })}</div>;
  }

  return (
    <>
      <div className={`col-span-2 mt-4 lg:mt-0 ${generationId ? "hidden lg:block" : "block"}`}>
        <h3 className="mb-3 text-3xl font-bold text-gray-700">
          {formatMessage({ id: "generations" })}
        </h3>
        <GenerationListing generations={generations} />
      </div>
      <Outlet />
    </>
  );
};

export default GenerationsPage;
