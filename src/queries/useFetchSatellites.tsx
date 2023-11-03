import { Satellites } from "../models/satellitesResponse.model";
import api from "../services/api";
import { useQuery } from "@tanstack/react-query";

async function getSatellites(): Promise<Satellites[]> {
  const { data } = await api.get<Satellites[]>("/launches/");
  return data;
}
export function useFetchSatellites() {
  return useQuery<Satellites[]>({
    queryKey: ["satellites"],
    queryFn: () => getSatellites(),
  });
}
