import { rem } from 'polished'
import styled from 'styled-components'

export const SearchForm = styled.form``

export const SearchResults = styled.ul`
  position: absolute;
  z-index: 999;
  width: 100%;
  margin-top: 8px;
  padding: ${rem(12)};
  background-color: ${({ theme: { colors } }) => colors.neutral300};
  border-radius: ${rem(8)};
`

export const EmptyItem = styled.li`
  padding: ${rem(12)};
`

export const AutocompleteWrapper = styled.div``
