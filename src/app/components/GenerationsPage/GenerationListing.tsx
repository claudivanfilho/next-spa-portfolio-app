import { GenerationResponse } from "@/app/models/index";
import GenerationListingItem from "./GenerationListingItem";

const GenerationListing = ({ generations }: { generations: GenerationResponse[] }) => {
  return (
    <>
      <div className="flex flex-col">
        {generations.map(({ id, nameTranslated }) => (
          <GenerationListingItem key={id} id={id} name={nameTranslated!} />
        ))}
      </div>
    </>
  );
};

export default GenerationListing;
