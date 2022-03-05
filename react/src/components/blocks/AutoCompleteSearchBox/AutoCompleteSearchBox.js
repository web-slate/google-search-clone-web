import React, { useCallback, useState } from 'react'

// ui
import { IconButton } from '@/ui/buttons/IconButton'
import AutoCompleteListItem from './AutoCompleteListItem'

// icons
import SearchIcon from '@/ui/icons/SearchIcon'
import CloseIcon from '@/ui/icons/CloseIcon'

// utils
import Palette from '@/utils/palette'

// styles
import styles from './AutoCompleteSearchBox.module.css'

function AutoCompleteSearchBox() {
  const [value, setValue] = useState('')

  const clearValues = useCallback(() => {
    setValue('')
  }, [])

  return (
    <div
      className={`${styles.autoCompleteContainer} ${
        value ? styles.expanded : ''
      }`}
    >
      <div className={styles.autoComplete}>
        <div className={styles.searchIcon}>
          <SearchIcon size={20} color={Palette.color.manatee} />
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.autoCompleteInput}
          type="text"
        />
        {value && (
          <IconButton
            onClick={clearValues}
            icon={<CloseIcon size={24} color={Palette.color.manatee} />}
          />
        )}
      </div>
      {value && (
        <>
          <div className={styles.divider} />
          <div className={styles.autoCompleteResultContainer}>
            <ul className={styles.autoCompleteResultList} role="listbox">
              <AutoCompleteListItem
                item={{ title: 'Result 1', subTitle: 'Sub Title 1' }}
              />
              <AutoCompleteListItem
                item={{ title: 'Result 2', subTitle: 'Sub Title 2' }}
              />
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default AutoCompleteSearchBox
