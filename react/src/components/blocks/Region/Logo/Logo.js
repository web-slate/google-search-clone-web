import React from 'react'
import styles from './Logo.module.css'
// image import
import GoogleLogo from '../../../../static/images/google_logo.png';

function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          alt="google-logo"
          src={GoogleLogo}
          className={styles.logo}
        />
      </div>
    </div>
  )
}

export default Logo
