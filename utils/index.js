/**
 * convert arr of numbers to string
 * @param {number[]} arr
 * @returns string[]
 */
export const arrNumStr = arr => arr.map(i => i.toString());

/**
 * format rooms data
 * @param {
 * roomData: {
 * price: number,
 * type: string,
 * capacity: number,
 * pets: boolean,
 * extras: string[]
 * images: [{name: string}],
 * }} items
 * @returns {...roomData, images: string[]}
 */
export const formatData = items => {
  let tempItems = items.map(item => {
    let images = item.images.map(i => i.name);
    let room = {...item, images};
    return room;
  });
  return tempItems;
};
