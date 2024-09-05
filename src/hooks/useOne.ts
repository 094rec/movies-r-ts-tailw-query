import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { request } from '../utils/common';

type FetchResult<T> = T;

export const useOne = <T>(name: string, url: string, id: number) => {
  const { data, isLoading, error }: UseQueryResult<FetchResult<T>> = useQuery({
    queryKey: [name, id],
    queryFn: () => request<FetchResult<T>>(url),
    enabled: Boolean(id),
  });

  return { data, isLoading, error };
};
