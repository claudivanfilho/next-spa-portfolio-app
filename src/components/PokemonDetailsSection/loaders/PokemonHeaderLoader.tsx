import Loading from "../../Loading";
import PokemonAnimatedBG from "../PokemonAnimatedBG";

export default function PokemonHeaderLoader() {
  return (
    <div
      className={`w-full relative flex justify-center items-center border-2 border-gray-400 h-28 h-xl:h-44 rounded shadow`}
      data-testid="pokemon-loader"
    >
      <PokemonAnimatedBG className="w-full h-full" />
      <div className="absolute top-0 flex items-center justify-center w-full h-full">
        <Loading size={100} />
      </div>
    </div>
  );
}
