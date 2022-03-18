import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ui
import { Button } from '@/ui/buttons'

// i18n
import { useI18n } from '@/i18n'

// ui
import AutoCompleteInput from '@/ui/Fields/AutoCompleteInput'

import styles from './AutoCompleteSearchBox.module.css'

function AutoCompleteSearchBox() {
  const { formatMessage } = useI18n()
  const navigate = useNavigate()

  const [query, setQuery] = useState()

  const handleSearch = useCallback(() => {
    navigate({
      pathname: '/search',
      search: `?q=${query}`,
    })
  }, [query])

  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <div className={styles.searchFormContainer}>
          <AutoCompleteInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClear={() => setQuery('')}
          />
          <div className={styles.searchFormActions}>
            <center>
              <Button
                className={styles.actionButton}
                title={formatMessage({ id: 'googlesearch' })}
                onClick={handleSearch}
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
