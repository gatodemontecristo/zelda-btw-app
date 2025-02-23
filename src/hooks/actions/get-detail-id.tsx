import { sleep } from '../../helpers';

export const getDetailById = async (id: number): Promise<any> => {
  await sleep(1500);
  const resp = await fetch(
    'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/' + id,
  ).then((resp) => resp.json());

  return resp.data;
};
