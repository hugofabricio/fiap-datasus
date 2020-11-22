import { rem } from 'polished'
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
`

export const SearchItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`

export const SearchLink = styled.button`
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

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`
