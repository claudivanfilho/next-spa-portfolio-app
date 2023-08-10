import { ChevronRight } from "@material-ui/icons";

import usePokemonEvolutionsSWR from "@/app/hooks/usePokemonEvolutionsSWR";
import { Pokemon, Resource } from "@/app/models";
import PokemonEvolutionsLoader from "./loaders/PokemonEvolutionsLoader";
import PokemonEvolutionCard from "./PokemonEvolutionCard";
import { useIntl } from "react-intl";

const PokemonEvolutions = ({ pokemon }: { pokemon?: Pokemon | null }) => {
  const { evolutions } = usePokemonEvolutionsSWR(pokemon);
  const { formatMessage } = useIntl();

  const renderPokemonEvolutions = (evolutions: Resource[]) => {
    return (
      <div
        className={`flex w-full lg:gap-3 justify-center items-center`}
        data-testid="pokemon-evolution-stages"
      >
        {evolutions?.[0] && <PokemonEvolutionCard stage={evolutions[0]} className="w-1/4" />}
        {evolutions?.[1] && <ChevronRight fontSize="large" />}
        {evolutions?.[1] && <PokemonEvolutionCard stage={evolutions[1]} className="w-1/4" />}
        {evolutions?.[2] && <ChevronRight fontSize="large" />}
        {evolutions?.[2] && <PokemonEvolutionCard stage={evolutions[2]} className="w-1/4" />}
      </div>
    );
  };

  return (
    <>
      <h2 className="w-full mb-2 text-lg font-bold text-gray-600 uppercase">
        {formatMessage({ id: "evolution-map" })}
      </h2>
      {evolutions ? renderPokemonEvolutions(evolutions) : <PokemonEvolutionsLoader />}
    </>
  );
};

export default PokemonEvolutions;
