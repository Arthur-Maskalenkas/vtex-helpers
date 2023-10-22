vtex.store-graphql

{
  product(identifier: {field: id, value: 31}) {
    items {
      kitItems {
        sku {
          itemId
          name
          sellers {
            commertialOffer {
              AvailableQuantity
            }
          }
          images {
            imageUrl
            imageText
            imageLabel
          }
          productName
          attachments {
            name
          }
        }
      }
    }
  }
}
