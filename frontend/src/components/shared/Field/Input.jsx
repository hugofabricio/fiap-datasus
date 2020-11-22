import React from 'react'

import Vector from '@helpers/Vector'
import { string } from 'prop-types'

import HelperText from './HelperText'
import * as S from './styles'

const Input = ({ icon, type, label, name, id, errors, ...rest }) => {
  const inputId = id || name

  return (
    <S.FormGroup status={errors?.[name] && 'error'}>
      <S.Label htmlFor={inputId}>{label}</S.Label>
      {icon && (
        <S.InputIcon>
          <Vector width={20} height={20} color="blue500" name={icon} />
        </S.InputIcon>
      )}
      <S.Input
        id={inputId}
        name={name}
        hasIcon={icon ? 1 : 0}
        type={type}
        placeholder={label}
        {...rest}
      />
      <HelperText message={errors?.[name]?.message} />
    </S.FormGroup>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  type: string,
  icon: string,
  label: string.isRequired,
  name: string.isRequired,
  id: string
}

export default Input
