import useSWR from 'swr';

import { EvolutionChainResponse, Pokemon } from '../models';

export default function usePokemonEvolutionsSWR(pokemon?: Pokemon | null) {
  const { data, error } = useSWR<EvolutionChainResponse>(pokemon?.evolution_chain.url || null);

  return {
    evolutions:
      data &&
      [
        data.chain.species,
        data.chain.evolves_to?.[0]?.species,
        data.chain.evolves_to?.[0]?.evolves_to?.[0]?.species,
      ].filter((e) => e),
    error,
  };
}
