export const getUniqueTypes = (items, value) => {
  const ut = [...new Set(items.map(i => i[value]))];
  return ut;
};
