import { sleep } from '../../helpers';

export const getCompendiumBOTW = async (type: string): Promise<any> => {
  await sleep(1500);
  // forceError();
  const resp = await fetch(
    'https://botw-compendium.herokuapp.com/api/v3/compendium/category/' + type,
  ).then((resp) => resp.json());

  return resp.data;
};
