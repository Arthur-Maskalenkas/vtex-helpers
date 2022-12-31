import React from 'react'
import { answerList, urlApi } from '../RelatedShelf/utils';
import { ExtensionPoint } from 'vtex.render-runtime';
import ProductSummary from 'vtex.product-summary/ProductSummaryCustom'
//import type { ProductSummaryTypes } from 'vtex.product-summary-context'

export const TesteResult = () => {
  const [dataResponse, setDataResponse] = React.useState<any>([])

  React.useEffect(() => {
    // dai só falta filtrar pela categoria e montar a shelf

    fetch(urlApi(answerList))
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response)
        setDataResponse(response)
      })
      .catch((err) => console.error(err));
  }, [])

  const mock: any = [
    {
      "cacheId": "scarpin-gabriela-recorte-tela-nude-114-367",
      "productId": "114",
      "productName": "Scarpin Gabriela Recorte Tela Nude",
      "productReference": "1000004714193",
      "description": "Scarpin Gabriela Recorte Tela Nude",
      "link": "https://portal.vtexcommercestable.com.br/scarpin-gabriela-recorte-tela-nude-114/p",
      "linkText": "scarpin-gabriela-recorte-tela-nude-114",
      "brand": "Adaptil",
      "brandId": 2000015,
      "categories": [
        "/Acessories/"
      ],
      "priceRange": {
        "sellingPrice": {
          "highPrice": 56,
          "lowPrice": 56,
          "__typename": "PriceRange"
        },
        "listPrice": {
          "highPrice": 80,
          "lowPrice": 80,
          "__typename": "PriceRange"
        },
        "__typename": "ProductPriceRange"
      },
      "specificationGroups": [],
      "skuSpecifications": null,
      "items": [
        {
          "name": "Scarpin Gabriela Recorte Tela Nude - 32",
          "itemId": "367",
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "referenceId": [
            {
              "Value": "000000005059086032",
              "__typename": "Reference"
            }
          ],
          "images": [
            {
              "imageId": "155784",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155784-#width#-#height#/image-f2db9e35760d46b4a9250a0f164e39b7.jpg?v=638073121158570000\" width=\"#width#\" height=\"#height#\" alt=\"image-f2db9e35760d46b4a9250a0f164e39b7\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155784/image-f2db9e35760d46b4a9250a0f164e39b7.jpg?v=638073121158570000",
              "imageText": "image-f2db9e35760d46b4a9250a0f164e39b7",
              "__typename": "Image"
            },
            {
              "imageId": "155785",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155785-#width#-#height#/image-3ef743bf310940f3bc5288bf4c0f07e6.jpg?v=638073121158870000\" width=\"#width#\" height=\"#height#\" alt=\"image-3ef743bf310940f3bc5288bf4c0f07e6\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155785/image-3ef743bf310940f3bc5288bf4c0f07e6.jpg?v=638073121158870000",
              "imageText": "image-3ef743bf310940f3bc5288bf4c0f07e6",
              "__typename": "Image"
            },
            {
              "imageId": "155786",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155786-#width#-#height#/image-a502bf9db67e42f3926eb46b1dfa12ec.jpg?v=638073121161070000\" width=\"#width#\" height=\"#height#\" alt=\"image-a502bf9db67e42f3926eb46b1dfa12ec\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155786/image-a502bf9db67e42f3926eb46b1dfa12ec.jpg?v=638073121161070000",
              "imageText": "image-a502bf9db67e42f3926eb46b1dfa12ec",
              "__typename": "Image"
            },
            {
              "imageId": "155783",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155783-#width#-#height#/image-1059e425b1f54350828fae30667f0dc0.jpg?v=638073121158570000\" width=\"#width#\" height=\"#height#\" alt=\"image-1059e425b1f54350828fae30667f0dc0\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155783/image-1059e425b1f54350828fae30667f0dc0.jpg?v=638073121158570000",
              "imageText": "image-1059e425b1f54350828fae30667f0dc0",
              "__typename": "Image"
            }
          ],
          "variations": [],
          "sellers": [
            {
              "sellerId": "penseavantitestes",
              "sellerName": "Penseavanti2",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=367&qty=1&seller=penseavantitestes&sc=1&price=5600&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": true,
              "commertialOffer": {
                "Installments": [
                  {
                    "Value": 9.33,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 56,
                    "NumberOfInstallments": 6,
                    "Name": "Visa 6 vezes sem juros",
                    "__typename": "Installment"
                  }
                ],
                "AvailableQuantity": 15,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 80,
                "Price": 56,
                "PriceValidUntil": "2023-12-31T09:05:56Z",
                "PriceWithoutDiscount": 80,
                "RewardValue": 0,
                "spotPrice": 56,
                "Tax": 0,
                "taxPercentage": 0,
                "teasers": [],
                "discountHighlights": [
                  {
                    "name": "30% cartão",
                    "__typename": "Discount"
                  }
                ],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            },
            {
              "sellerId": "1",
              "sellerName": "avantiimplantacao",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=367&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": false,
              "commertialOffer": {
                "Installments": [],
                "AvailableQuantity": 0,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 0,
                "Price": 0,
                "PriceValidUntil": null,
                "PriceWithoutDiscount": 0,
                "RewardValue": 0,
                "spotPrice": 0,
                "Tax": 0,
                "taxPercentage": null,
                "teasers": [],
                "discountHighlights": [],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            }
          ],
          "__typename": "SKU"
        },
        {
          "name": "Scarpin Gabriela Recorte Tela Nude - 34",
          "itemId": "368",
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "referenceId": [
            {
              "Value": "000000005059086034",
              "__typename": "Reference"
            }
          ],
          "images": [
            {
              "imageId": "155790",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155790-#width#-#height#/image-ab7b7e1bb14b4faeaca592d6ee6dc50b.jpg?v=638073123667000000\" width=\"#width#\" height=\"#height#\" alt=\"image-ab7b7e1bb14b4faeaca592d6ee6dc50b\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155790/image-ab7b7e1bb14b4faeaca592d6ee6dc50b.jpg?v=638073123667000000",
              "imageText": "image-ab7b7e1bb14b4faeaca592d6ee6dc50b",
              "__typename": "Image"
            },
            {
              "imageId": "155789",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155789-#width#-#height#/image-9fe6ce039c60497ba9f80b15d09d1606.jpg?v=638073123666700000\" width=\"#width#\" height=\"#height#\" alt=\"image-9fe6ce039c60497ba9f80b15d09d1606\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155789/image-9fe6ce039c60497ba9f80b15d09d1606.jpg?v=638073123666700000",
              "imageText": "image-9fe6ce039c60497ba9f80b15d09d1606",
              "__typename": "Image"
            },
            {
              "imageId": "155788",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155788-#width#-#height#/image-e8beeb4b40bd41c8b556be3e6f263c36.jpg?v=638073123665930000\" width=\"#width#\" height=\"#height#\" alt=\"image-e8beeb4b40bd41c8b556be3e6f263c36\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155788/image-e8beeb4b40bd41c8b556be3e6f263c36.jpg?v=638073123665930000",
              "imageText": "image-e8beeb4b40bd41c8b556be3e6f263c36",
              "__typename": "Image"
            },
            {
              "imageId": "155787",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155787-#width#-#height#/image-f9a9383ffa9c4254b9a5b42b871a2c68.jpg?v=638073123664670000\" width=\"#width#\" height=\"#height#\" alt=\"image-f9a9383ffa9c4254b9a5b42b871a2c68\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155787/image-f9a9383ffa9c4254b9a5b42b871a2c68.jpg?v=638073123664670000",
              "imageText": "image-f9a9383ffa9c4254b9a5b42b871a2c68",
              "__typename": "Image"
            }
          ],
          "variations": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "avantiimplantacao",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=368&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": true,
              "commertialOffer": {
                "Installments": [],
                "AvailableQuantity": 0,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 0,
                "Price": 0,
                "PriceValidUntil": null,
                "PriceWithoutDiscount": 0,
                "RewardValue": 0,
                "spotPrice": 0,
                "Tax": 0,
                "taxPercentage": null,
                "teasers": [],
                "discountHighlights": [],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            }
          ],
          "__typename": "SKU"
        },
        {
          "name": "Scarpin Gabriela Recorte Tela Nude - 41",
          "itemId": "369",
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "referenceId": [
            {
              "Value": "000000005059086041",
              "__typename": "Reference"
            }
          ],
          "images": [
            {
              "imageId": "155795",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155795-#width#-#height#/image-c4374997a792488e9d6f13748f2920b6.jpg?v=638073124007530000\" width=\"#width#\" height=\"#height#\" alt=\"image-c4374997a792488e9d6f13748f2920b6\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155795/image-c4374997a792488e9d6f13748f2920b6.jpg?v=638073124007530000",
              "imageText": "image-c4374997a792488e9d6f13748f2920b6",
              "__typename": "Image"
            },
            {
              "imageId": "155798",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155798-#width#-#height#/image-1ca9f625fd2b4a01a9968967a9ba2920.jpg?v=638073124008170000\" width=\"#width#\" height=\"#height#\" alt=\"image-1ca9f625fd2b4a01a9968967a9ba2920\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155798/image-1ca9f625fd2b4a01a9968967a9ba2920.jpg?v=638073124008170000",
              "imageText": "image-1ca9f625fd2b4a01a9968967a9ba2920",
              "__typename": "Image"
            },
            {
              "imageId": "155793",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155793-#width#-#height#/image-e5e880d4e62c4ac19cca0294a93ca107.jpg?v=638073124007230000\" width=\"#width#\" height=\"#height#\" alt=\"image-e5e880d4e62c4ac19cca0294a93ca107\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155793/image-e5e880d4e62c4ac19cca0294a93ca107.jpg?v=638073124007230000",
              "imageText": "image-e5e880d4e62c4ac19cca0294a93ca107",
              "__typename": "Image"
            },
            {
              "imageId": "155797",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155797-#width#-#height#/image-3235ec8a3f4a44d6a48d631d07e2c022.jpg?v=638073124008170000\" width=\"#width#\" height=\"#height#\" alt=\"image-3235ec8a3f4a44d6a48d631d07e2c022\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155797/image-3235ec8a3f4a44d6a48d631d07e2c022.jpg?v=638073124008170000",
              "imageText": "image-3235ec8a3f4a44d6a48d631d07e2c022",
              "__typename": "Image"
            }
          ],
          "variations": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "avantiimplantacao",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=369&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": true,
              "commertialOffer": {
                "Installments": [],
                "AvailableQuantity": 0,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 0,
                "Price": 0,
                "PriceValidUntil": null,
                "PriceWithoutDiscount": 0,
                "RewardValue": 0,
                "spotPrice": 0,
                "Tax": 0,
                "taxPercentage": null,
                "teasers": [],
                "discountHighlights": [],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            }
          ],
          "__typename": "SKU"
        },
        {
          "name": "Scarpin Gabriela Recorte Tela Nude - 38",
          "itemId": "370",
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "referenceId": [
            {
              "Value": "000000005059086038",
              "__typename": "Reference"
            }
          ],
          "images": [
            {
              "imageId": "155794",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155794-#width#-#height#/image-67aa25c7e5ce48ca92edd1ea0ed8880f.jpg?v=638073124007230000\" width=\"#width#\" height=\"#height#\" alt=\"image-67aa25c7e5ce48ca92edd1ea0ed8880f\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155794/image-67aa25c7e5ce48ca92edd1ea0ed8880f.jpg?v=638073124007230000",
              "imageText": "image-67aa25c7e5ce48ca92edd1ea0ed8880f",
              "__typename": "Image"
            },
            {
              "imageId": "155800",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155800-#width#-#height#/image-4b07a1b687fd43508f6fd1cc7f29e739.jpg?v=638073124008630000\" width=\"#width#\" height=\"#height#\" alt=\"image-4b07a1b687fd43508f6fd1cc7f29e739\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155800/image-4b07a1b687fd43508f6fd1cc7f29e739.jpg?v=638073124008630000",
              "imageText": "image-4b07a1b687fd43508f6fd1cc7f29e739",
              "__typename": "Image"
            },
            {
              "imageId": "155802",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155802-#width#-#height#/image-466c2951e0fc4ce4b393240fbc6eafc5.jpg?v=638073124010200000\" width=\"#width#\" height=\"#height#\" alt=\"image-466c2951e0fc4ce4b393240fbc6eafc5\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155802/image-466c2951e0fc4ce4b393240fbc6eafc5.jpg?v=638073124010200000",
              "imageText": "image-466c2951e0fc4ce4b393240fbc6eafc5",
              "__typename": "Image"
            },
            {
              "imageId": "155801",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155801-#width#-#height#/image-effcb9e512ba455fb7c8322f5ca0201f.jpg?v=638073124009870000\" width=\"#width#\" height=\"#height#\" alt=\"image-effcb9e512ba455fb7c8322f5ca0201f\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155801/image-effcb9e512ba455fb7c8322f5ca0201f.jpg?v=638073124009870000",
              "imageText": "image-effcb9e512ba455fb7c8322f5ca0201f",
              "__typename": "Image"
            }
          ],
          "variations": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "avantiimplantacao",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=370&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": true,
              "commertialOffer": {
                "Installments": [],
                "AvailableQuantity": 0,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 0,
                "Price": 0,
                "PriceValidUntil": null,
                "PriceWithoutDiscount": 0,
                "RewardValue": 0,
                "spotPrice": 0,
                "Tax": 0,
                "taxPercentage": null,
                "teasers": [],
                "discountHighlights": [],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            }
          ],
          "__typename": "SKU"
        },
        {
          "name": "Scarpin Gabriela Recorte Tela Nude - 36",
          "itemId": "371",
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "referenceId": [
            {
              "Value": "000000005059086036",
              "__typename": "Reference"
            }
          ],
          "images": [
            {
              "imageId": "155806",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155806-#width#-#height#/image-77dca8680a1a4190b3d0656bd7d5dbde.jpg?v=638073124074600000\" width=\"#width#\" height=\"#height#\" alt=\"image-77dca8680a1a4190b3d0656bd7d5dbde\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155806/image-77dca8680a1a4190b3d0656bd7d5dbde.jpg?v=638073124074600000",
              "imageText": "image-77dca8680a1a4190b3d0656bd7d5dbde",
              "__typename": "Image"
            },
            {
              "imageId": "155803",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155803-#width#-#height#/image-ee74098b057e4f498e50a33346a36869.jpg?v=638073124074300000\" width=\"#width#\" height=\"#height#\" alt=\"image-ee74098b057e4f498e50a33346a36869\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155803/image-ee74098b057e4f498e50a33346a36869.jpg?v=638073124074300000",
              "imageText": "image-ee74098b057e4f498e50a33346a36869",
              "__typename": "Image"
            },
            {
              "imageId": "155805",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155805-#width#-#height#/image-538646f2642a4f99adc416388c9faa67.jpg?v=638073124074600000\" width=\"#width#\" height=\"#height#\" alt=\"image-538646f2642a4f99adc416388c9faa67\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155805/image-538646f2642a4f99adc416388c9faa67.jpg?v=638073124074600000",
              "imageText": "image-538646f2642a4f99adc416388c9faa67",
              "__typename": "Image"
            },
            {
              "imageId": "155804",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155804-#width#-#height#/image-4512b7bc9c1b437bab9e9b98ef12a1f5.jpg?v=638073124074300000\" width=\"#width#\" height=\"#height#\" alt=\"image-4512b7bc9c1b437bab9e9b98ef12a1f5\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155804/image-4512b7bc9c1b437bab9e9b98ef12a1f5.jpg?v=638073124074300000",
              "imageText": "image-4512b7bc9c1b437bab9e9b98ef12a1f5",
              "__typename": "Image"
            }
          ],
          "variations": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "avantiimplantacao",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=371&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": true,
              "commertialOffer": {
                "Installments": [],
                "AvailableQuantity": 0,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 0,
                "Price": 0,
                "PriceValidUntil": null,
                "PriceWithoutDiscount": 0,
                "RewardValue": 0,
                "spotPrice": 0,
                "Tax": 0,
                "taxPercentage": null,
                "teasers": [],
                "discountHighlights": [],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            }
          ],
          "__typename": "SKU"
        },
        {
          "name": "Scarpin Gabriela Recorte Tela Nude - 40",
          "itemId": "372",
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "referenceId": [
            {
              "Value": "000000005064084040",
              "__typename": "Reference"
            }
          ],
          "images": [
            {
              "imageId": "155807",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155807-#width#-#height#/image-8298a50195a042d4a817611a50220698.jpg?v=638073133439630000\" width=\"#width#\" height=\"#height#\" alt=\"image-8298a50195a042d4a817611a50220698\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155807/image-8298a50195a042d4a817611a50220698.jpg?v=638073133439630000",
              "imageText": "image-8298a50195a042d4a817611a50220698",
              "__typename": "Image"
            },
            {
              "imageId": "155808",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155808-#width#-#height#/image-3168c3f68a6d4477ab7115dbdddc4727.jpg?v=638073133441030000\" width=\"#width#\" height=\"#height#\" alt=\"image-3168c3f68a6d4477ab7115dbdddc4727\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155808/image-3168c3f68a6d4477ab7115dbdddc4727.jpg?v=638073133441030000",
              "imageText": "image-3168c3f68a6d4477ab7115dbdddc4727",
              "__typename": "Image"
            },
            {
              "imageId": "155810",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155810-#width#-#height#/image-fe1f0a387cb74aa396dc1b920a75d211.jpg?v=638073133444830000\" width=\"#width#\" height=\"#height#\" alt=\"image-fe1f0a387cb74aa396dc1b920a75d211\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155810/image-fe1f0a387cb74aa396dc1b920a75d211.jpg?v=638073133444830000",
              "imageText": "image-fe1f0a387cb74aa396dc1b920a75d211",
              "__typename": "Image"
            },
            {
              "imageId": "155809",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155809-#width#-#height#/image-6a070afa478d4a3888858b8af8153edb.jpg?v=638073133443270000\" width=\"#width#\" height=\"#height#\" alt=\"image-6a070afa478d4a3888858b8af8153edb\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155809/image-6a070afa478d4a3888858b8af8153edb.jpg?v=638073133443270000",
              "imageText": "image-6a070afa478d4a3888858b8af8153edb",
              "__typename": "Image"
            }
          ],
          "variations": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "avantiimplantacao",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=372&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": true,
              "commertialOffer": {
                "Installments": [],
                "AvailableQuantity": 0,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 0,
                "Price": 0,
                "PriceValidUntil": null,
                "PriceWithoutDiscount": 0,
                "RewardValue": 0,
                "spotPrice": 0,
                "Tax": 0,
                "taxPercentage": null,
                "teasers": [],
                "discountHighlights": [],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            }
          ],
          "__typename": "SKU"
        },
        {
          "name": "Scarpin Gabriela Recorte Tela Nude - 39",
          "itemId": "373",
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "referenceId": [
            {
              "Value": "000000005059086039",
              "__typename": "Reference"
            }
          ],
          "images": [
            {
              "imageId": "155828",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155828-#width#-#height#/image-191a28304d9c4d0187d5647ece919ce5.jpg?v=638073159831700000\" width=\"#width#\" height=\"#height#\" alt=\"image-191a28304d9c4d0187d5647ece919ce5\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155828/image-191a28304d9c4d0187d5647ece919ce5.jpg?v=638073159831700000",
              "imageText": "image-191a28304d9c4d0187d5647ece919ce5",
              "__typename": "Image"
            },
            {
              "imageId": "155827",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155827-#width#-#height#/image-5c57f131590f477bbfdf59d05ad4a4f5.jpg?v=638073159829830000\" width=\"#width#\" height=\"#height#\" alt=\"image-5c57f131590f477bbfdf59d05ad4a4f5\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155827/image-5c57f131590f477bbfdf59d05ad4a4f5.jpg?v=638073159829830000",
              "imageText": "image-5c57f131590f477bbfdf59d05ad4a4f5",
              "__typename": "Image"
            },
            {
              "imageId": "155825",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155825-#width#-#height#/image-118bece4b6ce4c0ea6990768aac21ae2.jpg?v=638073159827500000\" width=\"#width#\" height=\"#height#\" alt=\"image-118bece4b6ce4c0ea6990768aac21ae2\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155825/image-118bece4b6ce4c0ea6990768aac21ae2.jpg?v=638073159827500000",
              "imageText": "image-118bece4b6ce4c0ea6990768aac21ae2",
              "__typename": "Image"
            },
            {
              "imageId": "155826",
              "imageLabel": null,
              "imageTag": "<img src=\"~/arquivos/ids/155826-#width#-#height#/image-05fb93c0bf2948649833a03d3d6aa0be.jpg?v=638073159828900000\" width=\"#width#\" height=\"#height#\" alt=\"image-05fb93c0bf2948649833a03d3d6aa0be\" id=\"\" />",
              "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155826/image-05fb93c0bf2948649833a03d3d6aa0be.jpg?v=638073159828900000",
              "imageText": "image-05fb93c0bf2948649833a03d3d6aa0be",
              "__typename": "Image"
            }
          ],
          "variations": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "avantiimplantacao",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=373&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
              "sellerDefault": true,
              "commertialOffer": {
                "Installments": [],
                "AvailableQuantity": 0,
                "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
                "ListPrice": 0,
                "Price": 0,
                "PriceValidUntil": null,
                "PriceWithoutDiscount": 0,
                "RewardValue": 0,
                "spotPrice": 0,
                "Tax": 0,
                "taxPercentage": null,
                "teasers": [],
                "discountHighlights": [],
                "__typename": "Offer"
              },
              "__typename": "Seller"
            }
          ],
          "__typename": "SKU"
        }
      ],
      "clusterHighlights": [
        {
          "id": "142",
          "name": "Novidade",
          "__typename": "ClusterHighlight"
        },
        {
          "id": "143",
          "name": "Inovação",
          "__typename": "ClusterHighlight"
        }
      ],
      "productClusters": [
        {
          "id": "142",
          "name": "Novidade",
          "__typename": "ProductClusters"
        },
        {
          "id": "143",
          "name": "Inovação",
          "__typename": "ProductClusters"
        }
      ],
      "properties": [],
      "__typename": "Product",
      "sku": {
        "name": "Scarpin Gabriela Recorte Tela Nude - 32",
        "itemId": "367",
        "measurementUnit": "un",
        "unitMultiplier": 1,
        "referenceId": {
          "Value": "000000005059086032",
          "__typename": "Reference"
        },
        "images": [
          {
            "imageId": "155784",
            "imageLabel": null,
            "imageTag": "<img src=\"~/arquivos/ids/155784-#width#-#height#/image-f2db9e35760d46b4a9250a0f164e39b7.jpg?v=638073121158570000\" width=\"#width#\" height=\"#height#\" alt=\"image-f2db9e35760d46b4a9250a0f164e39b7\" id=\"\" />",
            "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155784-500-auto?v=638073121158570000&width=500&height=auto&aspect=true",
            "imageText": "image-f2db9e35760d46b4a9250a0f164e39b7",
            "__typename": "Image"
          },
          {
            "imageId": "155785",
            "imageLabel": null,
            "imageTag": "<img src=\"~/arquivos/ids/155785-#width#-#height#/image-3ef743bf310940f3bc5288bf4c0f07e6.jpg?v=638073121158870000\" width=\"#width#\" height=\"#height#\" alt=\"image-3ef743bf310940f3bc5288bf4c0f07e6\" id=\"\" />",
            "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155785-500-auto?v=638073121158870000&width=500&height=auto&aspect=true",
            "imageText": "image-3ef743bf310940f3bc5288bf4c0f07e6",
            "__typename": "Image"
          },
          {
            "imageId": "155786",
            "imageLabel": null,
            "imageTag": "<img src=\"~/arquivos/ids/155786-#width#-#height#/image-a502bf9db67e42f3926eb46b1dfa12ec.jpg?v=638073121161070000\" width=\"#width#\" height=\"#height#\" alt=\"image-a502bf9db67e42f3926eb46b1dfa12ec\" id=\"\" />",
            "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155786-500-auto?v=638073121161070000&width=500&height=auto&aspect=true",
            "imageText": "image-a502bf9db67e42f3926eb46b1dfa12ec",
            "__typename": "Image"
          },
          {
            "imageId": "155783",
            "imageLabel": null,
            "imageTag": "<img src=\"~/arquivos/ids/155783-#width#-#height#/image-1059e425b1f54350828fae30667f0dc0.jpg?v=638073121158570000\" width=\"#width#\" height=\"#height#\" alt=\"image-1059e425b1f54350828fae30667f0dc0\" id=\"\" />",
            "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155783-500-auto?v=638073121158570000&width=500&height=auto&aspect=true",
            "imageText": "image-1059e425b1f54350828fae30667f0dc0",
            "__typename": "Image"
          }
        ],
        "variations": [],
        "sellers": [
          {
            "sellerId": "penseavantitestes",
            "sellerName": "Penseavanti2",
            "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=367&qty=1&seller=penseavantitestes&sc=1&price=5600&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
            "sellerDefault": true,
            "commertialOffer": {
              "Installments": [
                {
                  "Value": 9.33,
                  "InterestRate": 0,
                  "TotalValuePlusInterestRate": 56,
                  "NumberOfInstallments": 6,
                  "Name": "Visa 6 vezes sem juros",
                  "__typename": "Installment"
                }
              ],
              "AvailableQuantity": 15,
              "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
              "ListPrice": 80,
              "Price": 56,
              "PriceValidUntil": "2023-12-31T09:05:56Z",
              "PriceWithoutDiscount": 80,
              "RewardValue": 0,
              "spotPrice": 56,
              "Tax": 0,
              "taxPercentage": 0,
              "teasers": [],
              "discountHighlights": [
                {
                  "name": "30% cartão",
                  "__typename": "Discount"
                }
              ],
              "__typename": "Offer"
            },
            "__typename": "Seller"
          },
          {
            "sellerId": "1",
            "sellerName": "avantiimplantacao",
            "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=367&qty=1&seller=1&sc=1&price=0&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
            "sellerDefault": false,
            "commertialOffer": {
              "Installments": [],
              "AvailableQuantity": 0,
              "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
              "ListPrice": 0,
              "Price": 0,
              "PriceValidUntil": null,
              "PriceWithoutDiscount": 0,
              "RewardValue": 0,
              "spotPrice": 0,
              "Tax": 0,
              "taxPercentage": null,
              "teasers": [],
              "discountHighlights": [],
              "__typename": "Offer"
            },
            "__typename": "Seller"
          }
        ],
        "__typename": "SKU",
        "seller": {
          "sellerId": "penseavantitestes",
          "sellerName": "Penseavanti2",
          "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=367&qty=1&seller=penseavantitestes&sc=1&price=5600&cv=3AB168B2E1F944EAB45EFB9CF2A6B2BB_&sc=1",
          "sellerDefault": true,
          "commertialOffer": {
            "Installments": [
              {
                "Value": 9.33,
                "InterestRate": 0,
                "TotalValuePlusInterestRate": 56,
                "NumberOfInstallments": 6,
                "Name": "Visa 6 vezes sem juros",
                "__typename": "Installment"
              }
            ],
            "AvailableQuantity": 15,
            "CacheVersionUsedToCallCheckout": "3AB168B2E1F944EAB45EFB9CF2A6B2BB_",
            "ListPrice": 80,
            "Price": 56,
            "PriceValidUntil": "2023-12-31T09:05:56Z",
            "PriceWithoutDiscount": 80,
            "RewardValue": 0,
            "spotPrice": 56,
            "Tax": 0,
            "taxPercentage": 0,
            "teasers": [],
            "discountHighlights": [
              {
                "name": "30% cartão",
                "__typename": "Discount"
              }
            ],
            "__typename": "Offer"
          },
          "__typename": "Seller"
        },
        "image": {
          "imageId": "155784",
          "imageLabel": null,
          "imageTag": "<img src=\"~/arquivos/ids/155784-#width#-#height#/image-f2db9e35760d46b4a9250a0f164e39b7.jpg?v=638073121158570000\" width=\"#width#\" height=\"#height#\" alt=\"image-f2db9e35760d46b4a9250a0f164e39b7\" id=\"\" />",
          "imageUrl": "https://avantivtexio.vtexassets.com/arquivos/ids/155784-500-auto?v=638073121158570000&width=500&height=auto&aspect=true",
          "imageText": "image-f2db9e35760d46b4a9250a0f164e39b7",
          "__typename": "Image"
        }
      }
    }
  ]

  console.log(dataResponse)
  console.log('mock', mock)

  const product = React.useMemo(
    () => ProductSummary.mapCatalogProductToProductSummary(dataResponse[1]),
    [dataResponse]
  )
  return (

    <div>
      {dataResponse?.length > 1 && (

        <ExtensionPoint
          id="product-summary"
          product={product}
        />
      )}

    </div>
  )
}











