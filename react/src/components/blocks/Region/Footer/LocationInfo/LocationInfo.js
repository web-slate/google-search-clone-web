import React from 'react'

// i18n
import { useI18n } from '@/i18n'

import styles from './LocationInfo.module.css'

function LocationInfo() {
  const { formatMessage } = useI18n()
  return <div className={styles.container}>{formatMessage({ id: 'india' })}</div>
}

export default LocationInfo
