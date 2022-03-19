import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// blocks
import SearchForm from '@/blocks/SearchForm'
import ResultList from '@/blocks/ResultList'
import NoResultFound from '@/blocks/ResultNotFound'

// hooks
import useFetch from '@/hooks/useFetch'

// utils
import { API_URL } from '@/utils'

function SearchResults() {
  const [searchParams] = useSearchParams()

  const q = searchParams.get('q')

  const [query, setQuery] = useState(q || '')

  const { response: searchResults = [] } = useFetch(
    `${API_URL}/search?searchTerm=${query}`
  )

  return (
    <>
      <SearchForm
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClear={() => setQuery('')}
      />
      {searchResults.length ? (
        <ResultList query={query} data={searchResults} />
      ) : (
        <NoResultFound searchText={query} />
      )}
    </>
  )
}

export default SearchResults
