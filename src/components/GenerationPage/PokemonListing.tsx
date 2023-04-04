import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

import { Resource } from "@/src/models/index";
import PokemonMiniCard from "./PokemonListingItem";

const PokemonListing = ({ pokemons }: { pokemons: Resource[] }) => {
  const { pokemonName } = useParams();
  const { formatMessage } = useIntl();
  const [searchText, setSearchText] = useState("");
  const filteredPokemons = pokemons.filter((p) => p.name.includes(searchText));

  return (
    <div className="flex flex-col" data-testid="pokemon-listing">
      <div className="flex items-center justify-between w-full pr-2 mt-2 mb-3">
        <TextField
          onChange={(event) => setSearchText(event.target.value)}
          id="search-input"
          label={formatMessage({ id: "search-placeholder" })}
          className="w-full"
        />
        <Search className="mt-4 mr-2" />
      </div>
      <div
        style={{ height: "calc(100vh - 350px)" }}
        className="flex flex-col gap-4 pb-4 overflow-y-auto lg:grid lg:grid-cols-3 auto-rows-min"
      >
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
