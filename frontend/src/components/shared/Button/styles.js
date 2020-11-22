import { rem, readableColor, darken, rgba } from 'polished'
import styled from 'styled-components'

export const ButtonWrapper = styled.a`
  cursor: pointer;
  display: inline-block;
  padding: ${rem(12)} ${rem(24)};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: ${rem(2)};
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: ${rem(8)};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${({ theme: { colors }, color }) =>
    color &&
    `
    color: ${readableColor(colors[color], colors.neutral0, colors.neutral900)};
    background-color: ${colors[color]};

    &:hover {
      background-color: ${darken(0.1, colors[color])};
      color: ${readableColor(
        darken(0.1, colors[color]),
        colors.neutral0,
        colors.neutral900
      )};
    }

    &:focus {
      box-shadow: 0 0 0 0.25rem ${rgba(colors[color], 0.25)};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:disabled {
    pointer-events: none;
  }
`
