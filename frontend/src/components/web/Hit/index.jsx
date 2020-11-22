import React from 'react'

import { object, func } from 'prop-types'

import * as S from './styles'

const Hit = ({ hit, handleOnClick }) => (
  <S.HitWrapper>
    <S.HitLink onClick={handleOnClick} size={14} uppercase>
      {hit.cid} - {hit.nome.replace(/['"]+/g, '')}
    </S.HitLink>
  </S.HitWrapper>
)

Hit.defaultProps = {
  handleOnClick: () => {}
}

Hit.propTypes = {
  hit: object,
  handleOnClick: func
}

export default Hit
