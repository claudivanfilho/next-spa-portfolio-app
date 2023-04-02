import useSWR from "swr";

import { API_URL } from "../config/constants";
import { fetchGenerations } from "../services/api.service";
import { normalizeGeneration } from "../services/dto.service";
import useLocale from "./useLocale";

export default function useGenerationsSWR() {
  const { locale } = useLocale();
  const { data, error } = useSWR(`${API_URL}/generation`, () => fetchGenerations());

  return {
    generations: data && data.map((g) => normalizeGeneration(g, locale)),
    error,
  };
}
