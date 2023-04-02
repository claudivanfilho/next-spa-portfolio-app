import { ChevronRight } from "@material-ui/icons";

import usePokemonEvolutionsSWR from "../../hooks/usePokemonEvolutionsSWR";
import { Pokemon } from "../../models";
import EvolutionStagesLoader from "./loaders/EvolutionStagesLoader";
import PokemonStageCard from "./PokemonStageCard";

const PokemonEvolutionStages = ({ pokemon }: { pokemon?: Pokemon | null }) => {
  const { evolutions } = usePokemonEvolutionsSWR(pokemon);

  if (!evolutions) return <EvolutionStagesLoader />;

  return (
    <div
      className={`flex w-full lg:gap-3 justify-center items-center`}
      data-testid="pokemon-evolution-stages"
    >
      {evolutions?.[0] && <PokemonStageCard stage={evolutions?.[0]} className="w-1/4" />}
      {evolutions?.[1] && <ChevronRight fontSize="large" />}
      {evolutions?.[1] && <PokemonStageCard stage={evolutions?.[1]} className="w-1/4" />}
      {evolutions?.[2] && <ChevronRight fontSize="large" />}
      {evolutions?.[2] && <PokemonStageCard stage={evolutions?.[2]} className="w-1/4" />}
    </div>
  );
};

export default PokemonEvolutionStages;
