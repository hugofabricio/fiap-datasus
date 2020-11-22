import React from 'react'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

import Autocomplete from '@web/Autocomplete'
import algoliasearch from 'algoliasearch/lite'

import * as S from './styles'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <Configure hitsPerPage={2} />
      <Autocomplete />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
