import React from 'react'
import styles from './ResultList.module.css'
import {ResultNotFound} from './ResultNotFound'

function ResultList() {
  return (
    <>
      <p className={styles.line}>ResultList goes here.</p>
      <ResultNotFound />
    </>
  )
}

export default ResultList
