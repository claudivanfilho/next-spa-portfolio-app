import { rest } from "msw";

import {
  EVOLUTION_CHAIN_API_URL,
  GENERATION_API_URL,
  POKEMON_API_URL,
  POKEMON_SPECIE_API_URL,
} from "../../src/config/constants";
import { EVOLUTON_CHAIN_RESPONSE_MOCK } from "../mockedResponses/EvolutionChainResponse";
import { GENERATION_REPONSE_MOCK } from "../mockedResponses/GenerationResponseMock";
import { GENERATIONS_RESPONSE_MOCK } from "../mockedResponses/GenerationsResponseMock";
import { getPokemonSpecieResponse } from "../mockedResponses/PokemonSpecieResponse";
import { getPokemonResponseMock } from "./../mockedResponses/PokemonResponseMock";

export const defaultHandlers = [
  rest.get(GENERATION_API_URL, (req, res, ctx) => {
    return res(ctx.json(GENERATIONS_RESPONSE_MOCK));
  }),
  rest.get(`${GENERATION_API_URL}/*`, (req, res, ctx) => {
    return res(ctx.json(GENERATION_REPONSE_MOCK));
  }),
  rest.get(`${POKEMON_API_URL}/:pokemonName`, ({ params: { pokemonName } }, res, ctx) => {
    return res(ctx.json(getPokemonResponseMock(pokemonName.toString())));
  }),
  rest.get(`${POKEMON_SPECIE_API_URL}/:pokemonId`, ({ params: { pokemonId } }, res, ctx) => {
    return res(ctx.json(getPokemonSpecieResponse(+pokemonId.toString() as 1 | 2 | 3)));
  }),
  rest.get(`${EVOLUTION_CHAIN_API_URL}/*`, (req, res, ctx) => {
    return res(ctx.json(EVOLUTON_CHAIN_RESPONSE_MOCK));
  }),
];
