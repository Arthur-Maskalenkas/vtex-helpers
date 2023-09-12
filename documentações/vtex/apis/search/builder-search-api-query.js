class BuilderParamsSearchApi {
  constructor() {
    this.baseUrl = `/api/catalog_system/pub/products/search`;
    this.filters = [];

    this.setPagination(1, 50)
  }

  byText(searchWord) {
    this.filters.push(`ft=${searchWord}`);
    return this;
  }

  byCategory(categoryIdA, categoryIdB) {
    this.filters.push(`fq=C:/${categoryIdA}/${categoryIdB}`);
    return this;
  }

  byBrand(brandIdA, brandIdB) {
    this.filters.push(`fq=B:/${brandIdA}/${brandIdB}`);
    return this;
  }

  bySpecification(specificationId, specificationValue) {
    this.filters.push(`fq=specificationFilter_${specificationId}:${specificationValue}`);
    return this;
  }

  byCollection(collectionId) {
    this.filters.push(`fq=productClusterIds:${collectionId}`);
    return this;
  }

  byProductId(productId) {
    this.filters.push(`fq=productId:${productId}`);
    return this;
  }

  bySkuId(skuId) {
    this.filters.push(`fq=skuId:${skuId}`);
    return this;
  }

  byReferenceId(referenceId) {
    this.filters.push(`fq=alternateIds_RefId:${referenceId}`);
    return this;
  }

  byEAN13(ean13) {
    this.filters.push(`fq=alternateIds_Ean:${ean13}`);
    return this;
  }

  bySellerId(sellerId) {
    this.filters.push(`fq=sellerId:${sellerId}`);
    return this;
  }

  setPagination(from, to) {
    this.filters.push(`_from=${from}`);
    this.filters.push(`_to=${to}`);
    return this;
  }


  static aBuilderQuery() {
    return new BuilderParamsSearchApi();
  }

  build() {
    const query = this.filters.join('&');

    const apiEncoded = encodeURI(query);

    return `${this.baseUrl}?${apiEncoded}`;
  }
}

// Exemplo de uso:
const api = BuilderParamsSearchApi
  .aBuilderQuery()
  .byText(das)
  .build()

console.log(api);

await fetch(api)
  .then(response => response.json())
  .then(data => console.log(data))


