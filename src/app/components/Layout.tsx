import { Route, Routes } from "react-router-dom";

import { IntlProviderLocal } from "@/app/context/IntlContextLocal";
import { LocaleProvider } from "@/app/context/LocaleContext";

import { App } from "./App";

export default function Layout() {
  return (
    <LocaleProvider>
      <IntlProviderLocal>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="generation/:generationId" element={<App />}>
              <Route path="pokemon/:pokemonName" element={<App />} />
            </Route>
          </Route>
        </Routes>
      </IntlProviderLocal>
    </LocaleProvider>
  );
}
