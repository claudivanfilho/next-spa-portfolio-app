import { useIntl } from "react-intl";
import { Outlet, useParams } from "react-router-dom";

import useGenerationSWR from "../../hooks/useGenerationSWR";
import GenerationDetails from "./GenerationDetails";
import PokemonListing from "./PokemonListing";

const GenerationPage = () => {
  const { generation, error } = useGenerationSWR();
  const { pokemonName } = useParams();
  const { formatMessage } = useIntl();

  if (error) {
    return (
      <div className="flex w-full h-full text-xl">
        {formatMessage({ id: "fetch-generation-error" })}
      </div>
    );
  }

  if (!generation) {
    return null;
  }

  return (
    <>
      <div className={`col-span-6 lg:pl-5 2xl:pl-10 ${pokemonName ? "hidden lg:block" : ""}`}>
        <GenerationDetails generation={generation} />
        <div className="mt-3">
          <PokemonListing pokemons={generation.pokemon_species} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default GenerationPage;
