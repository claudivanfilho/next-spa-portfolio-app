import { Pokemon } from "@/src/models";
import PokemonAnimatedBG from "./PokemonAnimatedBG";
import PokemonPicture from "./PokemonPicture";

const PokemonHeader = ({ pokemon }: { pokemon: Pokemon }) => (
  <div
    className={`w-full relative flex flex-col border-2 border-gray-400 rounded`}
    data-testid="pokemon-header"
  >
    <PokemonAnimatedBG color={pokemon.color.name} className="h-28 h-xl:h-44" />
    <div className="absolute top-0 flex flex-col items-center w-full py-6 h-28 h-xl:h-44 lg:pb-12">
      <PokemonPicture pokemon={pokemon} className="h-full animate-bounce" />
    </div>
    <span className="bottom-0 p-2 text-xs text-white bg-black lg:absolute bg-opacity-70">
      {pokemon.descriptionTranslated}
    </span>
  </div>
);

export default PokemonHeader;
