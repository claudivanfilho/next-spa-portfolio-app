import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import App from "../../src/App";

export const renderApp = ({
  route = "/",
}: {
  route?: string;
} = {}) => {
  window.history.pushState({}, "", route);
  return render(
    <BrowserRouter>
      <SWRConfig
        value={{
          revalidateOnMount: true,
          revalidateOnReconnect: true,
          isVisible() {
            return true;
          },
          dedupingInterval: 0,
          refreshInterval: 0,
          focusThrottleInterval: 0,
          fetcher: (url: string) => fetch(url).then((res) => res.json()),
        }}
      >
        <App />
      </SWRConfig>
    </BrowserRouter>
  );
};
