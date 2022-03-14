import React, { useState, useEffect } from 'react'
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
  const [query, setQuery] = useState(props.query || '')

  const res = useFetch(`${API_URL}/search?searchterm=${query}`)

  const onSearch = () => {}

  useEffect(() => {
    console.log(res)
  }, [res])

  return (
    <>
      <SearchForm onChange={(e) => setQuery(e)} />
      <div className={styles.container}>
        <div className={styles.resultPage}>
          <div className={styles.resultCount}>
            About 14,40,00,000 results<nobr> (0.61 seconds)&nbsp;</nobr>
          </div>
          <ResultList />
        </div>
      </div>
    </>
  )
}

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
}

export default SearchResults
