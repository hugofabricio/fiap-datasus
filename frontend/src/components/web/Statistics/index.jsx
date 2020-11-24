import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import { Doughnut } from 'react-chartjs-2'

import Text from '@shared/Text'
import { object } from 'prop-types'

import * as S from './styles'

const Statistics = ({ data }) => (
  <S.StatisticsWrapper>
    <Row>
      <Col md={6}>
        <Doughnut
          data={{
            labels: [
              'Brancos',
              'Negros',
              'Amarelos',
              'Pardos',
              'Indígenas',
              'Não informado'
            ],
            datasets: [
              {
                label: `Casos em ${data.year}`,
                data: [
                  data.cases_white || 0,
                  data.cases_black || 0,
                  data.cases_yellow || 0,
                  data.cases_brown || 0,
                  data.cases_indigenous || 0,
                  data.cases_undefined_race || 0
                ],
                borderWidth: 0,
                backgroundColor: [
                  '#ffba08',
                  '#faa307',
                  '#f48c06',
                  '#e85d04',
                  '#dc2f02',
                  '#d00000'
                ]
              }
            ]
          }}
          options={{
            legend: {
              position: 'left',
              labels: {
                fontSize: 10,
                padding: 10
              }
            }
          }}
        />
      </Col>
      <Col>
        {data.cases_white && (
          <S.StatisticsItem>
            <Text size={14} color="chart100" uppercase>
              Brancos
            </Text>
            <S.StatisticsBadges>
              <S.StatisticsBadge color="chart100">
                {data.cases_white}
              </S.StatisticsBadge>
              <S.StatisticsBadge color="chart100">
                {data.percent_white || 0}%
              </S.StatisticsBadge>
            </S.StatisticsBadges>
          </S.StatisticsItem>
        )}
        {data.cases_black && (
          <S.StatisticsItem>
            <Text size={14} color="chart200" uppercase>
              Negros
            </Text>
            <S.StatisticsBadges>
              <S.StatisticsBadge color="chart200">
                {data.cases_black}
              </S.StatisticsBadge>
              <S.StatisticsBadge color="chart200">
                {data.percent_black || 0}%
              </S.StatisticsBadge>
            </S.StatisticsBadges>
          </S.StatisticsItem>
        )}
        {data.cases_yellow && (
          <S.StatisticsItem>
            <Text size={14} color="chart300" uppercase>
              Amarelos
            </Text>
            <S.StatisticsBadges>
              <S.StatisticsBadge color="chart300">
                {data.cases_yellow}
              </S.StatisticsBadge>
              <S.StatisticsBadge color="chart300">
                {data.percent_yellow || 0}%
              </S.StatisticsBadge>
            </S.StatisticsBadges>
          </S.StatisticsItem>
        )}
        {data.cases_brown && (
          <S.StatisticsItem>
            <Text size={14} color="chart400" uppercase>
              Pardos
            </Text>
            <S.StatisticsBadges>
              <S.StatisticsBadge color="chart400">
                {data.cases_brown}
              </S.StatisticsBadge>
              <S.StatisticsBadge color="chart400">
                {data.percent_brown || 0}%
              </S.StatisticsBadge>
            </S.StatisticsBadges>
          </S.StatisticsItem>
        )}
        {data.cases_indigenous && (
          <S.StatisticsItem>
            <Text size={14} color="chart500" uppercase>
              Indígenas
            </Text>
            <S.StatisticsBadges>
              <S.StatisticsBadge color="chart500">
                {data.cases_indigenous}
              </S.StatisticsBadge>
              <S.StatisticsBadge color="chart500">
                {data.percent_indigenous || 0}%
              </S.StatisticsBadge>
            </S.StatisticsBadges>
          </S.StatisticsItem>
        )}
        {data.cases_undefined_race && (
          <S.StatisticsItem>
            <Text size={14} color="chart600" uppercase>
              Não informado
            </Text>
            <S.StatisticsBadges>
              <S.StatisticsBadge color="chart600">
                {data.cases_undefined_race}
              </S.StatisticsBadge>
              <S.StatisticsBadge color="chart600">
                {data.percent_undefined_race || 0}%
              </S.StatisticsBadge>
            </S.StatisticsBadges>
          </S.StatisticsItem>
        )}
      </Col>
    </Row>
  </S.StatisticsWrapper>
)

Statistics.propTypes = {
  data: object.isRequired
}

export default Statistics
