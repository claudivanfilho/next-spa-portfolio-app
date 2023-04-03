/**
 * In this file are defined all the types used in the application.
 */

export type GenerationsResponse = {
  results: Resource[];
};

export type GenerationResponse = {
  id: number;
  name: string;
  names: Array<{ language: Resource; name: string }>;
  main_region: Resource;
  pokemon_species: Resource[];
} & {
  nameTranslated?: string;
};

type SpriteObject = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: {
    dream_world: {
      front_default: string;
      front_female: null;
    };
    "official-artwork": {
      front_default: string;
    };
  };
  versions: {
    [generation: string]: any;
  };
};

export type PokemonResponse = {
  id: number;
  name: string;
  order: number;
  species: Resource;
  sprites: SpriteObject;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: Resource;
  }>;
  abilities: Array<{
    ability: Resource;
    os_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  forms: Resource[];
  height: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
};

export type PokemonSpecieResponse = {
  base_happiness: number;
  capture_rate: number;
  color: Resource;
  egg_groups: Resource[];
  evolution_chain: { url: string };
  evolves_from_species: null;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: Resource;
    version: Resource;
  }>;
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Array<{ genus: string; language: Resource[] }>;
  has_gender_differences: false;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Array<{ language: Resource; name: string }>;
};

export type EvolutionChainResponse = {
  chain: {
    evolution_details: [];
    evolves_to: Array<{
      evolution_details: [];
      evolves_to: Array<{
        evolution_details: [];
        is_baby: boolean;
        species: Resource;
      }>;
      is_baby: boolean;
      species: Resource;
    }>;
    is_baby: boolean;
    species: Resource;
  };
  id: number;
};

export type PokemonWithoutIntl = Omit<Pokemon, "descriptionTranslated" | "nameTranslated">;

export type Pokemon = PokemonResponse &
  PokemonSpecieResponse & {
    descriptionTranslated: string;
    nameTranslated: string;
  };

export type Resource = {
  name: string;
  url: string;
};
