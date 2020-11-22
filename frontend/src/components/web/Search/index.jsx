import React from 'react'
import {
  connectAutoComplete,
  InstantSearch,
  Configure
} from 'react-instantsearch-dom'

import { Input } from '@shared/Field'
import algoliasearch from 'algoliasearch/lite'

import * as S from './styles'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Autocomplete = ({ hits, currentRefinement, refine }) => {
  return (
    <S.SearchWrapper>
      <S.SearchForm>
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
          {hits.map((hit) => (
            <S.SearchItem key={hit.objectID}>
              <S.SearchLink onClick={() => alert(hit.nome)} size={14} uppercase>
                {hit.cid} - {hit.nome}
              </S.SearchLink>
            </S.SearchItem>
          ))}
        </S.SearchResults>
      )}
    </S.SearchWrapper>
  )
}

const ConnectAutocomplete = connectAutoComplete(Autocomplete)

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
    <Configure hitsPerPage={3} />
    <ConnectAutocomplete />
  </InstantSearch>
)

export default Search
