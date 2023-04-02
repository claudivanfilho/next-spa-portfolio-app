import { Route, Routes } from "react-router-dom";

import GenerationSection from "./components/GenerationSection";
import PokemonDetailsSection from "./components/PokemonDetailsSection";
import { IntlProviderLocal } from "./context/IntlContextLocal";
import { LocaleProvider } from "./context/LocaleContext";
import BaseLayout from "./layouts/BaseLayout";

export default function App() {
  return (
    <LocaleProvider>
      <IntlProviderLocal>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="generation/:generationId" element={<GenerationSection />}>
              <Route path="pokemon/:pokemonName" element={<PokemonDetailsSection />} />
            </Route>
          </Route>
        </Routes>
      </IntlProviderLocal>
    </LocaleProvider>
  );
}
