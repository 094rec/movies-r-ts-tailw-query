import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { request } from '../utils/common';

type FetchResult<T> = {
  results: T[];
};

export const useFetch = <T>(name: string, url: string) => {
  const { data, isLoading, error }: UseQueryResult<FetchResult<T>> = useQuery({
    queryKey: [name],
    queryFn: () => request<FetchResult<T>>(url),
  });

  return { data: data?.results || [], isLoading, error };
};
