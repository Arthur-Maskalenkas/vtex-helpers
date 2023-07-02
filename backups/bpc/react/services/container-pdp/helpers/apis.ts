export const API = {
	getSimilarProducts: (baseRefId?: string) => `/api/catalog_system/pub/products/search?fq=alternateIds_RefId:${baseRefId}*&sc=1&_from=0&_to=49`,

	postAttachments: (orderFormId?: string, itemIndex?: string, key?: string) => `/api/checkout/pub/orderForm/${orderFormId}/items/${itemIndex}/attachments/${key}`,

	postCoupon: (orderformId?: string) => `/api/checkout/pub/orderForm/${orderformId}/coupons`
}