import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// blocks
import SearchForm from '@/blocks/SearchForm'
import ResultList from '@/blocks/ResultList'
import NoResultFound from '@/blocks/ResultNotFound'

// hooks
import useLazyFetch from '@/hooks/useLazyFetch'

// utils
import { API_URL } from '@/utils'

function SearchResults() {
  const [searchParams] = useSearchParams()

  const q = searchParams.get('q')

  const [query, setQuery] = useState(q || '')

  const {
    mutate,
    response: searchResults,
    loading,
  } = useLazyFetch(`${API_URL}/search?searchTerm=${query}`)

  useEffect(() => {
    mutate && mutate()
  }, [])

  return (
    <>
      <SearchForm
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClear={() => setQuery('')}
        onSearch={mutate}
      />
      {!loading && <ResultList query={query} data={searchResults} />}
    </>
  )
}

export default SearchResults
