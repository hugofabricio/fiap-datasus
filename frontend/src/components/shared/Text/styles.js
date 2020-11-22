import { rem } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.p`
  ${({ theme: { colors }, color }) =>
    color &&
    `
    color: ${colors[color]};
  `}

  ${({ size }) =>
    size &&
    `
    font-size: ${rem(size)};
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
`
