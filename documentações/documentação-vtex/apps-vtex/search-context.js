// Bem, eu a um tempo atrás estive tentando fazer um filtro de produtos por páginas, procurei nas doc da vtex e não encontrei, vi opções mas sempre envolvia clonar todo o projeto, e acabei encontrando uma forma bem simples com uma função da vtex(searchPageContext.searchQuery.refetch), pode ser algo obvio para alguns, mas pra mim se eu tivesse encontrado algo sobre nas doc pra fazer somente isso sem ser um custom paginator inteiro


import React from 'react';
import { useSearchPage } from "vtex.search-page-context/SearchPageContext";

const FilterProductsQuantity = () => {
     const searchPageContext = useSearchPage();
     const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
          const quantItems = Number(event.currentTarget.value);
          if (isNaN(quantItems)) return;
          const page = searchPageContext.page - 1;
          const initial = page * quantItems;
          const final = initial + quantItems - 1;
          searchPageContext.searchQuery.refetch({
               from: initial,
               to: final,
               page: page
          });
     }
     return (
          <select name="product-quantity" onChange={handleChange} >
               <option value="4" > 4 </option>
               <option value="8" > 8 </option>
               <option value="12" > 12 </option>
               <option value="16" > 16 </option>
               <option value="20" > 20 </option>
               < /select>
               );
}

               export default FilterProductsQuantity;