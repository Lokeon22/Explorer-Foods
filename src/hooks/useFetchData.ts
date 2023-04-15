import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

interface useFetchDataProps {
  url: string;
  parameter?: string | number;
  key: string;
  keyRefresh?: string;
}

export function useFetchData<T>({
  url,
  parameter = "",
  key,
  keyRefresh,
}: useFetchDataProps) {
  async function getData(): Promise<T> {
    const res = await api.get<T>(`/${url}/${parameter}`);
    return res.data;
  }

  const { data, isLoading, isError } = useQuery([key, keyRefresh], getData);

  return { data, isLoading, isError };
}
