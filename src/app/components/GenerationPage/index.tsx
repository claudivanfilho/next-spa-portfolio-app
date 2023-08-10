import { Outlet, useParams } from "react-router-dom";

import useGenerationSWR from "@/app/hooks/useGenerationSWR";
import GenerationDetails from "./GenerationDetails";
import PokemonListing from "./PokemonListing";
import GenerationError from "./GenerationError";

const GenerationPage = () => {
  const { generation, error } = useGenerationSWR();
  const { pokemonName } = useParams();

  if (error) return <GenerationError />;

  if (!generation) return null;

  return (
    <>
      <div className={`col-span-6 lg:pl-5 2xl:pl-10 ${pokemonName ? "hidden lg:block" : ""}`}>
        <GenerationDetails generation={generation!} />
        <div className="mt-3">
          <PokemonListing pokemons={generation!.pokemon_species} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default GenerationPage;
