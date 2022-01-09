const parseData = (data, keys, i) => {
  if(i === keys.length - 1) {
     return data[keys[i]]
  }
  return parseData(data[keys[i]], keys, i + 1)
}

export const getDataFromProperty = (data, key) => {
  return data ? parseData(data, key.split('.'), 0) : [];
}

export const getStringFormatDataFromProperty = (data, key) => {
  const result = getDataFromProperty(data, key);
  return typeof result === 'string' ? result : result.join(', ');
}