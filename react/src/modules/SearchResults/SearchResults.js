import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// blocks
import SearchForm from '@/blocks/SearchForm'
import ResultList from '@/blocks/ResultList'
import NoResultFound from '@/blocks/ResultNotFound'


// styles
import styles from './SearchResults.module.css'

// hooks
import useFetch from '@/hooks/useFetch'

// utils
import { API_URL } from '@/utils'

function SearchResults(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q')
  const [query, setQuery] = useState(q || '')

  const res = useFetch(`${API_URL}/search?searchTerm=${query}`)
  const responseData = res.response

  const onSearch = () => {}

  useEffect(() => {

  }, [res])

  if (res.response !== undefined && res.response.length > 0) {
    return (
      <>
        <SearchForm onChange={(e) => setQuery(e)} />
        <div className={styles.container}>
          <div className={styles.resultPage}>
            <div className={styles.resultCount}>
              About {res.response.length} results<nobr> (0.61 seconds)&nbsp;</nobr>
            </div>
            <ResultList resultData={res.response} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SearchForm onChange={(e) => setQuery(e)} />
      <NoResultFound searchText={query} />
    </>
  )

}

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
}

export default SearchResults
