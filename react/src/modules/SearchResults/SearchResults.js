import React from 'react'

// blocks
import SearchForm from '@/blocks/SearchForm'

// styles
import styles from './SearchResults.module.css'

function SearchResults() {
  return (
    <div className={styles.container}>
      <SearchForm />
    </div>
  )
}

export default SearchResults
