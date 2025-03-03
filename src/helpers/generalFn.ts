export const sleep = (milliseconds: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, milliseconds);
  });
};

export const forceError = () => {
  throw new Error('Simulated error');
};
