# Termos
## slas
É aonde fica as informações de entrega e retirada, como por exemplo, o nome da transportadora, o prazo de entrega, o valor da entrega, etc.

## simulação
É aonde é feita a simulação de entrega e retirada, para saber se o produto está disponível para entrega ou retirada.

## regionalização
É aonde é feita a regionalização da loja, ou seja, é aonde é feita a configuração de qual loja física vai ser a loja padrão para entrega e retirada.

## pickup
É a retirada do produto em uma loja física.

## delivery
É a entrega do produto no endereço do cliente.

## produto coringa
Produto com esstoque infinito em todos os sellers, utilizado para listar todas as entregas e retiradas de um cep

```js
export const HandleView = async ({
  newCep,
  orderForm
}: THandleView) => {
  let data = null

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.vtex.ds.v10+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          {
            id: orderForm.items.length > 0 ?
              orderForm.items[0].id :
              '697',
            quantity: 1,
            seller: '1'
          }
        ],
        postalCode: newCep,
        country: 'BRA',
      })
    };

  try {
    await fetch('/api/checkout/pub/orderForms/simulation?RnbBehavior=0', options)
      .then(response => response.json())
      .then(dataResponse => {


        data = dataResponse?.logisticsInfo.reduce((slas: string[], info: any) => [
          ...slas,
          ...info.slas
        ], [])
      })
  } catch (err) {
    return data
  }

  return data
}

```

# API usada para regionalização
```js
export type TRegionalizeStore = {
  newCep: any
}

export const RegionalizeStore = async ({ newCep }: TRegionalizeStore) => {

  const options = {};

  await fetch('/api/sessions', options)
    .then(response => {
      response.json()
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    })
    .catch()
}
```



# API usada para simular

## pickpoint
```js
export const GetPickupSimulation = async ({ itemId, selectedCep, hasSlaSelected }: TGetPickupSimulation) => {
  const options = {};

  const dataFetch = await fetch('/api/checkout/pub/orderForms/simulation?RnbBehavior=0', options)
  const dataJson = await dataFetch.json()

  const pickupList = dataJson?.logisticsInfo?.reduce((slas: string[], info: any) => [...slas, ...info.slas],
    [])
  const dataResponse = pickupList?.filter((sla: any) => sla?.id === JSON.parse(hasSlaSelected)?.id)

  const withStock = dataResponse?.length > 0

  return withStock
}
```

## delivery

```js
export const GetDeliverySimulation = async ({ itemId, selectedCep }: TGetDeliverySimulation) => {
  // cercar com try catch
  const options = {};

  const dataFetch = await fetch('/api/checkout/pub/orderForms/simulation?RnbBehavior=0', options)
  const dataJson = await dataFetch.json()
  const dataResponse = dataJson?.items?.every((item: any) => item?.availability !== 'cannotBeDelivered')

  return dataResponse
}

```