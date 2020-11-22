import React, { useContext } from 'react'
import { connectAutoComplete } from 'react-instantsearch-dom'

import { AppContext } from '@contexts/appContext'
import { Input } from '@shared/Field'
import Text from '@shared/Text'
import Hit from '@web/Hit'

import * as S from './styles'

const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const { setCid, setData } = useContext(AppContext)

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }

  const handleOnClick = (cid) => {
    setCid(cid)
    refine()
  }

  return (
    <S.AutocompleteWrapper>
      <S.SearchForm onSubmit={handleOnSubmit}>
        <Input
          icon="search"
          type="search"
          name="q"
          label="CID10 ou nome da doença"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
        />
      </S.SearchForm>
      {currentRefinement && (
        <S.SearchResults>
          {hits.length > 0 ? (
            hits.map((hit) => (
              <Hit
                key={hit.objectID}
                hit={hit}
                handleOnClick={() => handleOnClick(hit.cid)}
              />
            ))
          ) : (
            <S.EmptyItem>
              <Text>Nenhum resultado encontrado.</Text>
            </S.EmptyItem>
          )}
        </S.SearchResults>
      )}
    </S.AutocompleteWrapper>
  )
}

const ConnectAutocomplete = connectAutoComplete(Autocomplete)

export default ConnectAutocomplete
