import Head from "next/head";

import { SWRConfig } from "swr";
import { SWR_OPTIONS } from "@/app/config/constants";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@/app/components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next SPA Portfolio App</title>
        <metadata>Portfolio App using Next.js + Typescript + Tailwind + Jest</metadata>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SWRConfig value={SWR_OPTIONS}>
        <Router>
          <App />
        </Router>
      </SWRConfig>
    </div>
  );
}
