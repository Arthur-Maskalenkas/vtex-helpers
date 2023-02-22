import React from 'react'


import { RenderHorizontalFlags } from './renders/horizontal';
import { RenderQuadrantFlags } from './renders/quadrant';

export const FlagsAvanti = ({ render = 'quadrant' }: { render?: 'quadrant' | 'horizontal' }) => {

  if (render === 'horizontal') {
    return <RenderHorizontalFlags />
  }

  if (render === 'quadrant') {
    return <RenderQuadrantFlags />
  }

  return null
}
