import React from 'react'

import { string, node } from 'prop-types'

import * as S from './styles'

const Button = ({ children, color, ...rest }) => (
  <S.ButtonWrapper color={color} {...rest}>
    {children}
  </S.ButtonWrapper>
)

Button.defaultProps = {
  color: 'blue500'
}

Button.propTypes = {
  children: node.isRequired,
  color: string
}

export default Button
