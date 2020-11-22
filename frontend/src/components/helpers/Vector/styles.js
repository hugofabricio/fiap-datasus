import styled from 'styled-components'
import { isString } from 'utils/type-check'

export const Vector = styled.svg.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'gradientId',
      'marginLeft',
      'marginRight',
      'marginTop',
      'marginBottom'
    ].includes(prop)
})`
  flex-shrink: 0;
  transition: all ease 0.4s;

  ${({ theme, color, width, height, opacity }) =>
    theme &&
    `
    color: ${theme.colors[color]};
    width: ${isString(width) ? width : `${width}px`};
    height: ${isString(height) ? height : `${height}px`};
    opacity: ${opacity};
  `}

  ${({ zIndex }) =>
    zIndex &&
    `
    z-index: ${zIndex};
  `}

  ${({ rotate }) =>
    rotate &&
    `
    transform: rotate(${rotate}deg);
  `}

  ${({ multiply }) =>
    multiply &&
    `
    mix-blend-mode: multiply;
  `}

  ${({ top }) =>
    top &&
    `
    top: ${isString(top) ? top : `${top}px`};
  `}

  ${({ bottom }) =>
    bottom &&
    `
    bottom: ${isString(bottom) ? bottom : `${bottom}px`};
  `}

  ${({ left }) =>
    left &&
    `
    left: ${isString(left) ? left : `${left}px`};
  `}

  ${({ right }) =>
    right &&
    `
    right: ${isString(right) ? right : `${right}px`};
  `}

  ${({ marginTop }) =>
    marginTop &&
    `
    margin-top: ${marginTop}px;
  `}

  ${({ marginBotton }) =>
    marginBotton &&
    `
    margin-botton: ${marginBotton}px;
  `}

  ${({ marginLeft }) =>
    marginLeft &&
    `
    margin-left: ${marginLeft}px;
  `}

  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: ${marginRight}px;
  `}

  ${({ theme, gradientId, color }) =>
    gradientId &&
    `
    > * {
      fill: url(#${gradientId}) ${theme.colors[color]};
    }
  `}
`
