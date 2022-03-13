import React from 'react'
import styles from './ResultNotFound.module.css'
// i18n
import { useI18n } from '@/i18n'

// image import
import NoResultFoundImg from '../../../static/images/result_not_found.svg'

function ResultNotFound(props) {

  const { searchText = '' } = props
  const { formatMessage } = useI18n()

  return (
    <>
      <p>{formatMessage({ id: 'noresultfound' })} -{searchText} - {formatMessage({ id: 'didnotmatchanydocuments' })}.</p>
      <p>{formatMessage({ id: 'suggestions' })} :</p>
      <ul>
            <li> {formatMessage({ id: 'make_sure_that_all_words_are_spelled_correctly' })}.</li>
            <li> {formatMessage({ id: 'try_different_keywords' })}. </li>
            <li> {formatMessage({ id: 'try_more_general_keywords' })}.</li>
      </ul>
      <img
        src={NoResultFoundImg}
        alt={formatMessage({ id: 'noresultfound' })}
        height="30"
        width="52"
        data-atf="1"
        data-frt="0"
      />
    </>
  )
}

export default ResultNotFound
