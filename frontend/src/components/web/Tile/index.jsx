import React from 'react'

import Vector from '@helpers/Vector'
import ProgressBar from '@shared/ProgressBar'
import Text from '@shared/Text'
import { string, oneOfType, number } from 'prop-types'

import * as S from './styles'

const Tile = ({ color, icon, title, subtitle, value, percent }) => (
  <S.TileWrapper>
    <S.TileBody>
      <S.TileIcon>
        <Vector name={icon} height={60} color={color} />
      </S.TileIcon>
      <S.TileCaption>
        <S.TitleHeading>
          <Text size={18} weight={600} color="neutral900">
            {title}
          </Text>
          {subtitle && <Text size={18}>{subtitle}</Text>}
        </S.TitleHeading>

        <S.TileValue>
          <Text size={32} weight={600} color="neutral900">
            {value || 0}
          </Text>
        </S.TileValue>
      </S.TileCaption>
    </S.TileBody>
    <S.TileFooting>
      <ProgressBar percent={percent || 0} color={color} />
    </S.TileFooting>
  </S.TileWrapper>
)

Tile.propTypes = {
  color: string,
  icon: string,
  title: string.isRequired,
  subtitle: string,
  percent: oneOfType([string, number])
}

export default Tile
