import React from 'react'
import PropTypes from 'prop-types'

// ui
import { IconButton } from '@/ui/buttons/IconButton'
import SearchIcon from '@/ui/icons/SearchIcon'
import CloseIcon from '@/ui/icons/CloseIcon'

// utils
import Palette from '@/utils/palette'

// styles
import styles from './InputTextField.module.css'

function InputTextField({ onClear, onSearch, ...props }) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <input {...props} className={styles.input} type="text" />
        {props.value && (
          <IconButton
            onClick={onClear}
            icon={<CloseIcon size={24} color={Palette.color.manatee} />}
          />
        )}
        <div className={styles.divider} />
        <button className={styles.searchButton} onClick={onSearch}>
          <SearchIcon size={24} color={Palette.color.dodgerBlue} />
        </button>
      </div>
    </div>
  )
}

InputTextField.propTypes = {
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
}

InputTextField.defaultProps = {
  onClear: () => {},
  onSearch: () => {},
}

export default InputTextField
