import { Outlet, useParams } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BaseLayout = () => {
  const { generationId } = useParams();

  return (
    <div className="h-screen pt-14">
      <Header />
      {generationId && <Breadcrumbs />}
      <main className="overflow-y-auto" style={{ height: "calc(100vh - 135px)" }}>
        <div className="grid-cols-12 px-5 m-auto max-w-screen-2xl lg:grid lg:mt-8 lg:divide-x-2 lg:divide-solid lg:gap-x-5 2xl:gap-x-10 2xl:px-0">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
