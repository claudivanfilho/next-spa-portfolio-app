import { useIntl } from "react-intl";

import { GenerationResponse } from "@/src/models/index";

const GenerationDetails = ({ generation }: { generation: GenerationResponse }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="flex flex-col pr-2">
      <h2 className="mb-3 text-3xl font-bold text-gray-700">
        <span>{generation.nameTranslated}</span>
      </h2>
      <div className="flex flex-col justify-between text-xl font-bold text-gray-500 lg:flex-row">
        <h3 className="flex gap-2">
          <span>{formatMessage({ id: "region" })}:</span>
          <span>{generation.main_region.name}</span>
        </h3>
        <h3>
          <span>
            {formatMessage({ id: "pokemons_count" }, { count: generation.pokemon_species.length })}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default GenerationDetails;
