import React from 'react'

import Text from '@shared/Text'
import { object } from 'prop-types'

import * as S from './styles'

const Statistics = ({ data }) => (
  <S.StatisticsWrapper>
    {data.cases_white && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Brancos
        </Text>
        <Text size={14} color="blue500" weight={600} uppercase>
          {data.cases_white} / {data.percent_white || 0}%
        </Text>
      </S.StatisticsItem>
    )}
    {data.cases_black && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Negros
        </Text>
        <Text size={14} color="blue500" weight={600} uppercase>
          {data.cases_black} / {data.percent_black || 0}%
        </Text>
      </S.StatisticsItem>
    )}
    {data.cases_yellow && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Amarelos
        </Text>
        <Text size={14} color="blue500" weight={600} uppercase>
          {data.cases_yellow} / {data.percent_yellow || 0}%
        </Text>
      </S.StatisticsItem>
    )}
    {data.cases_brown && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Pardos
        </Text>
        <Text size={14} color="blue500" weight={600} uppercase>
          {data.cases_brown} / {data.percent_brown || 0}%
        </Text>
      </S.StatisticsItem>
    )}
    {data.cases_indigenous && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Indígenas
        </Text>
        <Text size={14} color="blue500" weight={600} uppercase>
          {data.cases_indigenous} / {data.percent_indigenous || 0}%
        </Text>
      </S.StatisticsItem>
    )}
    {data.cases_undefined_race && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Não informado
        </Text>
        <Text size={14} color="blue500" weight={600} uppercase>
          {data.cases_undefined_race} / {data.percent_undefined_race || 0}%
        </Text>
      </S.StatisticsItem>
    )}
  </S.StatisticsWrapper>
)

Statistics.propTypes = {
  data: object.isRequired
}

export default Statistics
