class UrlBuilder {
  constructor() {
    this.baseUrl = '';
    this.mapValue = '';
  }

  category(name) {
    this.baseUrl += `/${name}`;
    this.mapValue += (this.mapValue ? ',' : '') + 'c';
    return this;
  }

  brand(name) {
    this.baseUrl += `/${name}`;
    this.mapValue += (this.mapValue ? ',' : '') + 'b';
    return this;
  }

  collection(id) {
    this.baseUrl += `/${id}`;
    this.mapValue += (this.mapValue ? ',' : '') + 'productClusterIds';
    return this;
  }

  productField(id, value) {
    this.baseUrl += `/${value}`;
    this.mapValue += (this.mapValue ? ',' : '') + `specificationFilter_${id}`;
    return this;
  }

  build() {
    return this.baseUrl + (this.mapValue ? `?map=${this.mapValue}` : '');
  }
}


let url = new UrlBuilder()
  .category('eletronicos')
  .brand('apple')
  .collection(123)
  .build();