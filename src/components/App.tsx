import { Route, Routes } from "react-router-dom";

import GenerationPage from "./GenerationPage";
import GenerationsPage from "@/src/components/GenerationsPage";
import PokemonDetailsPage from "@/src/components/PokemonPage";
import { IntlProviderLocal } from "@/src/context/IntlContextLocal";
import { LocaleProvider } from "@/src/context/LocaleContext";
import BaseLayout from "@/src/components/layouts/BaseLayout";

export default function App() {
  return (
    <LocaleProvider>
      <IntlProviderLocal>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<GenerationsPage />}>
              <Route path="generation/:generationId" element={<GenerationPage />}>
                <Route path="pokemon/:pokemonName" element={<PokemonDetailsPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </IntlProviderLocal>
    </LocaleProvider>
  );
}
