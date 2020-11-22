import { rem } from 'polished'
import styled from 'styled-components'

export const HitWrapper = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`

export const HitLink = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  box-shadow: none !important;
  border: none !important;
  margin: 0 !important;
  outline: 0 !important;
  padding: ${rem(12)} ${rem(12)};
  border-radius: ${rem(4)};

  ${({ theme: { colors } }) => `
  &:hover {
    background-color: ${colors.blue500};
    color: ${colors.neutral0};
  }
`}
`
