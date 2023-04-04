import { ErrorRounded } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

import usePokemonSWR from "@/src/hooks/usePokemonSWR";
import { Resource } from "@/src/models/index";
import PokemonEvolutionCardLoader from "./loaders/PokemonEvolutionCardLoader";
import PokemonPicture from "./PokemonPicture";

const PokemonEvolutionCard = ({ stage, className }: { className: string; stage: Resource }) => {
  const { generationId, pokemonName } = useParams();
  const { pokemon, error } = usePokemonSWR(stage.name);
  const isSelected = pokemonName?.toLowerCase() === stage.name.toLowerCase();

  if (!pokemon && !error) return <PokemonEvolutionCardLoader />;

  return (
    <Link
      to={`/generation/${generationId}/pokemon/${stage.name}`}
      className={`flex hover:scale-110 hover:bg-purple-200 hover:border-purple-400 rounded-sm shadow-xl transform border ${
        isSelected ? "border-purple-400 bg-purple-200 scale-110" : ""
      } ${className}`}
    >
      <div
        className={`flex w-full flex-col h-28 h-xl:h-32 items-center justify-between py-4 px-2 shadow cursor-pointer`}
      >
        {pokemon && <PokemonPicture pokemon={pokemon} className="w-10 max-h-16 h-xl:w-14" />}
        {error && (
          <div className="flex flex-col items-center justify-center w-full h-8 gap-3 text-xs text-gray-500 rounded lg:h-14">
            <ErrorRounded className="text-red-600" fontSize="large" />
            Not Found
          </div>
        )}
        <span className="mt-2 text-xs text-gray-600 md:text-sm">
          {pokemon?.nameTranslated || stage.name}
        </span>
      </div>
    </Link>
  );
};

export default PokemonEvolutionCard;
