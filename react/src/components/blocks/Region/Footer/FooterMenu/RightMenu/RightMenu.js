import React from 'react'

import Link from '@/ui/Link'

import styles from './RightMenu.module.css'

function RightMenu() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} variant="dark" title="Privacy" />
      <Link className={styles.link} variant="dark" title="Terms" />
      <Link className={styles.link} variant="dark" title="Settings" />
    </div>
  )
}

export default RightMenu
