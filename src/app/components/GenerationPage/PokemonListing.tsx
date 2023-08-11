import { useState } from "react";
import { useParams } from "react-router-dom";

import { Resource } from "@/app/models/index";

import ListingSearch from "./ListingSearch";
import PokemonMiniCard from "./PokemonListingItem";

const PokemonListing = ({ pokemons }: { pokemons: Resource[] }) => {
  const { pokemonName } = useParams();
  const [searchText, setSearchText] = useState("");
  const filteredPokemons = pokemons.filter((p) => p.name.includes(searchText));

  return (
    <div className="flex flex-col" data-testid="pokemon-listing">
      <div className="flex items-center justify-between w-full pr-2 mt-2 mb-3">
        <ListingSearch setSearchText={setSearchText} />
      </div>
      <div className="flex flex-col gap-4 pb-4 overflow-y-auto lg:grid lg:grid-cols-3 auto-rows-min pokemon-listing">
        {filteredPokemons.map((pokemon) => (
          <PokemonMiniCard
            key={pokemon.name}
            pokemon={pokemon}
            isSelected={pokemon.name === pokemonName}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonListing;
