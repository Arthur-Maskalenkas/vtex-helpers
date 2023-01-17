function getPropsAndContent(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      for (let k in obj[key]) {
        if (k === "props" || k === "content") {
          result[k] = obj[key][k];
        }
      }
      let nestedResult = getPropsAndContent(obj[key]);
      if (Object.keys(nestedResult).length) {
        result[key] = nestedResult;
      }
    }
  }
  // Verifica se o objeto de resultado possui algum valor dentro de "props" ou "content"
  if (!("props" in result) && !("content" in result)) {
    return {}
  }
  return result;
}
function fun(obj) {
  let result = {};
  for (let key in obj) {
    if (key === "props" || key === "content") {
      result[key] = obj[key];
    } else if (typeof obj[key] === "object") {
      let nestedResult = getPropsAndContent(obj[key]);
      if (Object.keys(nestedResult).length) {
        result[key] = nestedResult;
      }
    }
  }
  // Verifica se o objeto de resultado possui algum valor dentro de "props" ou "content"
  if (!("props" in result) && !("content" in result)) {
    return {}
  }
  return result;
}
