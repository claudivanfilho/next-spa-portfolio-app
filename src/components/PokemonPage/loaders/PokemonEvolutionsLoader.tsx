import { ChevronRight } from "@material-ui/icons";

import PokemonEvolutionCardLoader from "./PokemonEvolutionCardLoader";

const EvolutionEvolutionsLoader = () => (
  <div className="flex items-center justify-center w-full gap-4">
    <PokemonEvolutionCardLoader />
    <ChevronRight fontSize="large" className="text-purple-300" />
    <PokemonEvolutionCardLoader />
    <ChevronRight fontSize="large" className="text-purple-300" />
    <PokemonEvolutionCardLoader />
  </div>
);

export default EvolutionEvolutionsLoader;
