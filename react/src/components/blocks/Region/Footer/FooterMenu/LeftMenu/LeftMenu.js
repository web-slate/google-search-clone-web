import React from 'react'

import Link from '@/ui/Link'

import styles from './LeftMenu.module.css'

function LeftMenu() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} variant="dark" title="About" />
      <Link className={styles.link} variant="dark" title="Advertising" />
      <Link className={styles.link} variant="dark" title="Business" />
      <Link className={styles.link} variant="dark" title="How Search works" />
    </div>
  )
}

export default LeftMenu
