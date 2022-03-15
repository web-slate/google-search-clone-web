import React, { useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSearchParams } from "react-router-dom";

// ui
import { IconButton } from '@/ui/buttons/IconButton'
import AutoCompleteListItem from './AutoCompleteListItem'

// icons
import SearchIcon from '@/ui/icons/SearchIcon'
import CloseIcon from '@/ui/icons/CloseIcon'

// utils
import Palette from '@/utils/palette'

// styles
import styles from './AutoCompleteInput.module.css'

import useFetch from '@/hooks/useFetch'


// utils
import { API_URL } from '@/utils'




function AutoCompleteInput(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q')

  const [value, setValue] = useState(q || '')
  const [response, setResponse] = useState([])

  const res = useFetch(`${API_URL}/search?searchTerm=${value}`)



  useEffect(() => {
    if(res.response) {
        setResponse(res.response)
    }
  }, [res])

  useEffect(() => {
    if(q) {
        setResponse([])
    }
  }, [q])

  const clearValues = useCallback(() => {
    setValue('')
  }, [])

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value)
      props.onChange(e.target.value)

    },
    [setValue]
  )



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
          onChange={onChange}
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
              {response.map((data) =>
                 <AutoCompleteListItem
                  item={{ title: data.title, subTitle: data.content }}
                  />
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

// Specifies the default values for props:
AutoCompleteInput.defaultProps = {
  onChange: () => {
  }
};

AutoCompleteInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default AutoCompleteInput
