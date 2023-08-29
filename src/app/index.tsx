import * as Sentry from "@sentry/react";
import React from "react";
import {
  createRoutesFromChildren,
  matchRoutes,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";

import { IntlProviderLocal } from "@/app/context/IntlContextLocal";
import { LocaleProvider } from "@/app/context/LocaleContext";

import { App } from "./components/App";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_CDN,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

export default function Index() {
  return (
    <LocaleProvider>
      <IntlProviderLocal>
        <SentryRoutes>
          <Route path="/" element={<App />}>
            <Route path="generation/:generationId" element={<App />}>
              <Route path="pokemon/:pokemonName" element={<App />} />
            </Route>
          </Route>
        </SentryRoutes>
      </IntlProviderLocal>
    </LocaleProvider>
  );
}
