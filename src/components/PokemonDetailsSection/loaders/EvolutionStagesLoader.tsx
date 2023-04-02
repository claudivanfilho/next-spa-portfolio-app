import { ChevronRight } from "@material-ui/icons";

import PokemonStageCardLoader from "./PokemonStageCardLoader";

const EvolutionStagesLoader = () => (
  <div className="flex items-center justify-center w-full gap-4">
    <PokemonStageCardLoader />
    <ChevronRight fontSize="large" className="text-purple-300" />
    <PokemonStageCardLoader />
    <ChevronRight fontSize="large" className="text-purple-300" />
    <PokemonStageCardLoader />
  </div>
);

export default EvolutionStagesLoader;
