import { useQuery } from '@tanstack/react-query';
import { getCompendiumBOTW } from './actions';

export const useResources = (type: string) => {
  const compendiumQuery = useQuery({
    queryKey: ['compendiumBOTW', type],
    queryFn: () => getCompendiumBOTW(type),
    staleTime: 1000 * 600,
  });

  return {
    compendiumQuery,
  };
};
