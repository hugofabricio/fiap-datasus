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
        <S.StatisticsBadges>
          <S.StatisticsBadge>{data.cases_white}</S.StatisticsBadge>
          <S.StatisticsBadge>{data.percent_white || 0}%</S.StatisticsBadge>
        </S.StatisticsBadges>
      </S.StatisticsItem>
    )}
    {data.cases_black && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Negros
        </Text>
        <S.StatisticsBadges>
          <S.StatisticsBadge>{data.cases_black}</S.StatisticsBadge>
          <S.StatisticsBadge>{data.percent_black || 0}%</S.StatisticsBadge>
        </S.StatisticsBadges>
      </S.StatisticsItem>
    )}
    {data.cases_yellow && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Amarelos
        </Text>
        <S.StatisticsBadges>
          <S.StatisticsBadge>{data.cases_yellow}</S.StatisticsBadge>
          <S.StatisticsBadge>{data.percent_yellow || 0}%</S.StatisticsBadge>
        </S.StatisticsBadges>
      </S.StatisticsItem>
    )}
    {data.cases_brown && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Pardos
        </Text>
        <S.StatisticsBadges>
          <S.StatisticsBadge>{data.cases_brown}</S.StatisticsBadge>
          <S.StatisticsBadge>{data.percent_brown || 0}%</S.StatisticsBadge>
        </S.StatisticsBadges>
      </S.StatisticsItem>
    )}
    {data.cases_indigenous && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Indígenas
        </Text>
        <S.StatisticsBadges>
          <S.StatisticsBadge>{data.cases_indigenous}</S.StatisticsBadge>
          <S.StatisticsBadge>{data.percent_indigenous || 0}%</S.StatisticsBadge>
        </S.StatisticsBadges>
      </S.StatisticsItem>
    )}
    {data.cases_undefined_race && (
      <S.StatisticsItem>
        <Text size={14} uppercase>
          Não informado
        </Text>
        <S.StatisticsBadges>
          <S.StatisticsBadge>{data.cases_undefined_race}</S.StatisticsBadge>
          <S.StatisticsBadge>
            {data.percent_undefined_race || 0}%
          </S.StatisticsBadge>
        </S.StatisticsBadges>
      </S.StatisticsItem>
    )}
  </S.StatisticsWrapper>
)

Statistics.propTypes = {
  data: object.isRequired
}

export default Statistics
