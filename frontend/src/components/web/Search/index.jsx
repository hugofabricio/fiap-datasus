import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@shared/Field'

import { defaultValues } from './schema'
import * as S from './styles'

const Search = () => {
  const [results, setResults] = useState([])
  const { control, errors } = useForm({ defaultValues })

  const handleChange = async (data) => {
    console.log(data)
  }

  return (
    <S.SearchWrapper>
      <S.SearchForm>
        <Input
          icon="search"
          control={control}
          type="search"
          name="q"
          label="CID10 ou nome da doença"
          onChange={handleChange}
          errors={errors}
        />
      </S.SearchForm>
      <S.SearchResults></S.SearchResults>
    </S.SearchWrapper>
  )
}

export default Search
