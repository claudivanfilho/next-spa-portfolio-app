import { useParams } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import GenerationPage from "./GenerationPage/GenerationPage";
import GenerationsPage from "./GenerationsPage/GenerationsPage";
import Header from "./Header";
import { PokemonPage } from "./PokemonPage/PokemonPage";

export const App = () => {
  const { generationId, pokemonName } = useParams();

  return (
    <div className="h-screen pt-14">
      <Header />
      {generationId && <Breadcrumbs />}
      <main className="overflow-y-auto">
        <div className="grid-cols-12 px-5 m-auto max-w-screen-2xl lg:grid lg:mt-8 lg:divide-x-2 lg:divide-solid lg:gap-x-5 2xl:gap-x-10 2xl:px-0">
          <GenerationsPage />
          {generationId && <GenerationPage />}
          {pokemonName && <PokemonPage />}
        </div>
      </main>
      <Footer />
    </div>
  );
};
