import React, { useContext } from 'react'

import { AppContext } from '@contexts/appContext'
import Link from '@helpers/Link'
import Brand from '@shared/Brand'
import Button from '@shared/Button'
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
          <Button
            onClick={() => setModalState(true)}
            title="API"
            marginRight={12}
          >
            API
          </Button>
          <Button
            href="https://github.com/hugofabricio/fiap-datasus"
            target="_blank"
            title="GitHub"
          >
            GitHub
          </Button>
        </S.HeaderUtil>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
