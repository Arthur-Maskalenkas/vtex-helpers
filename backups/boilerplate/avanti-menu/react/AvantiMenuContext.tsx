import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from './components/Utils/LocalStorage';
import { AvantiMenuContext } from './context/AvantiMenuContext';
import { messages } from './messages';
import { AvantiMenuChildrenProps, AvantiMenuContextProps, CategoriesMenu } from './typings/types';
import { UseGlobalContextAvantiMenu } from 'avantiimplantacao.global-context'

const AvantiMenuProvider = ({ children }: AvantiMenuContextProps & AvantiMenuChildrenProps) => {
  // @ts-ignore
  const context = UseGlobalContextAvantiMenu()?.items as any ?? []

  const [categories, setCategories] = useState<CategoriesMenu[]>([]);

  useEffect(() => {
    const storageKey = 'avanti-menu';
    const categoryExists = context?.filter((item:any) => item.type === 'category');

    const fetchCategories = async () => {
      try {
        const getItem = getLocalStorage(storageKey);
        if (getItem) {
          setCategories(getItem);
        } else {
          await fetch(`/api/catalog_system/pub/category/tree/3/`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setCategories(data);
              setLocalStorage(storageKey, data, 60);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };

    categoryExists?.length ? fetchCategories() : '';
  }, [context, setCategories]);


  return <AvantiMenuContext.Provider value={{ items: context, categories }}>{children}</AvantiMenuContext.Provider>;
};

AvantiMenuProvider.schema = {
  title: messages.menuParentTitle.id,
};

export default AvantiMenuProvider;
