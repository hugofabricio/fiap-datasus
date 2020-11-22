import { isString } from '@utils/type-check'
import styled from 'styled-components'

export const SectionBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  ${({ textAlign }) =>
    textAlign &&
    `
      text-align: ${textAlign};
  `}

  ${({ theme, bgColor }) =>
    bgColor &&
    `
      background-color: ${theme.colors[bgColor]};
  `}

  ${({ zIndex }) =>
    zIndex &&
    `
    z-index: ${zIndex};
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

  ${({ paddingTop }) =>
    paddingTop &&
    `
    padding-top: ${isString(paddingTop) ? paddingTop : `${paddingTop}px`};
  `}

  ${({ paddingRight }) =>
    paddingRight &&
    `
    padding-right: ${
      isString(paddingRight) ? paddingRight : `${paddingRight}px`
    };
  `}

  ${({ paddingBottom }) =>
    paddingBottom &&
    `
    padding-bottom: ${
      isString(paddingBottom) ? paddingBottom : `${paddingBottom}px`
    };
  `}

  ${({ paddingLeft }) =>
    paddingLeft &&
    `
    padding-left: ${isString(paddingLeft) ? paddingLeft : `${paddingLeft}px`};
  `}
`
