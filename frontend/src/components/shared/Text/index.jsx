import React from 'react'

import * as S from './styles'

const Text = ({ children, color, ...rest }) => (
  <S.Wrapper color={color} {...rest}>
    {children}
  </S.Wrapper>
)

Text.propTypes = {
  color: 'neutral700'
}

export default Text
