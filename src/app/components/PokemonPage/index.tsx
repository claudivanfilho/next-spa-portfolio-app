import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

import usePokemonSWR from "@/app/hooks/usePokemonSWR";
import PokemonHeaderLoader from "./loaders/PokemonHeaderLoader";
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

  return (
    <div
      className="flex flex-col col-span-4 lg:pl-5 2xl:pl-10"
      data-testid="pokemon-details-section"
    >
      <h2 className="mb-3 text-3xl font-bold text-gray-600 uppercase">{name}</h2>
      {!pokemon ? <PokemonHeaderLoader /> : <PokemonHeader pokemon={pokemon} />}
      <div className="flex flex-col items-center mt-4">
        <PokemonEvolutions pokemon={pokemon} />
      </div>
      <div className="flex flex-col items-center mt-4">
        <PokemonStats pokemon={pokemon} />
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
