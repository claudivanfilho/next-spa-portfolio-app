import { Radar } from "react-chartjs-2";

import { Pokemon } from "@/app/models";

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  const labels = pokemon.stats.map((stat) => stat.stat.name.replace("special", "sp")) || [];
  const values = pokemon.stats.map((stat) => stat.base_stat) || [];
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

  return (
    <div className="mb-10 lg:mb-0" data-testid="pokemon-stats">
      <Radar
        className="h-28 h-xl:h-32"
        data={data}
        options={{ plugins: { legend: { display: false } } }}
      />
    </div>
  );
};

export default PokemonStats;
