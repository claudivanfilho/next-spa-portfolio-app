import Head from "next/head";
import { BrowserRouter as Router } from "react-router-dom";
import { SWRConfig } from "swr";

import Index from "@/app";
import { SWR_OPTIONS } from "@/app/config/constants";

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
          <Index />
        </Router>
      </SWRConfig>
    </div>
  );
}
