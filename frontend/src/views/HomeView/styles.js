import { Content, Heading, Wrapper } from '@shared/Section'
import media from '@utils/media'
import styled from 'styled-components'

export const Dashboard = styled(Wrapper)``

export const DashboardHeading = styled(Heading)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-radius: 20px;

  ${media.lessThan('xs')`
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const DashboardContent = styled(Content)``

export const DashboardAlert = styled.div`
  padding: 100px 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
