import { rem } from 'polished'
import styled from 'styled-components'

export const StatisticsItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;

  &:not(:last-of-type) {
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.neutral500};
  }
`

export const StatisticsBadges = styled.div``

export const StatisticsBadge = styled.span`
  font-size: ${rem(12)};
  font-weight: 700;
  letter-spacing: 1px;
  background-color: ${({ theme: { colors }, color }) => colors[color]};
  color: ${({ theme: { colors } }) => colors.neutral0};
  border-radius: 24px;
  padding: 2px 8px;
  text-indent: 1px;
  display: inline-block;

  &:last-of-type {
    margin-left: 4px;
  }
`

export const StatisticsWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.neutral300};
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 32px;
`
