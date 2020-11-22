import { isString } from '@util/type-check'
import styled from 'styled-components'

export const Loading = styled.svg`
  margin-right: 6px;
  background: none;
  shape-rendering: auto;

  ${({ size }) =>
    size &&
    `
    width: ${isString(size) ? size : `${size}px`};
    height: ${isString(size) ? size : `${size}px`};
  `}
`
