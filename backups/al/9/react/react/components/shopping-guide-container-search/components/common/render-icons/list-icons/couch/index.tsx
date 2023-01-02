import React from 'react';

import { Desktop } from './desktop'
import { Mobile } from './mobile'

import { IconCommonProps } from '../utils';

export const Couch = ({ variant }: IconCommonProps) => {
  return (
    <>
      {variant === 'primary' && (
        <Desktop />
      )}

      {variant === 'secondary' && (
        <div data-container-with-icons-responsive={true}>
          <Desktop />
          <Mobile />
        </div>
      )}
    </>
  )
}
