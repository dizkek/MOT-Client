export const byIdObjCreator = (entity) => {
  return entity.reduce((acc, current) => {
    acc[current._id] = current;
    return acc;
  }, {});;
};
