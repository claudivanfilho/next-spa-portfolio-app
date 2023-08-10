import { NavLink, useParams } from "react-router-dom";

export default function GenerationListingItem({ id, name }: { id: number; name: string }) {
  const params = useParams();
  const isSelected = id === +params.generationId!;

  return (
    <NavLink
      key={`item-${id}`}
      to={`/generation/${id}`}
      className={`p-8 lg:py-6 mb-3 shadow-md rounded-sm text-center font-bold uppercase text-xs transform hover:scale-105 ${
        isSelected ? "bg-purple-600 text-white" : "hover:bg-purple-200 hover:text-purple-600"
      }`}
    >
      {name}
    </NavLink>
  );
}
