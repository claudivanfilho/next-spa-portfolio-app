import { useParams } from "react-router-dom";
import useSWR from "swr";

import { fetchPokemon } from "../services/api.service";
import { normalizePokemon } from "../services/dto.service";
import useLocale from "./useLocale";

/**
 * @param pName if pName is not provided it will assume the name of the pokemon
 * is the same from the url params
 */
export default function usePokemonSWR(pName?: string) {
  const { pokemonName } = useParams();
  const { locale } = useLocale();
  const name = pName || pokemonName;
  const { data, error } = useSWR(name ? `/pokemon/${name}` : null, () => fetchPokemon(name!));

  return {
    pokemon: data && normalizePokemon(data, locale),
    error,
  };
}
