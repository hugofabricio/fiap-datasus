import React from 'react'

import { string } from 'prop-types'

import * as S from './styles'

const HelperText = ({ message }) => {
  return message ? <S.HelperText>{message}</S.HelperText> : null
}

HelperText.defaultProps = {
  message: undefined
}

HelperText.propTypes = {
  message: string
}

export default HelperText
