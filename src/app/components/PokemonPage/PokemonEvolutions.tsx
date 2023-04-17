import { ChevronRight } from "@material-ui/icons";

import usePokemonEvolutionsSWR from "@/app/hooks/usePokemonEvolutionsSWR";
import { Pokemon } from "@/app/models";
import PokemonEvolutionsLoader from "./loaders/PokemonEvolutionsLoader";
import PokemonEvolutionCard from "./PokemonEvolutionCard";

const PokemonEvolutions = ({ pokemon }: { pokemon?: Pokemon | null }) => {
  const { evolutions } = usePokemonEvolutionsSWR(pokemon);

  if (!evolutions) return <PokemonEvolutionsLoader />;

  return (
    <div
      className={`flex w-full lg:gap-3 justify-center items-center`}
      data-testid="pokemon-evolution-stages"
    >
      {evolutions?.[0] && <PokemonEvolutionCard stage={evolutions?.[0]} className="w-1/4" />}
      {evolutions?.[1] && <ChevronRight fontSize="large" />}
      {evolutions?.[1] && <PokemonEvolutionCard stage={evolutions?.[1]} className="w-1/4" />}
      {evolutions?.[2] && <ChevronRight fontSize="large" />}
      {evolutions?.[2] && <PokemonEvolutionCard stage={evolutions?.[2]} className="w-1/4" />}
    </div>
  );
};

export default PokemonEvolutions;
