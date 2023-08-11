import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import Index from "@/app";

export const renderApp = ({
  route = "/",
}: {
  route?: string;
} = {}) => {
  window.history.pushState({}, "", route);

  const swrConfig = {
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    isVisible() {
      return true;
    },
    dedupingInterval: 0,
    refreshInterval: 0,
    focusThrottleInterval: 0,
    fetcher: (url: string) => fetch(url).then((res) => res.json()),
    provider: () => new Map(),
  };

  return render(
    <BrowserRouter>
      <SWRConfig value={swrConfig}>
        <Index />
      </SWRConfig>
    </BrowserRouter>
  );
};
