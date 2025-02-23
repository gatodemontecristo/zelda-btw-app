import { useQuery } from '@tanstack/react-query';
import { getDetailById } from './actions';

export const useDetail = (id: number) => {
  const detailQuery = useQuery({
    queryKey: ['detailBOTW', id],
    queryFn: () => getDetailById(id),
    staleTime: 1000 * 600,
  });

  return {
    detailQuery,
  };
};
