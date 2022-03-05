import React from 'react'

// ui
import LocationInfo from './LocationInfo'
import FooterMenu from './FooterMenu'

// styles
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <LocationInfo />
      <FooterMenu />
    </div>
  )
}

export default Footer
