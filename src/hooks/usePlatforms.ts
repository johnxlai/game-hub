import { useQuery } from '@tanstack/react-query';
import useData, { FetchResponse } from './useData';
import apiClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// useQuery<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    // initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
