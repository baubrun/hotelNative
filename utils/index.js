export const getUniqueTypes = (items, value) => {
  const ut = [...new Set(items.map(i => i[value]))];
  return ut;
};

export const formatData = items => {
  let tempItems = items.map(item => {
    let images = item.images.map(i => i.name);
    let room = {...item, images};
    return room;
  });
  return tempItems;
};
