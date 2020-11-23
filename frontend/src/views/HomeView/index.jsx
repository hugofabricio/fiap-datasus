import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import { AppContext } from '@contexts/appContext'
import Illustration from '@helpers/Illustration'
import Loading from '@helpers/Loading'
import Text from '@shared/Text'
import Tile from '@web/Tile'

import * as S from './styles'

const HomeView = () => {
  const { loading, data } = useContext(AppContext)

  return (
    <S.Dashboard>
      <Container>
        {loading ? (
          <S.DashboardAlert>
            <Loading size={48} />
          </S.DashboardAlert>
        ) : (
          <>
            {data && (
              <>
                {data.disease ? (
                  <>
                    <S.DashboardHeading bgColor="neutral300" marginBottom={32}>
                      <Text as="h2" size={24} weight={600} marginRight={24}>
                        {data.cid} - {data?.disease?.name.replace(/['"]+/g, '')}
                      </Text>
                      {data.cases && (
                        <Text size={24} weight={600} color="neutral900">
                          {data.cases} caso{data.cases > 1 && 's'}
                        </Text>
                      )}
                    </S.DashboardHeading>
                    <S.DashboardContent>
                      <Row>
                        <Col md={4}>
                          <Tile
                            color="orange500"
                            icon="man"
                            title="Homens"
                            subtitle={data.year}
                            value={data.cases_male}
                            percent={data.percent_male}
                          />
                        </Col>
                        <Col md={4}>
                          <Tile
                            color="teal500"
                            icon="woman"
                            title="Mulheres"
                            subtitle={data.year}
                            value={data.cases_female}
                            percent={data.percent_female}
                          />
                        </Col>
                        <Col md={4}>
                          <Tile
                            color="yellow500"
                            icon="city"
                            title="São Paulo"
                            subtitle="Capital"
                            value={data.cases_sp}
                            percent={data.percent_sp}
                          />
                        </Col>
                      </Row>
                    </S.DashboardContent>
                  </>
                ) : (
                  <S.DashboardAlert>
                    <Text as="h2" size={24} weight={600} marginBottom={48}>
                      Nenhuma informação encontrada.
                    </Text>
                    <Illustration name="empty" width="25%" />
                  </S.DashboardAlert>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </S.Dashboard>
  )
}

export default HomeView
