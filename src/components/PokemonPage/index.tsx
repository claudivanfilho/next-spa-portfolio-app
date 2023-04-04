import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

import usePokemonSWR from "@/src/hooks/usePokemonSWR";
import PokemonHeaderLoader from "./loaders/PokemonHeaderLoader";
import StatsLoader from "./loaders/StatsLoader";
import PokemonEvolutions from "./PokemonEvolutions";
import PokemonHeader from "./PokemonHeader";
import PokemonStats from "./PokemonStats";

const PokemonDetailsPage = () => {
  const { pokemonName } = useParams();
  const { formatMessage } = useIntl();
  const { error, pokemon } = usePokemonSWR();
  const name = pokemon?.nameTranslated || pokemonName;

  if (error) {
    return (
      <div className="flex w-full h-full text-xl">
        {formatMessage({ id: "fetch-pokemon-error" })}
      </div>
    );
  }
  if (!pokemonName) {
    return (
      <div className="flex w-full h-full text-xl">
        {formatMessage({ id: "no-pokemon-selected" })}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col col-span-4 lg:pl-5 2xl:pl-10"
      data-testid="pokemon-details-section"
    >
      <h2 className="mb-3 text-3xl font-bold text-gray-600 uppercase">{name}</h2>
      {!pokemon ? <PokemonHeaderLoader /> : <PokemonHeader pokemon={pokemon} />}
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full mb-2 text-lg font-bold text-gray-600 uppercase">
          {formatMessage({ id: "evolution-map" })}
        </h2>
        <PokemonEvolutions pokemon={pokemon} />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="w-full text-lg font-bold text-gray-600 uppercase">
          {formatMessage({ id: "stats" })}
        </h2>
        {!pokemon ? <StatsLoader /> : <PokemonStats pokemon={pokemon} />}
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
