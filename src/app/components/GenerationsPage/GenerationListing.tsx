import { useIntl } from "react-intl";

import useGenerationsSWR from "@/app/hooks/useGenerationsSWR";

import GenerationListingItem from "./GenerationListingItem";
import GenerationListingItemLoader from "./GenerationListingItemLoader";

const GenerationListing = () => {
  const { formatMessage } = useIntl();
  const { generations, error } = useGenerationsSWR();

  if (error) {
    return <div>{formatMessage({ id: "fetch-generations-error" })}</div>;
  }

  return (
    <>
      <div className="grid">
        {generations ? (
          generations.map(({ id, nameTranslated }) => (
            <GenerationListingItem key={id} id={id} name={nameTranslated!} />
          ))
        ) : (
          <GenerationListingItemLoader />
        )}
      </div>
    </>
  );
};

export default GenerationListing;
