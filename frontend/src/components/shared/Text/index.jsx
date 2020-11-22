import React from 'react'

import { string } from 'prop-types'

import * as S from './styles'

const Text = ({ children, color, ...rest }) => (
  <S.Wrapper color={color} {...rest}>
    {children}
  </S.Wrapper>
)

Text.defaultProps = {
  color: 'neutral700'
}

Text.propTypes = {
  color: string
}

export default Text
