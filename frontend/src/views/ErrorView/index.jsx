import React from 'react'
import { Container } from 'react-awesome-styled-grid'

import Text from '@shared/Text'

import * as S from './styles'

const ErrorView = () => (
  <S.Dashboard>
    <Container>
      <S.DashboardAlert>
        <Text as="h2" size={24} weight={600} marginBottom={48}>
          Ops, página não encontrada
        </Text>
      </S.DashboardAlert>
    </Container>
  </S.Dashboard>
)

export default ErrorView
