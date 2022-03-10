import React from 'react'
import PropTypes from 'prop-types'

// utils
import Palette from '@/utils/palette'

// ui
import SearchIcon from '@/ui/icons/SearchIcon'

// styles
import styles from './AutoCompleteInput.module.css'

function AutoCompleteListItem({ item }) {
  return (
    <li className={styles.autoCompleteResultListItem}>
      <div className={styles.autoCompleteResultItem}>
        <div className={styles.searchIcon}>
          <SearchIcon size={20} color={Palette.color.manatee} />
        </div>
        <div className={styles.autoCompleteResultItemContent}>
          <div className={styles.autoCompleteResultItemTitle}>{item.title}</div>
          {item.subTitle && (
            <div className={styles.autoCompleteResultItemSubTitle}>
              {item.subTitle}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

AutoCompleteListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
  }).isRequired,
}

export default AutoCompleteListItem
