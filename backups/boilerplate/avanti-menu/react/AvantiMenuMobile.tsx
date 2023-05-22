import React, { useState } from 'react';
import { MenuMobile } from './components/Mobile/MenuMobile';
import { AvantiMenuMobileContext } from './context/AvantiMenuContext';
import { messages } from './messages';
import type { AvantiMenuMobileContextProps } from './typings/types';

export const AvantiMenuMobile = (props: AvantiMenuMobileContextProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AvantiMenuMobileContext.Provider value={{ props, open, setOpen }}>
      <MenuMobile />
    </AvantiMenuMobileContext.Provider>
  );
};

AvantiMenuMobile.schema = {
  title: messages.avantiMenuItemsTitleMobile.id,
};

export default AvantiMenuMobile;
