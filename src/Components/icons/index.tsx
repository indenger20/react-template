/* tslint:disable:max-line-length */

import React from 'react';

const wrapSvgPath = (path: any, viewBox: string = '0 0 24 24') => (
  props: any,
) => (
  <svg {...props} viewBox={viewBox}>
    {path}
  </svg>
);

export const HomeIcon = wrapSvgPath(
  <path d="M8,0,0,7V8H2v5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V8h2V7Zm4,12H4V6.33L8,3l4,3.33Z" />,
  '0 0 16 14',
);

export const BurgerIco = wrapSvgPath(
  <path d="M0,0V2H16V0ZM0,7H16V5H0Zm0,5H16V10H0Z" />,
  '0 0 16 12',
);
