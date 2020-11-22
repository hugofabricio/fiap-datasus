import { rem } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.h1`
  color: ${({ theme }) => theme.colors.blue500};
  font-size: ${rem(32)};

  span {
    font-weight: 700;
  }
`
