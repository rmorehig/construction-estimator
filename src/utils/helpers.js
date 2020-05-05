export const getInitials = (name = '') =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');

export const generateColor = () =>
  '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

export function isEmpty(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) return false;
  }
  return true;
}

const parseFilters = (filters = {}) => {
  let whereArray = [];
  let queryFilters = {};
  let properties = Object.getOwnPropertyNames(filters);
  properties.forEach((property) => {
    queryFilters = {
      ...queryFilters,
      [property]: filters[property] ? '%' + filters[property] + '%' : undefined
    };
  });
  properties.forEach((property) => {
    whereArray = [
      ...whereArray,
      {
        [property]: filters[property]
          ? '%' + filters[property] + '%'
          : undefined
      }
    ];
  });
  return queryFilters;
};
