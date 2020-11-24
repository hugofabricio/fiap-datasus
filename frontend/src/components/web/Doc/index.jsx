import React, { useRef, useContext } from 'react'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import { AppContext } from '@contexts/appContext'
import Vector from '@helpers/Vector'
import useEscKeyPress from '@hooks/use-esc-key-press'
import useOnClickOutside from '@hooks/use-on-click-outside'
import Text from '@shared/Text'

import * as S from './styles'

const Doc = () => {
  const ref = useRef(null)
  const { modalState, setModalState } = useContext(AppContext)

  useOnClickOutside(ref, () => setModalState(false))
  useEscKeyPress(() => setModalState(false))

  return (
    <>
      <ScrollLock isActive={modalState} />
      <S.DocWrapper isOpen={modalState} ref={ref} className="overlay">
        <TouchScrollable>
          <S.ModalDialog>
            <S.ModalDialogContent>
              <S.ModalClose
                onClick={() => setModalState(false)}
                color="blue500"
              >
                <Vector name="close" color="neutral0" width={16} height={16} />
              </S.ModalClose>

              <Text as="h2" size={24} weight={600} marginBottom={24}>
                API
              </Text>

              <S.DocItem>
                <S.DocReq>
                  <Text uppercase color="neutral300" size={12} weight={600}>
                    Url Base
                  </Text>
                </S.DocReq>
                <S.DocRes>
                  <Text color="neutral500" size={14}>
                    https://buscasus.com.br/api
                  </Text>
                </S.DocRes>
              </S.DocItem>

              <S.DocItem>
                <Text size={14} marginBottom={12}>
                  Retornar lista de CIDS10
                </Text>
                <S.DocReq>
                  <Text uppercase color="neutral300" size={12} weight={600}>
                    <span className="method">GET</span>{' '}
                    <span className="url">/cids</span>
                  </Text>
                </S.DocReq>
                <S.DocRes>
                  <Text
                    uppercase
                    color="neutral600"
                    size={12}
                    weight={600}
                    marginBottom={12}
                  >
                    Response
                  </Text>
                  <S.DocCode>
                    {`{
  "results": [
    {
      "statistics": [
        {
          "cost_year": 35.95,
          "cost_per_case": 35.95,
          "age": 66,
          "mortality": 1,
          "mortality_rate": 1,
          "days_hospitalized": 4,
          "cases": 1,
          "cases_female": null,
          "cases_male": 1,
          "cases_sp": null,
          "cases_undefined_gender": null,
          "cases_white": 1,
          "cases_black": null,
          "cases_yellow": null,
          "cases_brown": null,
          "cases_indigenous": null,
          "cases_undefined_race": null,
          "percent_female": null,
          "percent_male": 100,
          "percent_sp": null,
          "percent_white": 100,
          "percent_black": null,
          "percent_yellow": null,
          "percent_brown": null,
          "percent_indigenous": null,
          "_id": "5fbb139dcce1ba1b07a89522",
          "cid": "A00",
          "year": "2019",
          "disease": "5fbb12a196314c1acb8c0352",
          "__v": 0
        }
      ],
      "_id": "5fbb12a196314c1acb8c0352",
      "cid": "A00",
      "name": "Cólera",
      "__v": 1
    }
  ]
}`}
                  </S.DocCode>
                </S.DocRes>
              </S.DocItem>

              <S.DocItem>
                <Text size={14} marginBottom={12}>
                  Retorna um CID10 e suas estátisticas
                </Text>
                <S.DocReq>
                  <Text uppercase color="neutral300" size={12} weight={600}>
                    <span className="method">GET</span>{' '}
                    <span className="url">/cids/</span>
                    <span className="param">{`{cid}`}</span>
                  </Text>
                </S.DocReq>
                <S.DocRes>
                  <Text
                    uppercase
                    color="neutral600"
                    size={12}
                    weight={600}
                    marginBottom={12}
                  >
                    Response
                  </Text>
                  <S.DocCode>
                    {`{
  "statistics": [
    {
      "cost_year": 35.95,
      "cost_per_case": 35.95,
      "age": 66,
      "mortality": 1,
      "mortality_rate": 1,
      "days_hospitalized": 4,
      "cases": 1,
      "cases_female": null,
      "cases_male": 1,
      "cases_sp": null,
      "cases_undefined_gender": null,
      "cases_white": 1,
      "cases_black": null,
      "cases_yellow": null,
      "cases_brown": null,
      "cases_indigenous": null,
      "cases_undefined_race": null,
      "percent_female": null,
      "percent_male": 100,
      "percent_sp": null,
      "percent_white": 100,
      "percent_black": null,
      "percent_yellow": null,
      "percent_brown": null,
      "percent_indigenous": null,
      "_id": "5fbb139dcce1ba1b07a89522",
      "cid": "A00",
      "year": "2019",
      "disease": "5fbb12a196314c1acb8c0352",
      "__v": 0
    }
  ],
  "_id": "5fbb12a196314c1acb8c0352",
  "cid": "A00",
  "name": "Cólera",
  "__v": 1
}`}
                  </S.DocCode>
                </S.DocRes>
              </S.DocItem>

              <S.DocItem>
                <Text size={14} marginBottom={12}>
                  Retorna as estátisticas de um determinado CID10
                </Text>
                <S.DocReq>
                  <Text uppercase color="neutral300" size={12} weight={600}>
                    <span className="method">GET</span>{' '}
                    <span className="url">/statistics/</span>
                    <span className="param">{`{cid}`}</span>
                  </Text>
                </S.DocReq>
                <S.DocRes>
                  <Text
                    uppercase
                    color="neutral600"
                    size={12}
                    weight={600}
                    marginBottom={12}
                  >
                    Response
                  </Text>
                  <S.DocCode>
                    {`{
  "results": [
    {
      "cost_year": 35.95,
      "cost_per_case": 35.95,
      "age": 66,
      "mortality": 1,
      "mortality_rate": 1,
      "days_hospitalized": 4,
      "cases": 1,
      "cases_female": null,
      "cases_male": 1,
      "cases_sp": null,
      "cases_undefined_gender": null,
      "cases_white": 1,
      "cases_black": null,
      "cases_yellow": null,
      "cases_brown": null,
      "cases_indigenous": null,
      "cases_undefined_race": null,
      "percent_female": null,
      "percent_male": 100,
      "percent_sp": null,
      "percent_white": 100,
      "percent_black": null,
      "percent_yellow": null,
      "percent_brown": null,
      "percent_indigenous": null,
      "_id": "5fbb139dcce1ba1b07a89522",
      "cid": "A00",
      "year": "2019",
      "disease": {
        "_id": "5fbb12a196314c1acb8c0352",
        "name": "Cólera"
      },
      "__v": 0
    }
  ]
}`}
                  </S.DocCode>
                </S.DocRes>
              </S.DocItem>

              <S.DocItem>
                <Text size={14} marginBottom={12}>
                  Retorna as estátisticas de um determinado ano de um CID10
                </Text>
                <S.DocReq>
                  <Text uppercase color="neutral300" size={12} weight={600}>
                    <span className="method">GET</span>{' '}
                    <span className="url">/statistics/</span>
                    <span className="param">{`{cid}`}</span>
                    <span className="url">/</span>
                    <span className="param">{`{year}`}</span>
                  </Text>
                </S.DocReq>
                <S.DocRes>
                  <Text
                    uppercase
                    color="neutral600"
                    size={12}
                    weight={600}
                    marginBottom={12}
                  >
                    Response
                  </Text>
                  <S.DocCode>
                    {`{
  "cost_year": 35.95,
  "cost_per_case": 35.95,
  "age": 66,
  "mortality": 1,
  "mortality_rate": 1,
  "days_hospitalized": 4,
  "cases": 1,
  "cases_female": null,
  "cases_male": 1,
  "cases_sp": null,
  "cases_undefined_gender": null,
  "cases_white": 1,
  "cases_black": null,
  "cases_yellow": null,
  "cases_brown": null,
  "cases_indigenous": null,
  "cases_undefined_race": null,
  "percent_female": null,
  "percent_male": 100,
  "percent_sp": null,
  "percent_white": 100,
  "percent_black": null,
  "percent_yellow": null,
  "percent_brown": null,
  "percent_indigenous": null,
  "_id": "5fbb139dcce1ba1b07a89522",
  "cid": "A00",
  "year": "2019",
  "disease": {
    "_id": "5fbb12a196314c1acb8c0352",
    "name": "Cólera"
  },
  "__v": 0
}`}
                  </S.DocCode>
                </S.DocRes>
              </S.DocItem>
            </S.ModalDialogContent>
          </S.ModalDialog>
        </TouchScrollable>
      </S.DocWrapper>
    </>
  )
}

export default Doc
