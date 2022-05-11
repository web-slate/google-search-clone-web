import React from 'react'

// ui
import Link from '@/ui/Link'

// i18n
import { useI18n } from '@/i18n'

import styles from './LeftMenu.module.css'

function LeftMenu() {
  const { formatMessage } = useI18n()

  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        variant="dark"
        title={formatMessage({ id: 'about' })}
      />
      <Link
        className={styles.link}
        variant="dark"
        title={formatMessage({ id: 'advertising' })}
      />
      <Link
        className={styles.link}
        variant="dark"
        title={formatMessage({ id: 'business' })}
      />
      <Link
        className={styles.link}
        variant="dark"
        title={formatMessage({ id: 'howsearchworks' })}
      />
    </div>
  )
}

export default LeftMenu
