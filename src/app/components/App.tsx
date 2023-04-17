import { Route, Routes } from "react-router-dom";

import GenerationPage from "./GenerationPage";
import GenerationsPage from "@/app/components/GenerationsPage";
import PokemonDetailsPage from "@/app/components/PokemonPage";
import { IntlProviderLocal } from "@/app/context/IntlContextLocal";
import { LocaleProvider } from "@/app/context/LocaleContext";
import BaseLayout from "@/app/components/layouts/BaseLayout";

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
