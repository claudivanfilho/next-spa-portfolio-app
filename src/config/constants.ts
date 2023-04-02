export const API_URL = "https://pokeapi.co/api/v2";

export const GENERATION_API_URL = `${API_URL}/generation`;
export const POKEMON_API_URL = `${API_URL}/pokemon`;
export const POKEMON_SPECIE_API_URL = `${API_URL}/pokemon-species`;
export const EVOLUTION_CHAIN_API_URL = `${API_URL}/evolution-chain`;

export const SWR_OPTIONS = {
  dedupingInterval: 6000000,
  refreshInterval: 6000000,
  focusThrottleInterval: 6000000,
  fetcher: (url: string) => fetch(url).then((res) => res.json()),
};

export const LANGS = ["en", "es", "pt", "ko", "ja", "fr", "de"];

export const DEFAULT_LANG = "en";
