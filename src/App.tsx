import { Route, Routes } from "react-router-dom";

import GenerationPage from "./components/GenerationPage";
import GenerationsPage from "./components/GenerationsPage";
import PokemonDetailsPage from "./components/PokemonPage";
import { IntlProviderLocal } from "./context/IntlContextLocal";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";

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
