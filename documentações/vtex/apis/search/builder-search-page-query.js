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
    const mapValueFormatted = this.mapValue
    return this.baseUrl + (mapValueFormatted ? `?map=${mapValueFormatted}` : '');
  }

  openInNewTab() {
    const url = this.build();
    window.open(url, '_blank');
  }
}



new UrlBuilder()
  .category('Masculino/Tênis/Treino-e-Academia')
  .productField('Cor', 'Preto')
  .productField('Tecnologia', 'Evasense')
  .openInNewTab();