import React from 'react'

import illustrations from '@svg/illustrations'
import { oneOfType, string, number } from 'prop-types'

const Illustration = ({ className, name, width, height, ...rest }) => {
  const Vector = illustrations[name] || illustrations.default

  const illustrationStyle = {
    flexShrink: 0,
    width,
    height
  }

  return (
    <Vector
      className={`illustration illustration-${name} ${className}`}
      style={{ ...illustrationStyle }}
      {...rest}
    />
  )
}

Illustration.defaultProps = {
  className: '',
  width: '100%',
  height: '100%'
}

Illustration.propTypes = {
  className: string,
  name: string.isRequired,
  width: oneOfType([string, number]),
  height: oneOfType([string, number])
}

export default Illustration
