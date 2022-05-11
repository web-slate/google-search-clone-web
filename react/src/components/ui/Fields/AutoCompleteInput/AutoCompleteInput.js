import React from 'react'
import PropTypes from 'prop-types'

// ui
import { IconButton } from '@/ui/buttons/IconButton'

// icons
import SearchIcon from '@/ui/icons/SearchIcon'
import CloseIcon from '@/ui/icons/CloseIcon'

// utils
import Palette from '@/utils/palette'

// styles
import styles from './AutoCompleteInput.module.css'

function AutoCompleteInput(props) {
  const { value, onChange, onClear, result } = props || {}

  const hasResult = result.length > 0

  return (
    <div
      className={`${styles.autoCompleteContainer} ${
        hasResult ? styles.expanded : ''
      }`}
    >
      <div className={styles.autoComplete}>
        <div className={styles.searchIcon}>
          <SearchIcon size={20} color={Palette.color.manatee} />
        </div>
        <input
          value={value}
          onChange={onChange}
          className={styles.autoCompleteInput}
          type="text"
        />
        {value && (
          <IconButton
            onClick={onClear}
            icon={<CloseIcon size={24} color={Palette.color.manatee} />}
          />
        )}
      </div>
      {hasResult && (
        <>
          <div className={styles.divider} />
          <div className={styles.autoCompleteResultContainer}>
            <ul className={styles.autoCompleteResultList} role="listbox">
              {result.map((data) => (
                <AutoCompleteListItem
                  item={{ title: data.title, subTitle: data.content }}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

AutoCompleteInput.defaultProps = {
  query: '',
  result: [],
  onChange: () => {},
  onClear: () => {},
}

AutoCompleteInput.propTypes = {
  result: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  value: PropTypes.string,
}

export default AutoCompleteInput
