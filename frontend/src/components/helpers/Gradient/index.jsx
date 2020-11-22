import React, { useContext } from 'react'

import { number, string } from 'prop-types'
import { ThemeContext } from 'styled-components'

const Gradient = ({ id, gradient: gradientProp, stopOpacity, ...rest }) => {
  const theme = useContext(ThemeContext)
  const gradient = theme.gradients[gradientProp]
  const total = gradient.colors.length

  return (
    <svg
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0 }}
    >
      <linearGradient id={id} gradientUnits="userSpaceOnUse" {...rest}>
        {gradient.colors.map((color, i) => (
          <stop
            key={i}
            offset={`${i < total - 1 ? (100 / total) * i : 100}%`}
            stopColor={color}
            stopOpacity={i === total - 1 ? stopOpacity : 1}
          />
        ))}
      </linearGradient>
    </svg>
  )
}

Gradient.defaultProps = {
  gradient: 0,
  stopOpacity: 0,
  x1: 35,
  y1: -50,
  x2: 110,
  y2: 90
}

Gradient.propTypes = {
  id: string.isRequired,
  gradient: string,
  stopOpacity: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
}

export default Gradient
