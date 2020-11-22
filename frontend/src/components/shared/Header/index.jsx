import React from 'react'

import Brand from '@shared/Brand'
import Button from '@shared/Button'
import Search from '@web/Search'

import * as S from './styles'

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderContainer>
      <S.HeaderBrand>
        <Brand />
      </S.HeaderBrand>
      <S.HeaderSearch>
        <Search />
      </S.HeaderSearch>
      <S.HeaderUtil>
        <Button href="/" title="API">
          API
        </Button>
      </S.HeaderUtil>
    </S.HeaderContainer>
  </S.HeaderWrapper>
)

export default Header
