import { Link, useParams } from "react-router-dom";

import { Resource } from "../../models/index";

const PokemonMiniCard = ({ pokemon, isSelected }: { pokemon: Resource; isSelected: boolean }) => {
  const { generationId } = useParams();

  return (
    <Link
      to={`/generation/${generationId}/pokemon/${pokemon.name}`}
      className={`grid place-content-center py-4 lg:w-32 xl:w-40 shadow-md font-bold text-xs uppercase transform hover:scale-105 ${
        isSelected
          ? "bg-purple-600 text-white"
          : "text-purple-600 hover:bg-purple-200 hover:text-purple-600"
      }`}
    >
      {pokemon.name}
    </Link>
  );
};

export default PokemonMiniCard;
