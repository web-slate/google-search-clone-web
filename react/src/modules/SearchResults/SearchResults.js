import React from 'react'

// blocks
import SearchForm from '@/blocks/SearchForm'
import ResultList from '@/blocks/ResultList'
import ResultNotFound from '@/blocks/ResultNotFound'

// styles
import styles from './SearchResults.module.css'

function SearchResults() {
  return (
    <>
      <SearchForm />
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

export default SearchResults
