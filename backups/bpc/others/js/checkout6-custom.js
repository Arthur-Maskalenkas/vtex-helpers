function getItemQuantity(orderForm) {
  var totalItems = 0;
  orderForm.items.forEach((element) => {
    totalItems += element.quantity;
  });

  document.getElementById('counter-cart-checkout').textContent = `(${totalItems})`;
}

function tamanhoImg() {
  var imgs = setInterval(() => {
    if ($('.product-item .product-image img, .summary-cart-template-holder .hproduct img').length > 0) {
      $('.product-item .product-image img, .summary-cart-template-holder .hproduct img').each(function (i, img) {
        let url = $(img).attr('src').replace('-55-55', '-98-75');
        $(img).attr('src', url);
      });
      clearInterval(imgs);
    }
  }, 500);
}

async function nameSku() {
  const orderFormItems = vtexjs.checkout.orderForm.items;

  //Get additional information

  var url;
  var getHtmlClass = document.getElementsByClassName('product-name');

  orderFormItems.forEach(async (cartItem, index) => {
    var getSizeProductItem = document.createElement('span');

    url = `/api/catalog_system/pub/products/search/?fq=alternateIds_RefId:${cartItem.refId}`;
    getSizeProductItem.setAttribute('class', 'variationSku');

    var response = await fetch(url);
    var data = await response.json();
    var cartItemSkus = data[0].items.filter((item) => item.itemId === cartItem.id);
    var haveNameItemSkus = data[0].items.filter((item) => item.name.indexOf(cartItemSkus[0][`Tamanho`]) >= 0);
    getSizeProductItem.innerText = ' ' + cartItemSkus[0][`Tamanho`];

    if (getHtmlClass[index].children[0].children.length <= 0 && !haveNameItemSkus.length) {
      getHtmlClass[index].children[0].appendChild(getSizeProductItem);
    }
  });
}

function BPC() {
  const regexExp = /^BPC/i;
  console.log(`🚀 ~ file: checkout6-custom.js:50 ~ BPC ~ regexExp:`, regexExp)

  console.log(`🚀 ~ file: checkout6-custom.js:53 ~ BPC ~ vtexjs:`, vtexjs)
  if (!vtexjs.checkout) return
  const listBPCItems = vtexjs.checkout.orderForm.items?.filter(item => regexExp.test(item.refId))?.map(item => item.id)
  console.log(`🚀 ~ file: checkout6-custom.js:55 ~ BPC ~ listBPCItems:`, listBPCItems)

  if (!listBPCItems) return
  console.log(`🚀 ~ file: checkout6-custom.js:58 ~ BPC ~ listBPCItems:`, listBPCItems)

  listBPCItems.forEach((value) => {
    const element = $(`tr.product-item[data-sku='${value}']`)

    console.log(`🚀 ~ file: checkout6-custom.js:63 ~ listBPCItems.forEach ~ element:`, element)
    if (!element) return

    const buttonAddMore = $(`tr.product-item[data-sku='${value}'] [title='Aumentar a quantidade']`);

    console.log(`🚀 ~ file: checkout6-custom.js:68 ~ listBPCItems.forEach ~ buttonAddMore:`, buttonAddMore)
    buttonAddMore.css({
      'pointer-events': 'none',
      'opacity': '0.6'
    })
  })
}



$(document).ready(function () {
  setTimeout(() => {
    BPC()
  }, 1000);
  tamanhoImg();
  vtexjs.checkout.getOrderForm().done(function (orderForm) {
    getItemQuantity(orderForm);
    setTimeout(() => {
      nameSku(orderForm);
    }, 1000);
  });
});

$(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
  setTimeout(() => {
    BPC()
  }, 1000);
  tamanhoImg();

  getItemQuantity(orderForm);
  setTimeout(() => {
    nameSku(orderForm);
  }, 1000);
});
