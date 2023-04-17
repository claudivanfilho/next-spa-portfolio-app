import { PokemonWithoutIntl } from "../models/index";
import { DEFAULT_LANG } from "../config/constants";
import { GenerationResponse, Pokemon } from "../models";

export function normalizeGeneration(
  generation: GenerationResponse,
  locale: string
): GenerationResponse {
  const nameDefault = generation?.names.find((n) => n.language.name === DEFAULT_LANG)!.name;
  return {
    ...generation,
    nameTranslated: generation?.names.find((n) => n.language.name === locale)?.name || nameDefault,
  };
}

export function normalizePokemon(pokemon: PokemonWithoutIntl, locale: string): Pokemon {
  const defaultDescription = pokemon?.flavor_text_entries.find(
    (text) => text.language.name === DEFAULT_LANG
  )!.flavor_text;
  const descriptionTranslated =
    pokemon?.flavor_text_entries.find((text) => text.language.name === locale)?.flavor_text ||
    defaultDescription;
  const defaultName = pokemon?.names.find((n) => n.language.name === DEFAULT_LANG)!.name;
  const nameTranslated =
    pokemon?.names.find((n) => n.language.name === locale)?.name || defaultName;

  return {
    ...pokemon,
    descriptionTranslated,
    nameTranslated,
  };
}
