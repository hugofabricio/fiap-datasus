import { rem, rgba } from 'polished'
import styled from 'styled-components'

export const SearchForm = styled.div``

export const SearchResults = styled.ul`
  position: absolute;
  z-index: 999;
  width: 100%;
  margin-top: 8px;
  padding: ${rem(12)};
  background-color: ${({ theme: { colors } }) => colors.neutral300};
  border-radius: ${rem(8)};
  box-shadow: 0 0 10px
    ${({ theme: { colors } }) => rgba(colors.neutral700, 0.25)};
`

export const EmptyItem = styled.li`
  padding: ${rem(12)};
`

export const AutocompleteWrapper = styled.div``
