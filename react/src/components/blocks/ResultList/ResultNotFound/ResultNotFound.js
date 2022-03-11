import React from 'react'
import styles from './ResultNotFound.module.css'
// image import
import ResultNotFoundImg from '../../../../static/images/result_not_found.svg'

function ResultNotFound() {
  return (
    <>
      <p className={styles.line}>Your search - dsfdsfdfdsfdsfdsdsadsadsdsa - did not match any documents.</p>
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
