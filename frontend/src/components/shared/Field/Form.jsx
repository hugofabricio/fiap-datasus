import React from 'react'

import { node } from 'prop-types'

import * as S from './styles'

const Form = ({ children, ...rest }) => (
  <S.Form noValidate {...rest}>
    {children}
  </S.Form>
)

Form.propTypes = {
  children: node.isRequired
}

export default Form
