# como usar react-apollo em classes

```javascript
import React, {useEffect} from 'react'
import {GetColors} from "../../api/services/get-colors";
import { useApolloClient } from 'react-apollo'


export const BuyBox = () => {
  const apolloClient = useApolloClient()

  useEffect(() => {
    (async() => {
      const classColors = new GetColors(apolloClient)
      const testResult = await classColors.handle()
    })()
  }, [apolloClient])

  return (
    <div>
    xx
    </div>
  )
}

```

```javascript
import { ApolloClient } from '@apollo/client'
import GET_PRODUCTS from '../graphql/get-products.gql'

export class GetColors {
  constructor(private readonly apolloClient:  ApolloClient<object>) {
  }
  public async handle() {
    const fetch = await this.apolloClient.query({query:GET_PRODUCTS, variables: {referenceId: "BPC*"}})
    console.log(fetch)
  }
}

```

```gql
query getProduct($referenceId: String!) {
  products(from: 0, to: 49, query: $referenceId) @context(provider: "vtex.search-graphql") {
    productId
    link
    productName
    productReference
    items {
      itemId
      images {
        imageUrl
        imageText
      }
      variations {
        name
        values
      }
      sellers {
        commertialOffer {
          AvailableQuantity
        }
      }
    }
  }
}

```