import React, { useContext } from 'react'

import { AppContext } from '@contexts/appContext'
import Brand from '@shared/Brand'
import Search from '@web/Search'

import * as S from './styles'

const Header = () => {
  const { setModalState } = useContext(AppContext)

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderBrand>
          <Brand />
        </S.HeaderBrand>
        <S.HeaderSearch>
          <Search />
        </S.HeaderSearch>
        <S.HeaderUtil>
          <S.HeaderButton onClick={() => setModalState(true)} title="API">
            API
          </S.HeaderButton>
          <S.HeaderButton
            href="https://github.com/hugofabricio/fiap-datasus"
            target="_blank"
            title="GitHub"
          >
            GitHub
          </S.HeaderButton>
        </S.HeaderUtil>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
