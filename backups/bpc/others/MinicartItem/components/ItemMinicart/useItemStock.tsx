import { useQuery } from 'react-apollo';
import GETMINICARTID from '../graphql/GETMINICARTID.gql';
import { IGetProductId, IGetProductData } from '../../typings';

export function useItemStock(productID: string, itemId: string, sellerId: string) {
  const { data } = useQuery<IGetProductData, IGetProductId>(GETMINICARTID, {
    variables: {
      productID: productID,
    },
  });
  if (!data) return null;

  const items = data?.product?.items;
  if (!items) return null;

  const selectedItem =
    items?.find((element: { itemId: string }) => {
      return element?.itemId === itemId;
    }) ?? null;

  const { sellers } = selectedItem;

  const selectedSeller = sellers?.find((element: { sellerId: string }) => {
    return element?.sellerId == sellerId;
  });
  const quantity = selectedSeller?.commertialOffer?.AvailableQuantity;

  return quantity;
}
