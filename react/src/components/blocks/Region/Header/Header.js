import React from 'react'

import styles from './Header.module.css'

import RightMenu from './RightMenu'

function Header() {
  return (
    <div className={styles.topMenu}>
      <div className={styles.topMenuContainer}>
        <div className={styles.topMenuContent}>
          <RightMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
