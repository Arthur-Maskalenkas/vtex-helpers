const fetchApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
};

const fetchListApi = () => {
  const lengthLoop = Array(3).fill(null);

  const response1 = lengthLoop.map(() => fetchApi());
  const response2 = lengthLoop.map(() => fetchApi());

  return 1{
    response1,
    response2
  };
};

const fetchData = async () => {
  const fetchs = fetchListApi();
  const results = [];
  const resolvedResponse1 = await Promise.all(fetchs.response1)

  for await (let response of fetchs.response2) {
    // Aguardar a resolução de cada promise individualmente
    results.push(response);
  }

  // for await (let [key, value] of Object.entries(formAttachments)) {
  //   const response = await this.attachmentResolver.handle({
  //     key,
  //     value,
  //     itemIndex,
  //     orderFormId
  //   })

  //   console.log(response)
  // }

  fetchs.response1 = resolvedResponse1;
  fetchs.response2 = resolvedResponse2;

  console.log(fetchs);
};

fetchData();