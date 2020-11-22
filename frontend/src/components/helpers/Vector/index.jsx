import React, { useState, useEffect } from 'react'

import Gradient from '@helpers/Gradient'
import vectors from '@svg/vectors'
import { string, number, oneOfType, object, bool } from 'prop-types'

import * as S from './styles'

const Vector = ({ className, name, gradient, gradientProps, ...rest }) => {
  const [gradientId, setGradientId] = useState(null)

  useEffect(() => {
    if (gradient) {
      setGradientId(`shape-gradient-${Date.now()}`)
    }
  }, [gradient])

  return (
    <>
      {gradientId && (
        <Gradient id={gradientId} gradient={gradient} {...gradientProps} />
      )}

      <S.Vector
        as={vectors[name] || vectors.default}
        className={`${className} shape-element`}
        {...rest}
        {...{ gradientId }}
      />
    </>
  )
}

Vector.defaultProps = {
  className: '',
  color: 'blue500',
  opacity: 1,
  width: '100%',
  height: '100%'
}

Vector.propTypes = {
  className: string,
  name: string.isRequired,
  color: string,
  width: oneOfType([number, string]),
  height: oneOfType([number, string]),
  opacity: oneOfType([number, string]),
  rotate: oneOfType([number, string]),
  zIndex: oneOfType([number, string]),
  multiply: bool,
  gradient: string,
  gradientProps: object,
  marginTop: oneOfType([number, string]),
  marginRight: oneOfType([number, string]),
  marginBottom: oneOfType([number, string]),
  marginLeft: oneOfType([number, string])
}

export default Vector
