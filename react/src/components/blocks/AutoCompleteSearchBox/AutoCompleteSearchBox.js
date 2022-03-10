import React from 'react'

// ui
import { Button } from '@/ui/buttons'

// i18n
import { useI18n } from '@/i18n'

// ui
import AutoCompleteInput from '@/ui/Fields/AutoCompleteInput'

import styles from './AutoCompleteSearchBox.module.css'

function AutoCompleteSearchBox() {
  const { formatMessage } = useI18n()
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.searchFormContainer}>
          <AutoCompleteInput />
          <div className={styles.searchFormActions}>
            <center>
              <Button
                className={styles.actionButton}
                title={formatMessage({ id: 'googlesearch' })}
              />
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

export default AutoCompleteSearchBox
