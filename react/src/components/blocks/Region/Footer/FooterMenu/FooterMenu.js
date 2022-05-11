import React from 'react'

// components
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

import styles from './FooterMenu.module.css'

function FooterMenu() {
  return (
    <div className={styles.container}>
      <LeftMenu />
      <RightMenu />
    </div>
  )
}

export default FooterMenu
