import React from 'react'
import styles from './ResultNotFound.module.css'
// image import
import ResultNotFoundImg from '../../../static/images/result_not_found.svg'

function ResultNotFound(props) {

  return (
    <>
      <p>Your search -{props.searchText} - did not match any documents.</p>
      <p> Suggestions:</p>
      <ul>
            <li> Make sure that all words are spelled correctly. </li>
            <li> Try different keywords. </li>
            <li> Try more general keywords.</li>
      </ul>
      <img
        src={ResultNotFoundImg}
        alt='ResultNotFound'
        height="30"
        width="52"
        data-atf="1"
        data-frt="0"
      />
    </>
  )
}

export default ResultNotFound
