import React from 'react'

import Text from '@shared/Text'
import { string, number, oneOfType } from 'prop-types'

import * as S from './styles'

const ProgressBar = ({ color, percent }) => (
  <S.ProgressBarWrapper>
    <Text size={18} weight={600} marginBottom={6} uppercase>
      {percent}%
    </Text>
    <S.ProgressBar>
      <S.ProgressBarActive color={color} size={percent} />
    </S.ProgressBar>
  </S.ProgressBarWrapper>
)

ProgressBar.defaultProps = {
  color: 'blue500',
  percent: '0'
}

ProgressBar.propTypes = {
  color: string,
  percent: oneOfType([string, number])
}

export default ProgressBar
