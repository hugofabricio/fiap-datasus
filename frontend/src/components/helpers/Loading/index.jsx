import React, { useContext } from 'react'

import { string, number, oneOfType } from 'prop-types'
import { ThemeContext } from 'styled-components'

import * as S from './styles'

const Loading = ({ color, size }) => {
  const theme = useContext(ThemeContext)

  return (
    <S.Loading
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      size={size}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={theme.colors[color]}
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(209.884 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </S.Loading>
  )
}

Loading.defaultProps = {
  size: 16,
  color: 'blue500'
}

Loading.propTypes = {
  size: oneOfType([string, number]),
  color: string
}

export default Loading
