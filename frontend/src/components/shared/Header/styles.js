import { Container } from 'react-awesome-styled-grid'

import media from '@utils/media'
import styled from 'styled-components'

export const HeaderBrand = styled.div`
  margin-right: 32px;

  ${media.lessThan('sm')`
    width: 100%;
    text-align: center;
    margin-right: 0;
    margin-bottom: 24px;
  `}
`

export const HeaderSearch = styled.div`
  flex: 1;

  ${media.lessThan('xs')`
    width: 100%;
    margin-bottom: 24px;
  `}
`

export const HeaderUtil = styled.div`
  margin-left: 32px;

  ${media.lessThan('xs')`
    width: 100%;
    margin-left: 0;

    > a {
      display: block;
    }
  `}
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('sm')`
    flex-wrap: wrap;
  `}

  ${media.lessThan('xs')`
    flex-direction: column;
  `}
`

export const HeaderWrapper = styled.footer`
  margin-bottom: 32px;
`
