import { Pokemon } from "@/app/models";

export default function PokemonPicture({
  pokemon,
  className,
}: {
  pokemon: Pokemon;
  className: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={pokemon.name}
      className={`object-scale-down ${className}`}
      src={
        pokemon.sprites?.other.dream_world.front_default ||
        pokemon.sprites?.other["official-artwork"].front_default
      }
    />
  );
}
