import {GetVariations} from "../services/get-variations";
import {ProductRepository} from "../repository/product-repository/product-repository";
import { ApolloClient } from 'apollo-client'


export const getVariationsFactory = (apolloClient: ApolloClient<object>) => {
  const productRepository = new ProductRepository(apolloClient)

  return new GetVariations(productRepository)
}
