import React from 'react';
import { Couch } from './list-icons';
import { Variant } from './list-icons/utils';

type RenderIconsProps = {
  name: "Couch";

  variant?: Variant
};

export const RenderIcons = (props: RenderIconsProps) => {
  const { name, variant } = props;

  const Icons: Record<RenderIconsProps["name"], JSX.Element> = {
    Couch: <Couch variant={variant ?? "secondary"} />,
  };

  return Icons[name];
};
