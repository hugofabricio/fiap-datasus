import styled from 'styled-components'

export const StatisticsItem = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    padding-top: 12px;
  }

  &:not(:last-of-type) {
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.neutral500};
  }
`

export const StatisticsWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.neutral300};
  border-radius: 20px;
  padding: 24px;
  margin-top: 32px;
`
