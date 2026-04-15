

export const getAll = () => {
  return fetch('/goods.json').then(res => res.json());
};

export const get5First = async () => {
  const goods = await getAll();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async () => {
  const goods = await getAll();

  return goods.filter(g => g.color === 'red');
};
