import { Radar } from "react-chartjs-2";

import { Pokemon } from "@/app/models";
import { useIntl } from "react-intl";
import StatsLoader from "./loaders/StatsLoader";

const PokemonStats = ({ pokemon }: { pokemon?: Pokemon | null }) => {
  const { formatMessage } = useIntl();

  const renderRadar = (pokemon: Pokemon) => {
    const labels = pokemon.stats.map((stat) => stat.stat.name.replace("special", "sp"));
    const values = pokemon.stats.map((stat) => stat.base_stat);
    const data = {
      labels,
      datasets: [
        {
          backgroundColor: "rgba(128, 90, 213, 0.6)",
          borderColor: "rgb(128, 90, 213)",
          data: values,
        },
      ],
    };
    const options = { plugins: { legend: { display: false } } };

    return (
      <div className="mb-10 lg:mb-0" data-testid="pokemon-stats">
        <Radar className="h-28 h-xl:h-32" data={data} options={options} />
      </div>
    );
  };

  return (
    <>
      <h2 className="w-full text-lg font-bold text-gray-600 uppercase">
        {formatMessage({ id: "stats" })}
      </h2>
      {pokemon ? renderRadar(pokemon) : <StatsLoader />}
    </>
  );
};

export default PokemonStats;
