import { useParams } from "react-router-dom";
import useSWR from "swr";

import { API_URL } from "../config/constants";
import { GenerationResponse } from "../models";
import { normalizeGeneration } from "../services/dto.service";
import useLocale from "./useLocale";

export default function useGenerationSWR() {
  const { generationId } = useParams();
  const { locale } = useLocale();
  const { data, error } = useSWR<GenerationResponse>(`${API_URL}/generation/${generationId}`);

  return { generation: data && normalizeGeneration(data, locale), error };
}
