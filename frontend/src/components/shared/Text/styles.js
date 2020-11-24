import { isString } from '@utils/type-check'
import { between } from 'polished'
import styled from 'styled-components'

const minSize = (size) => {
  if (size >= 24) {
    size = size / 1.4
  }

  return size
}

export const Wrapper = styled.p`
  ${({ theme: { colors }, color }) =>
    color &&
    `
    color: ${colors[color]};
  `}

  ${({ size }) =>
    size &&
    `
    font-size: ${between(`${minSize(size)}px`, `${size}px`)};
  `}

  ${({ weight }) =>
    weight &&
    `
    font-weight: ${weight};
  `}

  ${({ uppercase }) =>
    uppercase &&
    `
    text-transform: uppercase;
  `}

  ${({ marginTop }) =>
    marginTop &&
    `
    margin-top: ${isString(marginTop) ? marginTop : `${marginTop}px`};
  `}

  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: ${isString(marginRight) ? marginRight : `${marginRight}px`};
  `}

  ${({ marginBottom }) =>
    marginBottom &&
    `
    margin-bottom: ${
      isString(marginBottom) ? marginBottom : `${marginBottom}px`
    };
  `}

  ${({ marginLeft }) =>
    marginLeft &&
    `
    margin-left: ${isString(marginLeft) ? marginLeft : `${marginLeft}px`};
  `}
`
