import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

import useGenerationSWR from "@/app/hooks/useGenerationSWR";
import usePokemonSWR from "@/app/hooks/usePokemonSWR";

const Breadcrumbs = () => {
  const { generation } = useGenerationSWR();
  const { pokemon } = usePokemonSWR();
  const { formatMessage } = useIntl();

  const renderLink = (path: string, label: string) => (
    <Link to={path} className="flex w-full text-purple-700 lg:w-40 hover:underline">
      {label}
    </Link>
  );

  return (
    <nav className="container block lg:hidden">
      <ol className="flex gap-2 py-4 pl-4 text-gray-700 list-reset bg-grey-light">
        <li>{renderLink("/", formatMessage({ id: "generations" }))}</li>
        <li>/</li>
        <li>
          {!!pokemon
            ? renderLink(`/generation/${generation!.id}`, generation!.nameTranslated!)
            : generation?.nameTranslated}
        </li>
        {pokemon && <li>/</li>}
        {pokemon && <li>{pokemon.nameTranslated}</li>}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
