import React from 'react'

// ui
import Link from '@/ui/Link'

// i18n
import { useI18n } from '@/i18n'

// styles
import styles from './RightMenu.module.css'

function RightMenu() {
  const { formatMessage } = useI18n()

  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        variant="dark"
        title={formatMessage({ id: 'privacy' })}
      />
      <Link
        className={styles.link}
        variant="dark"
        title={formatMessage({ id: 'terms' })}
      />
      <Link
        className={styles.link}
        variant="dark"
        title={formatMessage({ id: 'settings' })}
      />
    </div>
  )
}

export default RightMenu
