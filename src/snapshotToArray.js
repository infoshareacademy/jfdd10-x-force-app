export default snapshot =>
  Object.entries(snapshot || {}).map(([id, value]) => ({
    id,
    ...value
  }));
