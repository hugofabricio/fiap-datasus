import React from 'react'
import { Controller } from 'react-hook-form'

import Vector from '@helpers/Vector'
import masks from '@utils/masks'
import { string } from 'prop-types'

import HelperText from './HelperText'
import * as S from './styles'

const Input = ({
  control,
  icon,
  type,
  label,
  name,
  mask,
  id,
  errors,
  ...rest
}) => {
  const inputId = id || name

  const handleOnChange = (value) => {
    if (mask && masks[mask]) {
      value = masks[mask](value)
    }

    return value
  }

  return (
    <S.FormGroup status={errors?.[name] && 'error'}>
      <S.Label htmlFor={inputId}>{label}</S.Label>

      <Controller
        control={control}
        name={name}
        render={({ onChange, value, ...props }) => (
          <>
            {icon && (
              <S.InputIcon>
                <Vector width={20} height={20} color="blue500" name={icon} />
              </S.InputIcon>
            )}

            <S.Input
              id={inputId}
              hasIcon={icon ? 1 : 0}
              type={type}
              value={value}
              onChange={(e) => onChange(handleOnChange(e.target.value))}
              placeholder={label}
              {...props}
            />
          </>
        )}
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
  mask: string,
  label: string.isRequired,
  name: string.isRequired,
  id: string
}

export default Input
