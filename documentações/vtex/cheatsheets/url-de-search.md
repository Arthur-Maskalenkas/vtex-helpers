# https://www.kopenhagen.com.br/493?map=productClusterIds

1. `/[CategoryName]?map=c`: Esta URL exibe os produtos cuja categoria corresponde ao nome especificado na URL.

   - Explicação: Este é um filtro baseado na categoria do produto. Ao inserir o nome da categoria após a barra (/), os produtos dessa categoria específica serão exibidos.
   
   - Exemplo: `www.seusite.com.br/eletronicos?map=c` - Neste caso, todos os produtos da categoria "eletrônicos" serão exibidos.

2. `/[BrandName]?map=b`: Esta URL exibe os produtos cuja marca corresponde ao nome especificado na URL.

   - Explicação: Este é um filtro baseado na marca do produto. Ao inserir o nome da marca após a barra (/), os produtos dessa marca específica serão exibidos.
   
   - Exemplo: `www.seusite.com.br/apple?map=b` - Neste caso, todos os produtos da marca "Apple" serão exibidos.

3. `/[CollectionId]?map=productClusterIds`: Esta URL exibe os produtos cuja coleção corresponde ao ID especificado na URL.

   - Explicação: Este é um filtro baseado no ID da coleção de produtos. Ao inserir o ID da coleção após a barra (/), os produtos dessa coleção específica serão exibidos.
   
   - Exemplo: `www.seusite.com.br/493?map=productClusterIds` - Neste caso, todos os produtos da coleção com o ID "493" serão exibidos.

4. `[SearchValue]?map=specificationFilter_[ProductFieldId/Sku]`: Esta URL exibe os produtos cujo campo de produto/ SKU, com o ID indicado, é igual ao valor inserido.

   - Explicação: Este é um filtro baseado em um campo específico de um produto ou SKU. Ao inserir o valor da pesquisa e o ID do campo do produto ou SKU após o `specificationFilter_`, os produtos que correspondem a esses critérios serão exibidos.
   
   - Exemplo: `www.seusite.com.br/vermelho?map=specificationFilter_123` - Neste caso, todos os produtos cujo campo com o ID "123" seja "vermelho" serão exibidos.


# combinação de urls

   à possibilidade de combinar diferentes parâmetros em uma única URL. A ordem dos valores no parâmetro 'map' determina como cada segmento da URL será interpretado.

Por exemplo:

/apple/eletronicos?map=b,c

Essa URL busca por produtos da marca 'apple' ('b') na categoria 'eletronicos' ('c'). A ordem em 'map' (primeiro 'b', depois 'c') corresponde à ordem na URL (primeiro 'apple', depois 'eletronicos').


```javascript
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
```