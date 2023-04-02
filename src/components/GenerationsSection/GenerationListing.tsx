import { NavLink, useParams } from "react-router-dom";

import { GenerationResponse } from "../../models/index";

const GenerationListing = ({ generations }: { generations: GenerationResponse[] }) => {
  const { generationId } = useParams();

  return (
    <>
      <div className="flex flex-col">
        {generations.map(({ id, nameTranslated }) => (
          <NavLink
            key={`item-${id}`}
            to={`/generation/${id}`}
            className={`p-8 lg:py-6 mb-3 shadow-md rounded-sm text-center font-bold uppercase text-xs transform hover:scale-105 ${
              `${id}` === generationId
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-200 hover:text-purple-600"
            }`}
          >
            {nameTranslated}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default GenerationListing;
