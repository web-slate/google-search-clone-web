import React from 'react'
import PropTypes from 'prop-types'

// ui
import AutoCompleteInput from '@/ui/Fields/AutoCompleteInput'
import Controls from './Controls'

// i18n
import { useI18n } from '@/i18n'

// image import
import GoogleLogo from '../../../static/images/google_logo.png'

// styles
import styles from './SearchForm.module.css'

function SearchForm(props) {
  const { formatMessage } = useI18n()

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <a href="#" title={formatMessage({ id: 'gotogooglehome' })}>
              <img
                src={GoogleLogo}
                alt={formatMessage({ id: 'google' })}
                height="30"
                width="92"
                data-atf="1"
                data-frt="0"
              />
            </a>
          </div>
          <AutoCompleteInput onChange={props.onChange} />
        </div>
        <Controls />
      </div>
    </div>
  )
}

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchForm
