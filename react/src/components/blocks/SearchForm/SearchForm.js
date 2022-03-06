import React from 'react'

// ui
import { Button } from '@/ui/buttons'

// blocks
import AutoCompleteSearchBox from '@/blocks/AutoCompleteSearchBox'

import styles from './SearchForm.module.css'

function SearchForm() {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.searchFormContainer}>
          <AutoCompleteSearchBox />
          <div className={styles.searchFormActions}>
            <center>
              <Button className={styles.actionButton} title="Google Search" />
              <Button
                className={styles.actionButton}
                title="I'm Feeling Lucky"
              />
            </center>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
