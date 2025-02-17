import { useQuery } from '@tanstack/react-query';

const getCompendiumBOTW = async (type: string): Promise<any> => {
  const resp = await fetch(
    'https://botw-compendium.herokuapp.com/api/v3/compendium/category/' + type,
  ).then((resp) => resp.json());

  return resp.data;
};

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
