import React from 'react'

// ui
import { Button } from '@/ui/buttons'

// i18n
import { useI18n } from '@/i18n'

// blocks
import AutoCompleteSearchBox from '@/blocks/AutoCompleteSearchBox'

import styles from './SearchForm.module.css'

function SearchForm() {
  const { formatMessage } = useI18n()
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.searchFormContainer}>
          <AutoCompleteSearchBox />
          <div className={styles.searchFormActions}>
            <center>
              <Button className={styles.actionButton} title={formatMessage({ id: 'googlesearch' })} />
              <Button
                className={styles.actionButton}
                title={formatMessage({ id: 'imfeelinglucky' })}
              />
            </center>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
